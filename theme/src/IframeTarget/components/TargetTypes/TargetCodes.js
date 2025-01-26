// import { iframeStore } from "../../iframeStore";

export function FirePopup(basicInputsData) {
  const config = {
    desktopWidth: "600px",
    mobileWidth: "320px",
    desktopHeight: "400px",
    mobileHeight: "500px",
    // General settings
    backgroundColor: basicInputsData.targetRequirements.general.backgroundColor || "#ffffff",
    redirectUrl: basicInputsData.targetRequirements.general.redirectUrl || "#",

    // Text settings
    titleText: basicInputsData.targetRequirements.setText.textContent || "",
    titleColor: basicInputsData.targetRequirements.setText.titleColor || "#000000",
    bodyText: basicInputsData.targetRequirements.setText.textBody || "",
    bodyColor: basicInputsData.targetRequirements.setText.bodyColor || "#000000",
    campaignText: basicInputsData.targetRequirements.setText.campaignText || "",
    campaignColor: basicInputsData.targetRequirements.setText.campaignColor || "#000000",

    // Campaign code settings
    campaignCode: basicInputsData.targetRequirements.setCampaignCode?.campaignCode || "",
    campaignCodeColor: basicInputsData.targetRequirements.setCampaignCode?.campaignCodeColor || "#000000",
    copyButtonText: basicInputsData.targetRequirements.setCampaignCode?.copyButtonText || "Copy",
    copyButtonColor: basicInputsData.targetRequirements.setCampaignCode?.copyButtonColor || "#000000",
    additionalCampaignTextSettings: basicInputsData.targetRequirements.setCampaignCode?.additionalCampaignTexSettings || "",
    additionalCopyButtonSettings: basicInputsData.targetRequirements.setCampaignCode?.additionalCopyButtonSettings || "",

    // Image settings
    desktopImage: basicInputsData.targetRequirements.setImage?.desktopImageUrl || "",
    mobileImage: basicInputsData.targetRequirements.setImage?.mobileImageUrl || "",

    // Video settings
    video: basicInputsData.targetRequirements.setVideo?.videoUrl || "",

    // Countdown settings
    finishDate: basicInputsData.targetRequirements.setCountdown?.finishDate || "",
  };
  // const iframeStore = useIframeStore();
  // let target = iframeStore.content.contentWindow.document;

  // Return the HTML content for preview
  return `
    <style>
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
        width: ${config.desktopWidth};
        height: ${config.desktopHeight};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        background-color: ${config.backgroundColor};
        overflow: hidden;
        position: relative;
      }

      #vl-popup-container .vl-popup-media {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
      }

      #vl-popup-container .vl-popup-content {
        position: relative;
        z-index: 1;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;
        background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
      }

      #vl-popup-container .vl-popup-title {
        color: ${config.titleColor};
        font-size: 24px;
        font-weight: bold;
        text-align: center;
      }

      #vl-popup-container .vl-popup-body {
        color: ${config.bodyColor};
        text-align: center;
      }

      #vl-popup-container .vl-popup-campaign-text {
        color: ${config.campaignColor};
        font-style: italic;
        text-align: center;
      }

      #vl-popup-container .vl-popup-campaign-code {
        color: ${config.campaignCodeColor};
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        padding: 10px;
        border: 2px dashed ${config.campaignCodeColor};
        ${config.additionalCampaignTextSettings}
      }

      #vl-popup-container .vl-popup-copy-button {
        background-color: ${config.copyButtonColor};
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        ${config.additionalCopyButtonSettings}
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
          width: ${config.mobileWidth};
          height: ${config.mobileHeight};
        }
      }
    </style>
    <div id="vl-popup-container">
      <div class="vl-popup-overlay"></div>
      <div class="vl-popup">
        <span class="vl-popup-close">✕</span>
        ${
          config.video
            ? `<video src="${config.video}" controls class="vl-popup-media"></video>`
            : config.desktopImage
            ? `<picture>
              ${config.mobileImage ? `<source media="(max-width: 768px)" srcset="${config.mobileImage}">` : ""}
              <img src="${config.desktopImage}" class="vl-popup-media" alt="popup image">
            </picture>`
            : ""
        }
        <div class="vl-popup-content">
          ${config.titleText ? `<div class="vl-popup-title">${config.titleText}</div>` : ""}
          ${config.bodyText ? `<div class="vl-popup-body">${config.bodyText}</div>` : ""}
          ${config.campaignText ? `<div class="vl-popup-campaign-text">${config.campaignText}</div>` : ""}
          ${
            config.campaignCode
              ? `
              <div class="vl-popup-campaign-code">${config.campaignCode}</div>
              <button class="vl-popup-copy-button">${config.copyButtonText}</button>
          `
              : ""
          }
          ${config.finishDate ? `<div class="vl-popup-countdown" data-finish="${config.finishDate}"></div>` : ""}
        </div>
      </div>
    </div>
  `;
}

export function FireBanner(inputData) {
  console.log("Banner Input Data:", inputData);

  const config = {
    // General Settings
    backgroundColor: inputData.targetRequirements?.general?.backgroundColor?.trim() || "#000000",
    appendPosition: inputData?.selectedPosition?.value,
    appendRelativePosition: inputData?.selectedRelativePosition?.value,
    url: inputData.targetRequirements?.general?.redirectUrl || "#",
    padding: inputData.targetRequirements?.general?.padding || "10px 15px",
    borderRadius: inputData.targetRequirements?.general?.borderRadius || "4px",
    desktopHeight: inputData.targetRequirements?.general?.desktopHeight || "60px",
    mobileHeight: inputData.targetRequirements?.general?.mobileHeight || "200px",
    position: inputData.targetRequirements?.general?.position || "relative",
    zIndex: inputData.targetRequirements?.general?.zIndex || "999999",

    // Text Settings
    text: inputData.targetRequirements?.setText?.textContent || "",
    fontFamily: inputData.targetRequirements?.setText?.fontFamily || "inherit",
    fontWeight: inputData.targetRequirements?.setText?.fontWeight || "normal",
    fontSize: inputData.targetRequirements?.setText?.fontSize || "16",
    textColor: inputData.targetRequirements?.setText?.textColor?.trim() || "#ffffff",
    textAlign: inputData.targetRequirements?.setText?.textAlign || "center",
    letterSpacing: inputData.targetRequirements?.setText?.letterSpacing || "normal",
    lineHeight: inputData.targetRequirements?.setText?.lineHeight || "1.5",

    // Border Settings
    borderWidth: inputData.targetRequirements?.border?.width || "0",
    borderStyle: inputData.targetRequirements?.border?.style || "solid",
    borderColor: inputData.targetRequirements?.border?.color?.trim() || "transparent",

    // Shadow Settings
    boxShadow: inputData.targetRequirements?.shadow?.enabled ? `${inputData.targetRequirements.shadow.x || "0"}px ${inputData.targetRequirements.shadow.y || "0"}px ${inputData.targetRequirements.shadow.blur || "0"}px ${inputData.targetRequirements.shadow.spread || "0"}px ${inputData.targetRequirements.shadow.color || "rgba(0,0,0,0.2)"}` : "none",
  };

  return `
    <div id="vl-banner-wrapper" style="
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      position: ${config.position};
      z-index: ${config.zIndex};
    ">
      <div class="hb-banner-container" style="
        width: 100%;
        height: ${config.desktopHeight};
        min-height: ${config.desktopHeight};
        margin: 0 auto;
        background-color: ${config.backgroundColor};
        border-radius: ${config.borderRadius};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${config.padding};
        box-sizing: border-box;
        border: ${config.borderWidth}px ${config.borderStyle} ${config.borderColor};
        box-shadow: ${config.boxShadow};
      ">
        <div class="vl-banner-elements" style="
          width: 100%;
          text-align: ${config.textAlign};
          margin: 0;
          padding: 0;
        ">
          <a class="vl-banner-link" href="${config.url}" style="
            text-decoration: none;
            color: ${config.textColor};
            font-size: ${config.fontSize}px;
            font-weight: ${config.fontWeight};
            font-family: ${config.fontFamily};
            display: block;
            width: 100%;
            line-height: ${config.lineHeight};
            letter-spacing: ${config.letterSpacing};
            margin: 0;
            padding: 0;
          ">${config.text}</a>
        </div>
      </div>
    </div>
    <style>
      @media only screen and (max-width: 768px) {
        #vl-banner-wrapper .hb-banner-container {
          height: ${config.mobileHeight} !important;
          min-height: ${config.mobileHeight} !important;
          padding: ${config.padding};
        }
        #vl-banner-wrapper .vl-banner-link {
          font-size: calc(${config.fontSize}px * 0.8);
        }
      }
    </style>
  `;
}
