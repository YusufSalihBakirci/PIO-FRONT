import { useIframeUrl, useIframeContent } from "../../iframeStore";

export function FirePopup(basicInputsData) {
  console.log(basicInputsData.targetRequirements["setImage.desktop-image-url"]);
  const config = {
    desktopWidth: "600px",
    mobileWidth: "320px",
    img: window.innerWidth > 768 ? basicInputsData.targetRequirements["setImage.desktop-image-url"] : basicInputsData.targetRequirements["setImage.mobile-image-url"],
    url: "#",
  };
  const iframeStore = useIframeUrl();
  let target = iframeStore.content.contentWindow.document;
  if (!document.querySelector("#vl-popup-container")) {
    var style = document.createElement("style");
    style.innerHTML = `
        #vl-popup-container {
            z-index: 10000;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }

        #vl-popup-container .vl-popup-overlay {
            z-index: 10000;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.6;
            position: fixed;
            top: 0;
            left: 0;
        }

        #vl-popup-container .vl-popup {
            position: absolute;
            z-index: 100001;
            width:${config.desktopWidth};
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
        }

        #vl-popup-container .vl-popup-image {
            width:${config.desktopWidth};
        }

        #vl-popup-container .vl-popup-close {
            position: absolute;
            right: 1em;
            top: 1em;
            cursor: pointer;
            z-index: 2;
            width: 2em;
            height: 2em;
            background-color: white;
            color: black;
            display: grid;
            place-items: center;
            border-radius: 50%;
        }

        @media only screen and (max-width: 768px) {
            #vl-popup-container .vl-popup {
                width:${config.mobileWidth};
            }

            #vl-popup-container .vl-popup-image {
                width:${config.mobileWidth};
            }
        }
        `;
    target.head.append(style);

    const popup = document.createElement("div");
    popup.id = "vl-popup-container";
    popup.innerHTML = `
        <div class="vl-popup-overlay"></div>
        <div class="vl-popup">
          <span class="vl-popup-close">&#x2716;</span>
          <a href=${config.url}>
            <img src=${config.img} class="vl-popup-image" alt="vl-popup-image" />
          </a>
        </div>
        `;
    target.body.append(popup);

    popup.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);
    popup.querySelector(".vl-popup-close").addEventListener("click", closePopup);

    popup.querySelector("a").addEventListener("click", clickPopup);

    function closePopup() {
      popup.remove();
      style.remove();
    }

    function clickPopup() {
      //<%VLSendClickFunc%>
    }
    //<%VLSendImpressionFunc%>
  }
}

export function FireBanner(inputData) {
  return new Promise((resolve, reject) => {
    const maxAttempts = 50; // 5 seconds total with 100ms intervals
    let attempts = 0;

    const tryAccessIframe = () => {
      const mainIframe = document.getElementById("piovare-frame");
      const previewIframe = document.getElementById("preview-frame");

      // First ensure we have both iframes
      if (!mainIframe || !previewIframe) {
        console.log("Waiting for iframes to be created...");
        if (attempts++ < maxAttempts) {
          setTimeout(tryAccessIframe, 100);
        } else {
          reject(new Error("Timeout waiting for iframes"));
        }
        return;
      }

      // Then ensure we can access their content
      if (!mainIframe.contentWindow || !mainIframe.contentDocument || !previewIframe.contentWindow || !previewIframe.contentDocument) {
        console.log("Waiting for iframe content to be accessible...");
        if (attempts++ < maxAttempts) {
          setTimeout(tryAccessIframe, 100);
        } else {
          reject(new Error("Timeout waiting for iframe content"));
        }
        return;
      }

      try {
        const config = {
          backgroundColor: inputData.targetRequirements.general.backgroundColor,
          appendPosition: inputData.selectedPosition.value,
          appendRelativePosition: inputData.selectedRelativePosition.value,
          url: inputData.targetRequirements.general.redirectUrl,
          text: inputData.targetRequirements.setText.textContent,
          fontWeight: inputData.targetRequirements.setText.fontWeight,
          fontSize: inputData.targetRequirements.setText.fontSize,
        };

        // Apply to both iframes
        [mainIframe, previewIframe].forEach((iframe) => {
          const targetFrame = iframe.contentDocument;

          // Remove existing banners if any
          const existingBanners = targetFrame.querySelectorAll(".hb-banner-container");
          existingBanners.forEach((banner) => banner.remove());
          targetFrame.querySelector("#hb-banner-style")?.remove();

          // Add styles
          const style = targetFrame.createElement("style");
          style.id = "hb-banner-style";
          style.innerHTML = `
            .hb-banner-container {
              height: auto;
              margin: auto;
              background-color: ${config.backgroundColor};
              border-radius: 4px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              margin-bottom: 15px;
              font-size: ${config.fontSize}px;
              text-align: center;
              padding: 10px;
            }
            .vl-banner-link {
              text-decoration: none;
              color: white;
            }
            @media only screen and (max-width: 768px) {
              .hb-banner-container {
                height: 50px;
                font-size: 13px;
                padding: 2px 15px;
                margin-top: 15px;
              }
            }
          `;

          targetFrame.head.appendChild(style);

          // Create banner
          const banner = targetFrame.createElement("div");
          banner.setAttribute("class", "hb-banner-container");
          banner.innerHTML = `
            <div class='vl-banner-elements'>
              <a class='vl-banner-link' href=${config.url}>${config.text}</a>
            </div>
          `;

          // Find target element and insert banner
          const targetElement = targetFrame.querySelector(config.appendPosition);
          if (!targetElement) {
            console.warn(`Target element ${config.appendPosition} not found in iframe`);
            return;
          }

          targetElement.insertAdjacentElement(config.appendRelativePosition, banner);

          // Add click event listener
          banner.querySelector(".vl-banner-link").addEventListener("click", (e) => {
            e.preventDefault();
            console.log("banner-click");
          });
        });

        resolve();
      } catch (error) {
        console.error("Error applying banner:", error);
        reject(error);
      }
    };

    // Start the process
    tryAccessIframe();
  });
}
