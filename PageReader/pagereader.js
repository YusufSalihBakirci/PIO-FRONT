// PageReader function
function pageReader() {
  console.log("pageRead");

  // Elemanin gorunurlugunu kontrol eder
  function isVisible(element) {
    const style = window.getComputedStyle(element);
    return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0";
  }

  // Eleman parent'a gore yeterince genis mi?
  function isFullWidth(element) {
    const parent = element.parentElement;
    if (!parent) return false;

    const elementWidth = element.getBoundingClientRect().width;
    const parentWidth = parent.getBoundingClientRect().width;
    return elementWidth >= parentWidth * 0.95;
  }

  // Eleman ekran genisligine gore çok küçük mü kontrolü.
  function isSignificantlySmallerThanViewport(element, widthPercent) {
    const rect = element.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    return rect.width < viewportWidth * widthPercent;
  }

  // Aşağıdaki kelimeleri içeren CLASS ve ID isimleri son listeden exclude edilecektir.
  const excludeKeywords = new Set([
    "swiper",
    "slick",
    "owl",
    "carousel",
    "empty",
    "js-empty-div",
    "singlebanner__wrap__background",
    "singlebanner__wrap__foreground",
    "singlebanner__wrap",
    "homepage-seo-container",
    "full-contained-widget",
    "secondary-menu-shown",
    "header__navigation-toggle",
    "modal__assembler",
    "firsat-kuponlari",
    "cf",
    "modal",
    "variants",
    "noSwipe",
    "is-layout-constrained",
    "hidden-xs", // hidden-xs class'ı dahil edilmez
    "none", // none class'ı dahil edilmez
    "\\", // Eğer id içinde ters eğik çizgi (\) varsa, bu da dahil edilmez
  ]);

  // Listeye tagName ekleyelim
  const excludeTags = new Set(["picture", "ul", "ol", "li"]);

  function classOrIdToExclude(element) {
    const idContainsExcludedKeyword = element.id && [...excludeKeywords].some((keyword) => element.id === keyword);

    const classContainsExcludedKeyword = Array.from(element.classList).some(
      (cls) => excludeKeywords.has(cls) // classList'teki class ile eşleşen keyword
    );

    const tagNameContainsExcludedKeyword = excludeTags.has(element.tagName.toLowerCase()); // tagName kontrolü (case insensitive)

    return idContainsExcludedKeyword || classContainsExcludedKeyword || tagNameContainsExcludedKeyword;
  }

  // Görünür ve tam genişliğe sahip elemanları kontrol eder
  function getVisibleFullWidthElementsFromArray(elementsArray) {
    const elements = [];

    elementsArray.forEach((container) => {
      if (!container || !container.children) {
        return; // Geçersiz HTML elemanlarını atla
      }

      const children = Array.from(container.children);

      for (const child of children) {
        if (classOrIdToExclude(child)) {
          continue; // Carousel kütüphaneleri ve exclude edilen class isimlerini atla
        }

        if (isSignificantlySmallerThanViewport(child, 0.9)) {
          continue; // Yukarıdaki eşik değeri altındaki elemanları atla
        }

        // Eğer görünür ve tam genişliğe sahipse, bu elemanları ekle
        if (isVisible(child) && isFullWidth(child)) {
          elements.push(child);

          // Child elemanları recursive olarak seç
          elements.push(...getVisibleFullWidthElementsFromArray([child]));
        }
      }
    });

    return elements;
  }

  // Herhangi bir elemana özel selector oluştur
  function getUniqueSelector(element) {
    if (element.id) return "#" + element.id;
    if (element.className) {
      const classes = Array.from(element.classList).join(".");
      return element.tagName.toLowerCase() + "." + classes;
    }
    return element.tagName.toLowerCase();
  }

  // Seçimi istenen tag'leri burada seç
  function main(bodyContent) {
    // Start with the body element in the array
    const visibleElements = getVisibleFullWidthElementsFromArray([bodyContent]);
    return visibleElements.map(getUniqueSelector);
  }

  // Measure the execution time of the 'main' function
  // console.time('Execution Time')

  return new Promise((resolve) => {
    const selectors = Array.from(new Set(main(document.body)));
    console.log("Found selectors:", selectors);
    resolve(selectors);
  });
}

// Dropdown Earlet
function createSelectorDropdownEarlet() {
  // Toggle butonu oluşturma
  const toggleButton = document.createElement("button");
  toggleButton.id = "selector-toggle-button";
  toggleButton.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 3h18v18H3V3z"/>
      <path d="M9 9h6v6H9V9z"/>
    </svg>
  `;
  toggleButton.style.cssText = `
    position: fixed;
    left: 20px;
    bottom: 20px;
    z-index: 9998;
    background: #3b82f6;
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    &:hover {
      transform: scale(1.05);
      background: #2563eb;
    }
  `;

  // Ana container
  const container = document.createElement("div");
  container.id = "selector-dropdown-earlet";
  container.style.cssText = `
    position: fixed;
    left: 20px;
    bottom: 80px;
    z-index: 9999;
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 320px;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: translateY(20px) scale(0.95);
    transform-origin: bottom left;
  `;

  // Toggle fonksiyonu
  let isOpen = false;
  toggleButton.addEventListener("click", () => {
    isOpen = !isOpen;
    
    if (isOpen) {
      // Açılış animasyonu
      container.style.visibility = "visible";
      container.style.opacity = "1";
      container.style.transform = "translateY(0) scale(1)";
      toggleButton.style.transform = "rotate(45deg)";
    } else {
      // Kapanış animasyonu
      container.style.opacity = "0";
      container.style.transform = "translateY(20px) scale(0.95)";
      toggleButton.style.transform = "rotate(0deg)";
      setTimeout(() => {
        container.style.visibility = "hidden";
      }, 400);
    }
  });

  const header = document.createElement("div");
  header.innerHTML = `
    <h2 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 600;">Page Element Scanner</h2>
    <p style="margin: 0; font-size: 13px; color: #666;">Select and analyze page elements easily</p>
  `;

  const infoSection = document.createElement("div");
  infoSection.style.cssText = `
    padding: 12px;
    background: #f5f7fa;
    border-radius: 8px;
    font-size: 13px;
  `;

  infoSection.innerHTML = `
    <div style="margin-bottom: 8px; color: #2563eb; font-weight: 500;">How to use</div>
    <ol style="margin: 0; padding-left: 20px; color: #4b5563;">
      <li>Wait for complete page load</li>
      <li>Confirm with checkbox below</li>
      <li>Click scan to detect elements</li>
      <li>Select elements to highlight</li>
    </ol>
  `;

  const checkboxContainer = document.createElement("div");
  checkboxContainer.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background: #f8fafc;
    border-radius: 8px;
  `;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "wholePage";
  checkbox.style.cssText = `
    cursor: pointer;
    width: 16px;
    height: 16px;
  `;

  const label = document.createElement("label");
  label.htmlFor = "wholePage";
  label.textContent = "I confirm the page is loaded";
  label.style.cssText = `
    font-size: 13px;
    color: #4b5563;
  `;

  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(label);

  const dropdown = document.createElement("select");
  dropdown.setAttribute("multiple", "true");
  dropdown.style.cssText = `
    padding: 12px;
    width: 100%;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    font-size: 13px;
    background: white;
    height: 200px;
    color: #1f2937;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    outline: none;
    
    /* Modern scrollbar */
    scrollbar-width: thin;
    scrollbar-color: #94a3b8 #f1f5f9;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f8fafc;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #94a3b8;
      border-radius: 4px;
      border: 2px solid #f8fafc;
    }

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  `;

  const scanButton = document.createElement("button");
  scanButton.textContent = "Scan Elements";
  scanButton.style.cssText = `
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    background: #e2e8f0;
    color: #4b5563;
    cursor: not-allowed;
    width: 100%;
  `;

  const pushButton = document.createElement("button");
  pushButton.textContent = "Push to dataLayer";
  pushButton.style.cssText = `
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    background: #2563eb;
    color: white;
    cursor: pointer;
    width: 100%;
    opacity: 0.6;
    cursor: not-allowed;
  `;

  // Highlight style
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    #selector-dropdown-earlet > * {
      animation: fadeInUp 0.4s ease-out forwards;
      opacity: 0;
    }

    #selector-dropdown-earlet > *:nth-child(1) { animation-delay: 0.1s; }
    #selector-dropdown-earlet > *:nth-child(2) { animation-delay: 0.2s; }
    #selector-dropdown-earlet > *:nth-child(3) { animation-delay: 0.3s; }
    #selector-dropdown-earlet > *:nth-child(4) { animation-delay: 0.4s; }
    #selector-dropdown-earlet > *:nth-child(5) { animation-delay: 0.5s; }

    .selector-highlight {
      outline: 2px solid #ef4444 !important;
      background-color: rgba(239, 68, 68, 0.1) !important;
      animation: pulseAnimation 1.5s infinite ease-in-out;
    }

    @keyframes pulseAnimation {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }

    select option {
      padding: 10px 12px;
      margin: 4px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      font-size: 13px;
      color: #1f2937;
      background: #f8fafc;
      border: 1px solid transparent;
    }

    select option:hover {
      background: #f1f5f9;
      border-color: #e2e8f0;
    }

    select option:checked {
      background: #eff6ff !important;
      border-color: #3b82f6;
      color: #1d4ed8;
      font-weight: 500;
      padding-left: 20px;
    }

    select option:checked::before {
      content: "→";
      position: absolute;
      left: 8px;
      color: #3b82f6;
    }
  `;

  // Event Listeners
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      scanButton.style.background = "#2563eb";
      scanButton.style.color = "white";
      scanButton.style.cursor = "pointer";
      dropdown.style.opacity = "1";
    } else {
      scanButton.style.background = "#e2e8f0";
      scanButton.style.color = "#4b5563";
      scanButton.style.cursor = "not-allowed";
      dropdown.style.opacity = "0.6";
      dropdown.innerHTML = "<option>Please confirm page is loaded...</option>";
      dropdown.disabled = true;
      pushButton.style.opacity = "0.6";
      pushButton.style.cursor = "not-allowed";
    }
  });

  scanButton.addEventListener("click", () => {
    if (!checkbox.checked) return;

    dropdown.disabled = false;
    dropdown.innerHTML = "<option>Scanning elements...</option>";
    pushButton.style.opacity = "0.6";
    pushButton.style.cursor = "not-allowed";

    pageReader().then((selectors) => {
      populateDropdown(selectors);
      if (selectors && selectors.length > 0) {
        pushButton.style.opacity = "1";
        pushButton.style.cursor = "pointer";
      }
    });
  });

  function populateDropdown(selectors) {
    dropdown.innerHTML = "";
    
    if (!selectors || selectors.length === 0) {
      const option = document.createElement("option");
      option.text = "No elements found";
      option.style.cssText = `
        padding: 12px;
        color: #94a3b8;
        font-style: italic;
        text-align: center;
        background: #f8fafc;
      `;
      dropdown.appendChild(option);
      return;
    }

    selectors.forEach((selector, index) => {
      const option = document.createElement("option");
      option.value = selector;
      option.text = `Element ${index + 1}: ${selector.slice(0, 50)}${selector.length > 50 ? "..." : ""}`;
      dropdown.appendChild(option);
    });
  }

  dropdown.addEventListener("change", (e) => {
    document.querySelectorAll(".selector-highlight").forEach((el) => {
      el.classList.remove("selector-highlight");
    });

    if (e.target.value) {
      const selectedElement = document.querySelector(e.target.value);
      if (selectedElement) {
        selectedElement.classList.add("selector-highlight");
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    }
  });

  // Append elements
  container.appendChild(header);
  container.appendChild(infoSection);
  container.appendChild(checkboxContainer);
  container.appendChild(dropdown);
  container.appendChild(scanButton);
  container.appendChild(pushButton);
  document.head.appendChild(style);
  document.body.appendChild(toggleButton);
  document.body.appendChild(container);
}

// Execute the earlet
createSelectorDropdownEarlet();