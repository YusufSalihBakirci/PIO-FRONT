import { useIframeContent, useIframeUrl } from "../../iframeStore.js";

// Define excluded keywords and tags
const excludeKeywords = new Set(["header", "footer", "nav", "navigation", "menu", "sidebar", "advertisement", "ad", "popup", "modal", "cookie", "banner", "notification"]);

const excludeTags = new Set(["script", "style", "noscript", "iframe", "nav", "header", "footer"]);

export const checkIframeAccess = async () => {
  try {
    const response = await fetch("http://localhost:3000/iframe-check");
    if (!response.ok) {
      throw new Error("Server not configured for iframe access");
    }
    return true;
  } catch (error) {
    console.error("Iframe access check failed:", error);
    return false;
  }
};

export const pageReader = async (iframeUrl) => {
  // First check if iframe access is possible
  const canAccess = await checkIframeAccess();
  if (!canAccess) {
    throw new Error("Cannot access iframe - server configuration issue");
  }

  return fetch(iframeUrl)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Store both URL and content
      const iframeUrlStore = useIframeUrl();
      const iframeContentStore = useIframeContent();

      iframeUrlStore.content.value = iframeUrl;
      iframeContentStore.content.value = doc;

      // Create a preview element
      const previewContent = document.createElement("div");
      previewContent.innerHTML = html;
      iframeContentStore.previewElement.value = previewContent;

      // Get main content areas while excluding unwanted elements
      function getMainContentAreas(document) {
        const mainSelectors = ["main", "#main", "#content", ".main-content", "article", ".content", '[role="main"]', ".page-content", ".site-content", ".container", ".wrapper"];

        const elements = [];
        mainSelectors.forEach((selector) => {
          const found = document.querySelectorAll(selector);
          found.forEach((el) => {
            if (!shouldExcludeElement(el)) {
              elements.push(el);
            }
          });
        });

        return elements;
      }

      // Check if element should be excluded
      function shouldExcludeElement(element) {
        // Check for excluded keywords in ID and classes
        if (element.id && excludeKeywords.has(element.id)) return true;
        if (Array.from(element.classList).some((cls) => excludeKeywords.has(cls))) return true;

        // Check for excluded tags
        if (excludeTags.has(element.tagName.toLowerCase())) return true;

        // Check if element is hidden
        const style = element.getAttribute("style") || "";
        if (style.includes("display: none") || style.includes("visibility: hidden")) return true;

        return false;
      }

      // Generate unique selector for an element
      function generateSelector(element) {
        if (!element) return null;

        // Try ID first
        if (element.id) {
          return `#${element.id}`;
        }

        // Try unique class combination
        const classes = Array.from(element.classList).filter((cls) => !excludeKeywords.has(cls));

        if (classes.length > 0) {
          const classSelector = `.${classes.join(".")}`;
          // Check if this selector is unique
          if (doc.querySelectorAll(classSelector).length === 1) {
            return classSelector;
          }
        }

        // Use tag with parent context if needed
        let selector = element.tagName.toLowerCase();
        const parent = element.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(element) + 1;
          return `${generateSelector(parent)} > ${selector}:nth-child(${index})`;
        }

        return selector;
      }

      // Main function to get all valid selectors
      function getAllValidSelectors() {
        const mainAreas = getMainContentAreas(doc);
        const selectors = new Set();

        mainAreas.forEach((area) => {
          // Get the area's selector
          const areaSelector = generateSelector(area);
          if (areaSelector) selectors.add(areaSelector);

          // Get direct children that could be good insertion points
          const children = area.children;
          Array.from(children).forEach((child) => {
            if (!shouldExcludeElement(child)) {
              const childSelector = generateSelector(child);
              if (childSelector) selectors.add(childSelector);
            }
          });
        });

        return Array.from(selectors);
      }

      const selectors = getAllValidSelectors();

      return selectors;
    })
    .catch((error) => {
      console.error("Error reading page:", error);
      return [];
    });
};

export function highligthSelection(_, selectedId) {
  const iframe = document.getElementById("piovare-frame");
  if (!iframe || !iframe.contentWindow || !iframe.contentDocument) {
    console.error("Iframe not accessible");
    return;
  }

  // Add highlight styles to iframe document
  const styleId = "highlight-styles";
  if (!iframe.contentDocument.getElementById(styleId)) {
    const style = iframe.contentDocument.createElement("style");
    style.id = styleId;
    style.textContent = `
      .element-highlight {
        position: relative !important;
        background-color: rgba(0, 123, 255, 0.3) !important;
        border: 2px solid rgba(0, 123, 255, 0.7) !important;
        box-shadow: 0 0 10px rgba(0, 123, 255, 0.5) !important;
        transition: all 0.3s ease !important;
        pointer-events: none !important;
      }
    `;
    iframe.contentDocument.head.appendChild(style);
  }

  // Remove existing highlights
  const existingHighlight = iframe.contentDocument.querySelector(".element-highlight");
  if (existingHighlight) {
    existingHighlight.classList.remove("element-highlight");
  }

  // Find and highlight the selected element
  const selectedElement = iframe.contentDocument.querySelector(selectedId);
  if (selectedElement) {
    selectedElement.classList.add("element-highlight");
    selectedElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  } else {
    console.warn("Selected element not found:", selectedId);
  }
}
