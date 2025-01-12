import { iframeStore } from "../../iframeStore";

export function FirePopup(basicInputsData) {
  console.log(basicInputsData.targetRequirements["setImage.desktop-image-url"]);
  const config = {
    desktopWidth: "600px",
    mobileWidth: "320px",
    img: window.innerWidth > 768 ? basicInputsData.targetRequirements["setImage.desktop-image-url"] : basicInputsData.targetRequirements["setImage.mobile-image-url"],
    url: "#",
  };
  const iframeStore = useIframeStore();
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
  console.log("Data passed to the TargetCodes: ", inputData);
  const config = {
    backgroundColor: inputData.targetRequirements.general.backgroundColor,
    appendPosition: inputData.selectedPosition.value,
    appendRelativePosition: inputData.selectedRelativePosition.value,
    url: inputData.targetRequirements.general.redirectUrl,
    text: inputData.targetRequirements.setText.textContent,
    fontWeight: inputData.targetRequirements.setText.fontWeight,
    fontSize: inputData.targetRequirements.setText.fontSize,
  };
  const iframeStore = useIframeStore();
  let targetFrame = iframeStore.content.contentWindow.document;

  if (targetFrame.querySelector(".hb-banner-container")) {
    targetFrame.querySelectorAll(".hb-banner-container").forEach((b) => {
      b.remove();
    });
    targetFrame.querySelector("#hb-banner-style").remove();
  }

  if (!targetFrame.querySelector(".hb-banner-container")) {
    const url = "#";
    const style = document.createElement(`style`);
    style.id = "hb-banner-style";

    style.innerHTML = `
.hb-banner-container{
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
}
.vl-banner-link{
  text-decoration: none;
    color: white;
}

@media only screen and (max-width: 768px) {
  .hb-banner-container{
    height: 50px;
    font-size: 13px;
    padding: 2px 15px;
    margin-top: 15px;
  }
}

`;
    targetFrame.head.append(style);

    const banner = document.createElement("div");
    banner.setAttribute("class", "hb-banner-container");
    banner.innerHTML = `
<div class='vl-banner-elements'>
<a class='vl-banner-link' href=${url}> ${config.text}</a>
</div>

`;

    targetFrame.querySelector(config.appendPosition).insertAdjacentElement(config.appendRelativePosition, banner);

    banner.querySelector(".vl-banner-link").addEventListener("click", function () {
      console.log("banner-click");
    });
    // <%VLSendImpressionFunc%>
  }
}
