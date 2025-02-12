// import { iframeStore } from "../../iframeStore";

export function FireBanner(basicInputsData) {
  const config = {
    desktopHeight: basicInputsData.targetRequirements?.general?.desktopHeight || "60px",
    mobileHeight: basicInputsData.targetRequirements?.general?.mobileHeight || "120px",
    backgroundColor: basicInputsData.targetRequirements?.general?.backgroundColor || "#ffffff",
    redirectUrl: basicInputsData.targetRequirements?.general?.redirectUrl || "#",

    titleText: basicInputsData.targetRequirements?.setText?.textContent || "",
    titleColor: basicInputsData.targetRequirements?.setText?.titleColor || "#000000",
    bodyText: basicInputsData.targetRequirements?.setText?.textBody || "",
    bodyColor: basicInputsData.targetRequirements?.setText?.bodyColor || "#000000",

    campaignText: basicInputsData.targetRequirements?.setText?.campaignText || "",
    campaignColor: basicInputsData.targetRequirements?.setText?.campaignColor || "#000000",
    campaignCode: basicInputsData.targetRequirements?.setCampaignCode?.campaignCode || "",
    campaignCodeColor: basicInputsData.targetRequirements?.setCampaignCode?.campaignCodeColor || "#000000",

    finishDate: basicInputsData.targetRequirements?.setCountdown?.finishDate || "",
  };

  const jsCode = `
    const bannerWrapper = document.createElement('div');
    bannerWrapper.id = 'exp-banner-wrapper';

    const bannerContainer = document.createElement('div');
    bannerContainer.className = 'exp-banner-container';

    const link = document.createElement('a');
    link.href = '${config.redirectUrl}';
    link.className = 'exp-banner-link';
    link.style.color = '${config.titleColor}';

    if ('${config.titleText}') {
      const title = document.createElement('span');
      title.className = 'exp-banner-title';
      title.textContent = '${config.titleText}';
      link.appendChild(title);
    }

    if ('${config.bodyText}') {
      const body = document.createElement('span');
      body.className = 'exp-banner-body';
      body.textContent = '${config.bodyText}';
      body.style.color = '${config.bodyColor}';
      link.appendChild(body);
    }

    if ('${config.campaignText}') {
      const campaign = document.createElement('span');
      campaign.className = 'exp-banner-campaign';
      campaign.textContent = '${config.campaignText}';
      campaign.style.color = '${config.campaignColor}';
      link.appendChild(campaign);
    }

    if ('${config.campaignCode}') {
      const code = document.createElement('span');
      code.className = 'exp-banner-code';
      code.textContent = '${config.campaignCode}';
      code.style.color = '${config.campaignCodeColor}';
      link.appendChild(code);
    }

    if ('${config.finishDate}') {
      const countdownContainer = document.createElement('div');
      countdownContainer.className = 'exp-banner-countdown';
      
      const updateCountdown = () => {
        const now = new Date().getTime();
        const finishTime = new Date('${config.finishDate}').getTime();
        const distance = finishTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownContainer.textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
          clearInterval(countdownInterval);
          countdownContainer.textContent = "EXPIRED";
        }
      };

      updateCountdown();
      const countdownInterval = setInterval(updateCountdown, 1000);
      link.appendChild(countdownContainer);
    }

    bannerContainer.appendChild(link);
    bannerWrapper.appendChild(bannerContainer);

    const targetContainer = document.querySelector('#experia-inline');
    if (targetContainer) {
      targetContainer.appendChild(bannerWrapper);
    }
  `;

  const styles = `
    #exp-banner-wrapper {
      width: 100%;
      background-color: ${config.backgroundColor};
    }

    #exp-banner-wrapper .exp-banner-container {
      height: ${config.desktopHeight};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
    }

    #exp-banner-wrapper .exp-banner-link {
      display: flex;
      align-items: center;
      gap: 15px;
      text-decoration: none;
      width: 100%;
      justify-content: center;
    }

    #exp-banner-wrapper .exp-banner-countdown {
      font-weight: bold;
      color: ${config.campaignCodeColor};
    }

    @media only screen and (max-width: 768px) {
      #exp-banner-wrapper .exp-banner-container {
        height: ${config.mobileHeight};
        flex-direction: column;
        padding: 15px;
      }

      #exp-banner-wrapper .exp-banner-link {
        flex-direction: column;
        gap: 8px;
        text-align: center;
      }
    }
  `;

  return JSON.stringify({
    js: jsCode,
    css: styles,
    html: "",
  });
}

export function SlidingBanner(inputData) {
  // Add default values and validation
  console.log(`🔍 Input Data:`, inputData);
  const config = {
    general: {
      backgroundColor: inputData?.targetRequirements?.general?.backgroundColor || "#ffffff",
      desktopHeight: inputData?.targetRequirements?.general?.desktopHeight || "60px",
      mobileHeight: inputData?.targetRequirements?.general?.mobileHeight || "120px",
      pageToApply: inputData?.targetRequirements?.general?.pageToApply || "",
      querySelector: inputData?.targetRequirements?.general?.querySelector || "",
      insertPosition: inputData?.targetRequirements?.general?.insertPosition || "beforeend",
      additionalStyles: inputData?.targetRequirements?.general?.additionalStyles || "",
      zIndex: inputData?.targetRequirements?.general?.zIndex || "999999",
    },
    carousel: {
      loop: inputData?.targetRequirements?.carousel?.loop || "true",
      autoplay: inputData?.targetRequirements?.carousel?.autoplay || "true",
      autoplaySpeed: inputData?.targetRequirements?.carousel?.autoplaySpeed || "3",
      slideSpeed: inputData?.targetRequirements?.carousel?.slideSpeed || "0.5",
      swiperCustomCSS: inputData?.targetRequirements?.carousel?.swiperCustomCSS || "",
    },
    slides: inputData?.targetRequirements?.setSlides.items,
    visual: {
      fontFamily: inputData?.targetRequirements?.visual?.fontFamily || "'Arial', sans-serif",
      borderRadius: inputData?.targetRequirements?.visual?.borderRadius || "0px",
      boxShadow: inputData?.targetRequirements?.visual?.boxShadow || "none",
      transition: inputData?.targetRequirements?.visual?.transition || "all 0.3s ease",
    },
  };

  const carousel = config.carousel;
  const slides = config.slides;
  console.log(slides);

  const styles = `
    .experia-sliding-banner {
      background-color: ${config.general.backgroundColor || "#FF6B6B"};
      height: ${config.general.desktopHeight || "60px"};
      width: 100%;
      position: relative;
      overflow: hidden;
      ${config.general.additionalStyles || ""}
    }

    .swiper {
      width: 100%;
      height: 100%;
      ${config.carousel.swiperCustomCSS || ""}
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .experia-slide-content {
      color: var(--slide-text-color, #FFFFFF);
      font-size: var(--slide-font-size, 22px);
      width: 100%;
      padding: 0 20px;
    }

    @media (max-width: 768px) {
      .experia-sliding-banner {
        height: ${config.general.mobileHeight || "120px"};
      }
    }
  `;

  const jsCode = `
    // Load Swiper from CDN
    function loadSwiper() {
      return new Promise((resolve, reject) => {
        // Load CSS
        const swiperCSS = document.createElement('link');
        swiperCSS.rel = 'stylesheet';
        swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css';
        document.head.appendChild(swiperCSS);

        // Load JS
        const swiperScript = document.createElement('script');
        swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js';
        swiperScript.onload = resolve;
        swiperScript.onerror = reject;
        document.head.appendChild(swiperScript);
      });
    }

    // Initialize banner after Swiper is loaded
    async function initBanner() {
      try {
        await loadSwiper();
        
        // Create banner container
        const bannerWrapper = document.createElement('div');
        bannerWrapper.className = 'experia-sliding-banner';
        
        // Create Swiper container
        const swiperContainer = document.createElement('div');
        swiperContainer.className = 'swiper';
        
        const swiperWrapper = document.createElement('div');
        swiperWrapper.className = 'swiper-wrapper';
        
        // Create slides
        ${slides
          .map(
            (slide, index) => `
          const slide${index} = document.createElement('div');
          slide${index}.className = 'swiper-slide';
          slide${index}.style.backgroundColor = '${slide.backgroundColor}';
          
          const content${index} = document.createElement('div');
          content${index}.className = 'experia-slide-content';
          content${index}.style.setProperty('--slide-text-color', '${slide.textColor}');
          content${index}.style.setProperty('--slide-font-size', '${slide.fontSize}');
          content${index}.textContent = '${slide.content}';
          
          slide${index}.appendChild(content${index});
          swiperWrapper.appendChild(slide${index});`
          )
          .join("\n")}
        
        swiperContainer.appendChild(swiperWrapper);
        bannerWrapper.appendChild(swiperContainer);
        
        // Find and inject into experia-inline container
        const targetContainer = document.querySelector('#experia-inline');
        if (targetContainer) {
          targetContainer.appendChild(bannerWrapper);
          
          // Initialize Swiper with modified options based on slide count
          new Swiper('.swiper', {
            loop: ${slides.length > 1 ? carousel.loop : false},
            autoplay: ${
              carousel.autoplay && slides.length > 1
                ? `{
              delay: ${carousel.autoplaySpeed * 1000},
              disableOnInteraction: false,
            }`
                : false
            },
            speed: ${carousel.slideSpeed * 1000},
            // Disable interactions if only one slide
            allowTouchMove: ${slides.length > 1},
            simulateTouch: ${slides.length > 1}
          });
        }
      } catch (error) {
        console.error('Error initializing sliding banner:', error);
      }
    }

    // Start initialization
    initBanner();
  `;

  return JSON.stringify({
    js: jsCode,
    css: styles,
    html: "",
  });
}

export function FirePopup(basicInputsData) {
  const config = {
    desktopWidth: basicInputsData.targetRequirements?.general?.desktopWidth || "600px",
    mobileWidth: basicInputsData.targetRequirements?.general?.mobileWidth || "320px",
    desktopHeight: basicInputsData.targetRequirements?.general?.desktopHeight || "400px",
    mobileHeight: basicInputsData.targetRequirements?.general?.mobileHeight || "500px",
    backgroundColor: basicInputsData.targetRequirements?.general?.backgroundColor || "#ffffff",
    redirectUrl: basicInputsData.targetRequirements?.general?.redirectUrl || "#",

    // Text settings
    titleText: basicInputsData.targetRequirements?.setText?.textContent || "",
    titleColor: basicInputsData.targetRequirements?.setText?.titleColor || "#000000",
    bodyText: basicInputsData.targetRequirements?.setText?.textBody || "",
    bodyColor: basicInputsData.targetRequirements?.setText?.bodyColor || "#000000",

    // Campaign settings
    campaignText: basicInputsData.targetRequirements?.setText?.campaignText || "",
    campaignColor: basicInputsData.targetRequirements?.setText?.campaignColor || "#000000",
    campaignCode: basicInputsData.targetRequirements?.setCampaignCode?.campaignCode || "",
    campaignCodeColor: basicInputsData.targetRequirements?.setCampaignCode?.campaignCodeColor || "#000000",
    copyButtonText: basicInputsData.targetRequirements?.setCampaignCode?.copyButtonText || "Copy",
    copyButtonColor: basicInputsData.targetRequirements?.setCampaignCode?.copyButtonColor || "#000000",

    // Media settings
    desktopImage: basicInputsData.targetRequirements?.setImage?.desktopImageUrl || "",
    mobileImage: basicInputsData.targetRequirements?.setImage?.mobileImageUrl || "",
    video: basicInputsData.targetRequirements?.setVideo?.videoUrl || "",

    // Countdown settings
    finishDate: basicInputsData.targetRequirements?.setCountdown?.finishDate || "",
  };
  // const iframeStore = useIframeStore();
  // let target = iframeStore.content.contentWindow.document;

  const styles = `
    #exp-popup-container {
      z-index: 10000;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
    }

    #exp-popup-container .exp-popup-overlay {
      z-index: 10000;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.6;
      position: fixed;
      top: 0;
      left: 0;
    }

    #exp-popup-container .exp-popup {
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

    #exp-popup-container .exp-popup-media {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }

    #exp-popup-container .exp-popup-content {
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

    #exp-popup-container .exp-popup-title {
      color: ${config.titleColor};
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }

    #exp-popup-container .exp-popup-body {
      color: ${config.bodyColor};
      text-align: center;
    }

    #exp-popup-container .exp-popup-campaign-text {
      color: ${config.campaignColor};
      font-style: italic;
      text-align: center;
    }

    #exp-popup-container .exp-popup-campaign-code {
      color: ${config.campaignCodeColor};
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding: 10px;
      border: 2px dashed ${config.campaignCodeColor};
    }

    #exp-popup-container .exp-popup-copy-button {
      background-color: ${config.copyButtonColor};
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    #exp-popup-container .exp-popup-close {
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
      #exp-popup-container .exp-popup {
        width: ${config.mobileWidth};
        height: ${config.mobileHeight};
      }
    }

    /* Add countdown styles */
    .countdown-wrapper {
      display: flex;
      gap: 15px;
      justify-content: center;
      color: ${config.titleColor};
    }

    .countdown-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
    }

    .countdown-item span {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    /* Add hover effect for copy button */
    .exp-popup-copy-button:hover {
      opacity: 0.9;
    }
  `;

  // Create the JavaScript code that will create and manipulate the DOM
  const jsCode = `
    const popupContainer = document.createElement('div');
    popupContainer.id = 'exp-popup-container';

    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'exp-popup-overlay';

    const popup = document.createElement('div');
    popup.className = 'exp-popup';

    const content = document.createElement('div');
    content.className = 'exp-popup-content';

    const closeButton = document.createElement('div');
    closeButton.className = 'exp-popup-close';
    closeButton.innerHTML = '×';
    closeButton.onclick = () => popupContainer.remove();

    if ('${config.titleText}') {
      const title = document.createElement('h2');
      title.className = 'exp-popup-title';
      title.textContent = '${config.titleText}';
      content.appendChild(title);
    }

    if ('${config.bodyText}') {
      const body = document.createElement('p');
      body.className = 'exp-popup-body';
      body.textContent = '${config.bodyText}';
      content.appendChild(body);
    }

    if ('${config.campaignText}') {
      const campaignText = document.createElement('p');
      campaignText.className = 'exp-popup-campaign-text';
      campaignText.textContent = '${config.campaignText}';
      content.appendChild(campaignText);
    }

    if ('${config.campaignCode}') {
      const codeContainer = document.createElement('div');
      codeContainer.className = 'exp-popup-campaign-code';
      codeContainer.textContent = '${config.campaignCode}';
      
      const copyButton = document.createElement('button');
      copyButton.className = 'exp-popup-copy-button';
      copyButton.textContent = '${config.copyButtonText}';
      copyButton.onclick = () => {
        navigator.clipboard.writeText('${config.campaignCode}');
        copyButton.textContent = 'Copied!';
        setTimeout(() => copyButton.textContent = '${config.copyButtonText}', 2000);
      };
      
      content.appendChild(codeContainer);
      content.appendChild(copyButton);
    }

    if ('${config.finishDate}') {
      const countdownContainer = document.createElement('div');
      countdownContainer.className = 'countdown-wrapper';
      
      const createCountdownItem = (value, label) => {
        const item = document.createElement('div');
        item.className = 'countdown-item';
        const span = document.createElement('span');
        span.textContent = value;
        const labelDiv = document.createElement('div');
        labelDiv.textContent = label;
        item.appendChild(span);
        item.appendChild(labelDiv);
        return item;
      };

      const updateCountdown = () => {
        const now = new Date().getTime();
        const finishTime = new Date('${config.finishDate}').getTime();
        const distance = finishTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownContainer.innerHTML = '';
        countdownContainer.appendChild(createCountdownItem(days, 'Days'));
        countdownContainer.appendChild(createCountdownItem(hours, 'Hours'));
        countdownContainer.appendChild(createCountdownItem(minutes, 'Minutes'));
        countdownContainer.appendChild(createCountdownItem(seconds, 'Seconds'));

        if (distance < 0) {
          clearInterval(countdownInterval);
          countdownContainer.textContent = "EXPIRED";
        }
      };

      updateCountdown();
      const countdownInterval = setInterval(updateCountdown, 1000);
      content.appendChild(countdownContainer);
    }

    if ('${config.desktopImage}' || '${config.mobileImage}') {
      const img = document.createElement('img');
      img.className = 'exp-popup-media';
      img.src = window.innerWidth > 768 ? '${config.desktopImage}' : '${config.mobileImage}';
      popup.insertBefore(img, content);
    }

    if ('${config.video}') {
      const video = document.createElement('video');
      video.className = 'exp-popup-media';
      video.src = '${config.video}';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      popup.insertBefore(video, content);
    }

    popup.appendChild(closeButton);
    popup.appendChild(content);
    popupContainer.appendChild(popupOverlay);
    popupContainer.appendChild(popup);

    const targetContainer = document.querySelector('#experia-external');
    if (targetContainer) {
      targetContainer.appendChild(popupContainer);
    }
  `;

  return JSON.stringify({
    js: jsCode,
    css: styles,
    html: "",
  });
}

export function FireExpandModal(input) {
  const jsCode = `
    // Utility functions
    const utils = {
      copyCoupon(coupon) {
        if (!navigator.clipboard) {
          const elem = document.createElement("textarea");
          document.body.appendChild(elem);
          elem.value = coupon;
          elem.select();
          document.execCommand("copy");
          document.body.removeChild(elem);
        } else {
          navigator.clipboard.writeText(coupon);
        }
      },

      loadExternalResource(type, url) {
        const element = document.createElement(type === "script" ? "script" : "link");
        if (type === "script") {
          element.src = url;
        } else {
          element.rel = "stylesheet";
          element.href = url;
        }
        return new Promise((resolve) => {
          element.onload = resolve;
          document.head.appendChild(element);
        });
      },
    };

    // Get config settings directly from input
    const config = {
      general: {
        desktopBreakpoint: 768,
        sessionStorageKey: "exp-expanding-banner",
        maxDisplayCount: 2,
        reappearDelay: 15000,
        logoUrl: "${input.targetRequirements.general.logoUrl}"
      },
      minBanner: {
        swiperSettings: {
          delay: ${parseInt(input.targetRequirements.setCarousel.delay)},
          speed: ${parseInt(input.targetRequirements.setCarousel.speed)}
        },
        slides: ${JSON.stringify(
          input.targetRequirements.setMinBanner.slides.map((slide) => ({
            text: slide.content,
            href: slide.redirectUrl || null,
          }))
        )}
      },
      maxBanner: {
        banners: ${JSON.stringify(
          input.targetRequirements.setMaxBanner.maxSlides.map((slide) => ({
            type: "banner",
            coupon: slide.couponCode,
            desktopImg: slide.desktopImg,
            mobileImg: slide.mobileImg,
            href: slide.redirectUrl,
          }))
        )}
      }
    };

    // Get config settings
    const isDesktop = window.innerWidth > config.general.desktopBreakpoint;
    let callCount = parseInt(sessionStorage.getItem(config.general.sessionStorageKey) || 0, 10);
    let isOpened = false;

    async function init() {
      // Don't initialize if banner was previously clicked
      if (sessionStorage.getItem("exp-banner-clicked") === "true") return;

      await utils.loadExternalResource("css", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
      await initSwiper();
      if (callCount < config.general.maxDisplayCount) {
        setTimeout(() => initMinBar(), 500);
      }
    }

    async function initSwiper() {
      await Promise.all([
        utils.loadExternalResource("script", "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"),
        utils.loadExternalResource("css", "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css")
      ]);
    }

    function initMinBar() {
      addActionStyles();
      const minConfig = config.minBanner;

      const minBarContainer = document.createElement("section");
      minBarContainer.id = "min-bar-container";
      minBarContainer.className = "exp-minbar-bg-animation";

      const minBar = document.createElement("div");
      minBar.id = "exp-min-bar";

      let swiperHTML = "";
      minConfig.slides.forEach((item) => {
        swiperHTML += \`<div class="swiper-slide">\${item.href ? \`<a href="\${item.href}" target="_blank">\${item.text}</a>\` : item.text}
        </div>\`;
      });

      minBar.innerHTML = \`
        <span class="exp-min-bar_close">&#10005;</span>
        <div class="exp-min-bar-swiper-container">
          <div class="swiper-wrapper">\${swiperHTML}</div>
        </div>
      \`;

      document.body.append(minBarContainer);
      minBarContainer.append(minBar);

      if (callCount > config.general.maxDisplayCount) {
        minBarContainer.style.display = "none";
      }

      const swiper = new Swiper(".exp-min-bar-swiper-container", {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: minConfig.swiperSettings.delay,
          disableOnInteraction: false,
        },
        speed: minConfig.swiperSettings.speed,
      });

      minBar.addEventListener("click", handleMinBarClick);
      minBar.querySelector(".exp-min-bar_close").addEventListener("click", handleMinBarClose);
    }

    function handleMinBarClick(e) {
      if (!e.target.classList.contains("exp-min-bar_close")) {
        if (e.target.href) {
          window.location.href = e.target.href;
        } else {
          if (!isOpened) {
            initMaxBar();
          } else {
            document.querySelector("#max-bar-container").style.display = "block";
            isOpened = !isOpened;
          }
        }
      }
    }

    function handleMinBarClose(e) {
      e.stopPropagation();
      const minBar = document.querySelector("#min-bar-container");

      minBar.classList.add("animate__animated", "animate__fadeOut");

      minBar.addEventListener("animationend", () => {
        minBar.style.display = "none";
        callCount++;
        sessionStorage.setItem(config.general.sessionStorageKey, callCount);

        setTimeout(() => {
          if (callCount < config.general.maxDisplayCount) {
            minBar.classList.remove("animate__fadeOut");
            minBar.classList.add("animate__fadeIn");
            minBar.style.display = "unset";
          }
        }, config.general.reappearDelay);
      });
    }

    function initMaxBar() {
      document.body.style.overflowX = "hidden";
      const maxBarContainer = document.createElement("section");
      maxBarContainer.id = "max-bar-container";
      maxBarContainer.innerHTML = \`<div class="exp-top-bar_up">
        <img class="exp-max-bar_logo" src="\${config.general.logoUrl}" />
        <span class="exp-max-bar_close exp-close-btn">&#10005;</span>
      </div>\`;

      const downPart = document.createElement("div");
      downPart.className = "exp-max-bar_down";
      downPart.innerHTML = generateMaxBannerHTML(config.maxBanner.banners);

      maxBarContainer.append(downPart);
      document.body.append(maxBarContainer);

      downPart.addEventListener("click", handleMaxBarClick);
      maxBarContainer.querySelector(".exp-max-bar_close").addEventListener("click", handleMaxBarClose);
    }

    function generateMaxBannerHTML(banners) {
      return banners
        .map((banner) => {
          if (banner.type !== "banner") return "";

          const imgTemplate = \`
          <picture>
            <source media="(max-width:\${config.general.desktopBreakpoint}px)" srcset="\${banner.mobileImg}">
            <img class="exp-campaign-banner" src="\${banner.desktopImg}" alt="exp-campaign">
          </picture>
        \`;

          if (banner.coupon && banner.href) {
            return \`
            <div class="exp-campaign-wrapper" data-coupon-code="\${banner.coupon}">
              <a href="\${banner.href}">\${imgTemplate}</a>
              <div class='exp-max-copy-btn'>Kopyala</div>
            </div>
          \`;
          }

          if (banner.coupon && !banner.href) {
            return \`
            <div class="exp-campaign-wrapper" data-coupon-code="\${banner.coupon}">
              \${imgTemplate}
              <div class='exp-max-copy-btn'>Kopyala</div>
            </div>
          \`;
          }

          if (!banner.coupon && banner.href) {
            return \`
            <div class="exp-campaign-wrapper">
              <a href="\${banner.href}">\${imgTemplate}</a>
            </div>
          \`;
          }

          return \`
          <div class="exp-campaign-wrapper">
            \${imgTemplate}
          </div>
        \`;
        })
        .join("");
    }

    function handleMaxBarClick(e) {
      const wrapper = e.target.closest(".exp-campaign-wrapper");
      if (!wrapper) return;

      if (e.target.classList.contains("exp-max-copy-btn")) {
        const coupon = wrapper.dataset.couponCode;
        utils.copyCoupon(coupon);
        e.target.innerText = "Kopyalandı";
      }

      sessionStorage.setItem("exp-banner-clicked", "true");
      handleMaxBarClose();
    }

    function handleMaxBarClose() {
      const maxBar = document.querySelector("#max-bar-container");
      const minBar = document.querySelector("#min-bar-container");

      minBar.remove();
      maxBar.classList.add("exp-slide-down-exit");

      setTimeout(() => {
        maxBar.remove();
        document.body.style.overflowX = "hidden";
      }, 2000);
    }

    function addActionStyles() {
      const actionStyle = document.createElement("style");
      actionStyle.innerHTML = \`
        :root {
          --main-color: ${input.targetRequirements.general.backgroundColor};
          --theme-color: ${input.targetRequirements.general.backgroundColor};
          --color: ${input.targetRequirements.general.backgroundColor2};
        }

        .scroll-to-top {
          display: none !important;
        }

        #min-bar-container {
          position: fixed !important;
          bottom: -100px;
          left: 50%;
          cursor: pointer;
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          transform: translateX(-50%);
          z-index: 90;

          -webkit-animation: relatedModalBanner 2s ease infinite, slideUpBanner 1s forwards;
          -moz-animation: relatedModalBanner 2s ease infinite, slideUpBanner 1s forwards;
          animation: relatedModalBanner 2s ease infinite, slideUpBanner 1s forwards;
        }

        @keyframes slideUpBanner {
          from {
            bottom: -100px;
          }
          to {
            bottom: \${isDesktop ? "30px" : "60px"};
          }
        }

        #exp-min-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          font-size: 14px;
          overflow: hidden;
          transition: all 0.3s linear;
        }

        .exp-min-bar_close {
          cursor: pointer;
          font-size: 15px;
          left: 15px;
          position: absolute;
          z-index: 999999999;
          padding: 15px;
          color: var(--color);
        }

        .exp-min-bar-swiper-container {
          height: 60px;
        }

        #sliding-text-content {
          display: inline-block;
          opacity: 0;
        }

        .slide-in {
          animation: slideIn 300ms forwards;
        }

        .slide-out {
          animation: slideOut 300ms forwards;
        }

        @keyframes slideIn {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        #exp-min-bar {
          display: -webkit-box !important;
          display: -ms-flexbox !important;
          display: flex !important;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          height: 60px;
          width: 471px;
          font-size: 20px;
          color: white;
          border-radius: 35px;
          user-select: none;

          -webkit-animation: slideInUp;
          -moz-animation: slideInUp;
          -o-animation: slideInUp;
          animation: slideInUp;
          animation-duration: 300ms;
        }

        #max-bar-container {
          padding: 20px 0px;
          width: 100%;
          height: 100%;
          position: fixed;
          z-index: 1000000;
          background-color: white;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          align-items: center;
          top: 0;
          left: 0;

          -webkit-animation: slideInUp;
          -moz-animation: slideInUp;
          -o-animation: slideInUp;
          animation: slideInUp;
          animation-duration: 1000ms;
        }

        #max-bar-container .exp-top-bar_up {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          height: 120px;
          width: 100%;
        }

        #max-bar-container .exp-top-bar_up .exp-max-bar_close {
          right: 1rem;
          top: 2rem;
          position: absolute;
          font-size: 30px;
          user-select: none;
        }

        #max-bar-container .exp-top-bar_up .exp-max-bar_logo {
          width: 300px;
          top: 40px;
        }

        #max-bar-container .exp-max-bar_down {
          padding: 25px 15%;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          max-width: calc(1220px + 30%);
          position: relative;
          column-gap: 1.5rem;
          row-gap: 1.5rem;
          overflow-y: scroll;
          overflow-x: hidden;
        }

        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        .exp-max-copy-btn {
          position: absolute;
          background: #000000;
          color: #ebeaef;
          bottom: 5px;
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
          left: 50%;
          transform: translateX(-50%);
        }

        #max-bar-container .exp-max-bar_down .exp-campaign-wrapper {
          width: 600px;
          position: relative;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          height: 270px;
        }

        .exp-campaign-banner {
          width: 100%;
        }

        .exp-min-bar-swiper-container {
          position: relative;
          width: 100%;
          height: 60px;
          overflow: hidden;
        }

        .exp-min-bar-swiper-container .swiper-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .exp-min-bar-swiper-container .swiper-wrapper .swiper-slide {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          flex-direction: column;
          color:var(--color);
        }

        .exp-min-bar-swiper-container .swiper-wrapper .swiper-slide a {
          text-decoration: none;
          color: white;
        }

        .exp-minbar-bg-animation {
          background: linear-gradient(270deg, var(--main-color), var(--theme-color));
          background-size: 400% 400%;
          border-radius: 35px;
        }

        @-webkit-keyframes relatedModalBanner {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @-moz-keyframes relatedModalBanner {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes relatedModalBanner {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (min-width: 769px) and (max-width: 1102px) {
          #min-bar-container {
            bottom: 60px;
          }

          #exp-min-bar {
            border-radius: 15px 15px 0 0;
          }
        }

        @media (max-width: 1228px) {
          #max-bar-container .exp-max-bar_down {
            max-width: calc(1025px + 30%);
          }

          #max-bar-container .exp-max-bar_down .exp-campaign-wrapper {
            width: 500px;
            height: 225px;
          }

          .exp-max-copy-btn {
            bottom: 3px;
          }
        }

        @media (max-width: 1024px) {
          #max-bar-container .exp-max-bar_down {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          #min-bar-container {
            bottom: 60px;
          }

          #exp-min-bar {
            width: 320px;
            font-size: 18px;
            border-radius: 15px 15px 0 0;
          }

          #exp-min-bar .exp-min-bar_close {
            left: 20px;
          }

          #max-bar-container .exp-max-bar_down .exp-campaign-wrapper {
            height: auto;
          }

          .sliding-text {
            width: 66%;
            text-align: center;
            font-size: 80%;
          }

          #max-bar-container .exp-top-bar_up .exp-max-bar_logo {
            width: 150px;
          }

          #max-bar-container .exp-top-bar_up .exp-max-bar_close {
            font-size: 25px;
            top: 3rem;
          }

          #max-bar-container .exp-top-bar_up {
            height: 100px;
          }

          .exp-minbar-bg-animation {
            border-radius: 15px 15px 0 0;
          }
        }

        .exp-slide-down-exit {
          transform: translateY(100%);
          transition: all 1000ms ease-in;
        }
      \`;

      document.head.append(actionStyle);
    }

    // Main execution
    if (!document.querySelector("#min-bar-container")) {
      init();
    }
  `;

  return JSON.stringify({
    js: jsCode,
    css: "", // CSS is now handled within the JS through addActionStyles
    html: "",
  });
}
export function fireFTW(basicInputsData) {
  // Parse promo codes directly from timeRanges
  let promoCodes = [];
  try {
    const timeRanges = basicInputsData.targetRequirements?.promoCodes?.timeRanges;
    if (timeRanges) {
      promoCodes = JSON.parse(timeRanges);
      console.log("🎟 Parsed promo codes array:", promoCodes);
    }
  } catch (error) {
    console.error("❌ Error parsing promo codes:", error);
  }

  // Get card images from config
  const defaultCardImages = "https://picsum.photos/100/100?random=1, https://picsum.photos/100/100?random=2, https://picsum.photos/100/100?random=3, https://picsum.photos/100/100?random=4";
  const cardImagesStr = basicInputsData.targetRequirements?.gameConfig?.cardImages?.value || defaultCardImages;
  console.log("🃏 Card Images Input:", cardImagesStr);

  const cardImages = cardImagesStr
    .split(",")
    .map((url) => url.trim())
    .filter((url) => url.length > 0);
  console.log("🃏 Processed Card Images:", cardImages);

  const gameConfig = {
    dimensions: {
      height: window.innerHeight,
      width: window.innerWidth,
      gameAreaWidth: window.innerWidth <= 768 ? 350 : 600,
      gameAreaHeight: window.innerWidth <= 768 ? 450 : 500,
    },
    timing: {
      clickableDuration: 1000,
      gameDuration: parseInt(basicInputsData.targetRequirements?.general?.gameDuration?.value) || 60,
      cardFlipDuration: 300,
    },
    grid: {
      rows: parseInt(basicInputsData.targetRequirements?.gameConfig?.gridRows?.value) || 3,
      cols: parseInt(basicInputsData.targetRequirements?.gameConfig?.gridCols?.value) || 3,
      cardMargin: 10,
    },
    cards: {
      images: cardImages,
      backImage: basicInputsData.targetRequirements?.gameConfig?.backCardImage?.value || "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/418_1455_20241209195350115.jpg",
      emptyImage: basicInputsData.targetRequirements?.gameConfig?.emptyCardImage?.value || "https://static.thenounproject.com/png/4653780-200.png",
      idPrefix: "card-",
      defaultBackfaceColor: "#383838",
      emptyBackfaceColor: "transparent",
      emptyFrontColor: "transparent",
    },
    visual: {
      bgImage: basicInputsData.targetRequirements?.gameConfig?.backgroundImage?.value,
      bgColor: basicInputsData.targetRequirements?.general?.backgroundColor?.value || "#000000",
      fontColor: "white",
      fontName: basicInputsData.targetRequirements?.visual?.fontFamily?.value || "'Arial', sans-serif",
      borderRadius: basicInputsData.targetRequirements?.visual?.cardBorderRadius?.value || "10px",
      scoreBoardRadius: basicInputsData.targetRequirements?.visual?.scoreBoardRadius?.value || "5px",
      closeButtonColor: basicInputsData.targetRequirements?.visual?.closeButtonColor?.value || "black",
    },
    screens: {
      start: {
        title: {
          text: basicInputsData.targetRequirements?.startScreen?.title?.value || "Memory Match Challenge",
          fontSize: basicInputsData.targetRequirements?.startScreen?.titleFontSize?.value || "32px",
          color: basicInputsData.targetRequirements?.startScreen?.titleColor?.value || "#ffffff",
          fontSize: basicInputsData.targetRequirements?.startScreen?.titleFontSize?.value || "48px",
        },
        description: {
          text: basicInputsData.targetRequirements?.startScreen?.description?.value || "Match all pairs as quickly as possible to win bigger discounts!",
          fontSize: basicInputsData.targetRequirements?.startScreen?.descriptionFontSize?.value || "18px",
          color: basicInputsData.targetRequirements?.startScreen?.descriptionColor?.value || "#ffffff",
          fontSize: basicInputsData.targetRequirements?.startScreen?.descriptionFontSize?.value || "24px",
        },
        button: {
          text: basicInputsData.targetRequirements?.startScreen?.buttonText?.value || "START GAME",
          fontSize: basicInputsData.targetRequirements?.startScreen?.buttonFontSize?.value || "24px",
          color: "#ffffff",
          backgroundColor: basicInputsData.targetRequirements?.startScreen?.buttonColor?.value || "#1ec4d2",
          fontSize: basicInputsData.targetRequirements?.startScreen?.buttonFontSize?.value || "24px",
        },
      },
      game: {
        scoreboard: {
          fontColor: "#ffffff",
          fontSize: "24px",
        },
      },
    },
    styles: {
      backgroundColor: basicInputsData.targetRequirements?.general?.backgroundColor?.value,
      backgroundImage: basicInputsData.targetRequirements?.gameConfig?.backgroundImage?.value,
      zIndex: basicInputsData.targetRequirements?.general?.zIndex?.value || "999999",
      fontFamily: basicInputsData.targetRequirements?.visual?.fontFamily?.value || "'Arial', sans-serif",
    },
    promoCodes: promoCodes,
  };

  console.log("⚙️ Final Game Config:", gameConfig);
  console.log("🎟 Final Promo Codes in config:", gameConfig.promoCodes);

  const styles = `
    /* Common styles for header elements */
    .exp-header-element {
      font-family: monospace;
      font-weight: bold;
      text-align: center;
      background: rgba(128, 128, 128, 0.5);
      border-radius: 5px;
      color: white;
      user-select: none;
    }

    #exp-header-container {
      position: fixed;
      top: 20px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      z-index: 1000;
    }

    #exp-memory-game {
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: ${basicInputsData.targetRequirements?.general?.backgroundColor?.value || "#000000a3"};
      z-index: ${gameConfig.styles.zIndex};
      font-family: ${gameConfig.styles.fontFamily};
    }

    /* Base styles */
    #exp-count-down,
    #exp-close-button {
      font-family: monospace;
      font-weight: bold;
      text-align: center;
      min-width: 90px;
      background-color: ${basicInputsData.targetRequirements?.startScreen?.backgroundColor?.value || "#000000"};
      padding: 15px;
      border-radius: 5px;
      color: white;
      font-size: 16px;
    }

    /* Mobile styles with !important to ensure they're applied */
    @media screen and (max-width: 768px) {
      #exp-count-down,
      #exp-close-button {
        font-size: 8vw !important;  /* Direct viewport-based sizing */
        min-width: 30vw !important; /* Width based on viewport */
        padding: 3vw !important;
      }

      #exp-start-title {
        font-size: 10vw !important;
      }

      #exp-start-description {
        font-size: 6vw !important;
      }

      #exp-start-button {
        font-size: 8vw !important;
        padding: 3vw 6vw !important;
      }
    }

    /* Extra small devices */
    @media (max-width: 375px) {
      :root {
        --base-font: calc(16px + 3vw);
        --large-font: calc(24px + 4vw);
        --xl-font: calc(32px + 5vw);
      }
    }

    /* Small devices */
    @media (min-width: 376px) and (max-width: 576px) {
      :root {
        --base-font: calc(16px + 2.5vw);
        --large-font: calc(24px + 3.5vw);
        --xl-font: calc(32px + 4.5vw);
      }
    }

    /* Medium devices */
    @media (min-width: 577px) and (max-width: 768px) {
      :root {
        --base-font: calc(16px + 2vw);
        --large-font: calc(24px + 3vw);
        --xl-font: calc(32px + 4vw);
      }
    }

    /* Desktop - keep original sizes */
    @media (min-width: 769px) {
      :root {
        --base-font: 16px;
        --large-font: 24px;
        --xl-font: 32px;
      }
    }

    #exp-start-screen {
      width: ${gameConfig.dimensions.gameAreaWidth}px;
      height: ${gameConfig.dimensions.gameAreaHeight}px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${basicInputsData.targetRequirements?.startScreen?.backgroundColor?.value || "#000000"};
      background-image: url('${basicInputsData.targetRequirements?.startScreen?.backgroundImage?.value || ""}');
      background-size: cover;
      background-position: center;
      border-radius: 15px;
      overflow: hidden;
    }

    #exp-start-container {
      text-align: center;
      padding: 40px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #exp-start-title {
      color: ${gameConfig.screens.start.title.color};
      font-size: ${gameConfig.screens.start.title.fontSize};
      margin-bottom: 20px;
      font-weight: bold;
    }

    #exp-start-description {
      color: ${gameConfig.screens.start.description.color};
      font-size: ${gameConfig.screens.start.description.fontSize};
      margin-bottom: 30px;
      line-height: 1.5;
      padding: 0 20px;
    }

    #exp-start-button {
      padding: 15px 40px;
      font-size: ${gameConfig.screens.start.button.fontSize};
      color: ${gameConfig.screens.start.button.color};
      background-color: ${gameConfig.screens.start.button.backgroundColor};
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.3s ease;
    }

    #exp-start-button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(30, 196, 210, 0.5);
    }

    #exp-scoreboard {
      padding: 25px 0;
      position: fixed;
      color: ${gameConfig.screens.game.scoreboard.fontColor};
      text-align: center;
      width: 200px;
      max-width: 200px;
      margin: 5px;
      top: 25px;
      font-size: ${gameConfig.screens.game.scoreboard.fontSize};
      transition: 1s all;
    }

    .exp-card {
      position: relative;
      transform-style: preserve-3d;
      transition: transform ${gameConfig.timing.cardFlipDuration}ms;
      cursor: pointer;
      border-radius: 10px;
      background: #383838;
      width: 100%;
      height: 100%;
    }

    .exp-card-front, .exp-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #383838;
    }

    .exp-card-front {
      transform: rotateY(180deg);
    }

    .exp-card.matched {
      pointer-events: none;
    }

    .exp-card.matched .exp-card-front {
      opacity: 0.8;
    }
  `;

  // Let's also add a console log to verify the styles are being injected
  console.log("Styles being injected:", styles);

  const jsCode = `
    console.log("🎮 Game Initialization Starting");
    const gameConfig = ${JSON.stringify(gameConfig)};
    console.log("⚙️ Game Config in Runtime:", gameConfig);
    const gameState = {
      score: 100,
      timeInterval: null,
      audio: null,
      mainComponent: document.createElement("DIV"),
      pairCounter: 0,
      lastClickedCardId: null,
      pairCount: 0,
      maxPairCount: 0,
      pairs: [],
      currentPair: [],
      isFinishing: false,
      waitingForReset: false,
      remainingTime: gameConfig.timing.gameDuration,
      clickable: true,
      clickableDuration: 1000
    };

    const utils = {
      startCountDown: (element, duration) => {
        if (!element || typeof duration !== 'number') {
          console.error('Invalid timer parameters:', { element, duration });
          return;
        }

        const startTime = Date.now();
        const timer = setInterval(() => {
          const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
          const remainingTime = duration - elapsedTime;
          gameState.remainingTime = remainingTime;

          if (remainingTime <= 0) {
            clearInterval(timer);
            element.innerHTML = "00:00";
            if (typeof checkLose === 'function') checkLose();
          } else {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            element.innerHTML = \`\${minutes.toString().padStart(2, "0")}:\${seconds.toString().padStart(2, "0")}\`;
          }
        }, 1000);

        return timer;
      }
    };

    function createDiv({ id, styles = {}, className = "" }) {
      const div = document.createElement("DIV");
      div.id = id;
      div.className = className;
      Object.entries(styles).forEach(([property, value]) => {
        div.style[property] = value;
      });
      return div;
    }

    function createScoreBoard() {
      const timer = document.createElement("DIV");
      timer.id = "exp-count-down";
      timer.className = "exp-header-element";
      timer.style.minWidth = window.innerWidth <= 768 ? "150px" : "90px";
      timer.style.padding = window.innerWidth <= 768 ? "25px" : "15px";
      timer.style.fontSize = calculateFontSize(16);

      const duration = parseInt(gameConfig.timing.gameDuration);
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      timer.innerHTML = \`\${minutes.toString().padStart(2, "0")}:\${seconds.toString().padStart(2, "0")}\`;

      gameState.mainComponent.appendChild(timer);
    }

    function initGame() {
      console.log("🎮 Initializing Memory Game");
      gameState.mainComponent.id = "exp-memory-game";
      const targetContainer = document.querySelector('#experia-external');
      if (targetContainer) {
        targetContainer.appendChild(gameState.mainComponent);
      }

      const calculateFontSize = (baseSize) => {
        const width = window.innerWidth;
        if (width <= 768) {
          return \`\${baseSize * 2}px\`;
        }
        return \`\${baseSize}px\`;
      };

      const headerContainer = createDiv({
        id: "exp-header-container"
      });

      // Create timer with only dynamic styles
      const timer = document.createElement("DIV");
      timer.id = "exp-count-down";
      timer.className = "exp-header-element";
      timer.style.minWidth = window.innerWidth <= 768 ? "150px" : "90px";
      timer.style.padding = window.innerWidth <= 768 ? "25px" : "15px";
      timer.style.fontSize = calculateFontSize(16);

      const duration = parseInt(gameConfig.timing.gameDuration);
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      timer.innerHTML = \`\${minutes.toString().padStart(2, "0")}:\${seconds.toString().padStart(2, "0")}\`;

      // Create close button with only dynamic styles
      const closeButton = createDiv({
        id: "exp-close-button",
        className: "exp-header-element",
        styles: {
          minWidth: window.innerWidth <= 768 ? "150px" : "90px",
          padding: window.innerWidth <= 768 ? "25px" : "15px",
          fontSize: calculateFontSize(16),
          cursor: "pointer"
        }
      });
      
      closeButton.innerHTML = "✕ CLOSE";
      
      closeButton.addEventListener("click", () => {
        if (gameState.timeInterval) {
          clearInterval(gameState.timeInterval);
        }
        gameState.mainComponent.remove();
      });

      window.addEventListener('resize', () => {
        const isMobile = window.innerWidth <= 768;
        const newWidth = isMobile ? "150px" : "90px";
        const newPadding = isMobile ? "25px" : "15px";
        const newFontSize = calculateFontSize(16);

        timer.style.minWidth = newWidth;
        timer.style.padding = newPadding;
        timer.style.fontSize = newFontSize;
        
        closeButton.style.minWidth = newWidth;
        closeButton.style.padding = newPadding;
        closeButton.style.fontSize = newFontSize;
      });

      headerContainer.appendChild(timer);
      headerContainer.appendChild(closeButton);
      gameState.mainComponent.appendChild(headerContainer);
      
      maxPairCalculator();
      createStartScreen();
    }

    function maxPairCalculator() {
      gameState.maxPairCount = Math.floor((gameConfig.grid.rows * gameConfig.grid.cols) / 2);
    }

    function createStartScreen() {
      const startScreen = createDiv({
        id: "exp-start-screen",
        styles: {
          width: gameConfig.dimensions.gameAreaWidth + "px",
          height: gameConfig.dimensions.gameAreaHeight + "px",
        },
      });

      const container = createDiv({
        id: "exp-start-container",
        styles: {
          padding: "20px",
          textAlign: "center",
        },
      });

      // Create title
      const title = document.createElement("h1");
      title.id = "exp-start-title";
      title.innerText = gameConfig.screens.start.title.text;
      title.style.color = gameConfig.screens.start.title.color;
      title.style.fontSize = gameConfig.screens.start.title.fontSize;
      container.appendChild(title);

      // Create description
      const description = document.createElement("p");
      description.id = "exp-start-description";
      description.innerText = gameConfig.screens.start.description.text;
      description.style.color = gameConfig.screens.start.description.color;
      description.style.fontSize = gameConfig.screens.start.description.fontSize;
      container.appendChild(description);

      // Update start button click handler
      const startButton = document.createElement("button");
      startButton.id = "exp-start-button";
      startButton.innerText = gameConfig.screens.start.button.text;
      startButton.style.fontSize = gameConfig.screens.start.button.fontSize;
      startButton.style.color = gameConfig.screens.start.button.color;
      startButton.style.backgroundColor = gameConfig.screens.start.button.backgroundColor;
      startButton.addEventListener("click", () => {
        startScreen.remove();
        createGameScreen();
        // Start the timer only after clicking start
        startTimer();
      });
      container.appendChild(startButton);

      startScreen.appendChild(container);
      gameState.mainComponent.appendChild(startScreen);
    }

    function createGameScreen() {
      const gameScreen = createDiv({
        id: "exp-game-screen",
        styles: {
          width: gameConfig.dimensions.gameAreaWidth + "px",
          height: gameConfig.dimensions.gameAreaHeight + "px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 0, 0, 0.9)",
          borderRadius: "15px",
          overflow: "hidden"
        }
      });

      const gameArea = createDiv({
        id: "exp-game-screen-game-area",
        styles: {
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: "15px",
          padding: "40px",
          boxSizing: "border-box"
        }
      });

      gameScreen.appendChild(gameArea);
      gameState.mainComponent.appendChild(gameScreen);

      createCards();
      showAllCards();
    }

    function createCards() {
      const gameArea = document.getElementById("exp-game-screen-game-area");
      const cards = generateCardGrid();
      
      cards.forEach((cardData, index) => {
        const card = cardCreator(cardData, index);
        gameArea.appendChild(card);
      });
    }

    function generateCardGrid() {
      let cards = gameConfig.cards.images.flatMap(imgUrl => [
        { name: imgUrl, imgUrl },
        { name: imgUrl, imgUrl }
      ]);

      if ((gameConfig.grid.rows * gameConfig.grid.cols) % 2 !== 0) {
        cards.push({
          name: "empty",
          imgUrl: gameConfig.cards.emptyImage
        });
      }

      return cards.sort(() => Math.random() - 0.5);
    }

    function cardCreator(cardData, cardId) {
      const card = document.createElement("DIV");
      card.id = gameConfig.cards.idPrefix + cardId;
      card.className = "exp-card";

      const front = document.createElement("DIV");
      front.className = "exp-card-front";
      front.style.backgroundImage = cardData?.imgUrl ? 
        \`url('\${cardData.imgUrl}')\` : 
        \`url('\${gameConfig.cards.backImage}')\`;

      const back = document.createElement("DIV");
      back.className = "exp-card-back";
      back.style.backgroundImage = \`url('\${gameConfig.cards.backImage}')\`;

      card.appendChild(front);
      card.appendChild(back);

      card.addEventListener("click", () => handleCardClick(card.id, cardData));

      return card;
    }

    function handleCardClick(cardId, cardData) {
      if (!gameState.clickable || gameState.lastClickedCardId === cardId) {
        return;
      }

      showCard(cardId);
      checkPair(cardId, cardData);
    }

    function showCard(cardId) {
      const card = document.getElementById(cardId);
      if (card) {
        card.style.transform = "rotateY(180deg)";
      }
    }

    function hideCard(cardId) {
      const card = document.getElementById(cardId);
      if (card) {
        card.style.transform = "rotateY(0deg)";
      }
    }

    function showAllCards() {
      const cards = document.querySelectorAll('.exp-card');
      cards.forEach(card => {
        card.style.transform = "rotateY(180deg)";
      });

      setTimeout(() => {
        cards.forEach(card => {
          card.style.transform = "rotateY(0deg)";
        });
        gameState.clickable = true;
      }, 2000);
    }

    function checkPair(cardId, cardData) {
      if (gameState.currentPair.length === 0) {
        gameState.currentPair = [{ id: cardId, data: cardData }];
        gameState.lastClickedCardId = cardId;
      } else {
        gameState.clickable = false;
        gameState.currentPair.push({ id: cardId, data: cardData });

        if (gameState.currentPair[0].data.name === gameState.currentPair[1].data.name) {
          handleMatch();
        } else {
          handleMismatch();
        }
      }
    }

    function handleMatch() {
      console.log("✅ Match found!");
      gameState.pairs.push(gameState.currentPair);
      gameState.pairCount++;
      
      // Add matched class to both cards
      gameState.currentPair.forEach(card => {
        const cardElement = document.getElementById(card.id);
        if (cardElement) {
          cardElement.classList.add('matched');
        }
      });

      setTimeout(() => {
        gameState.currentPair = [];
        gameState.lastClickedCardId = null;
        gameState.clickable = true;

        console.log(\`Pairs matched: \${gameState.pairCount} / \${gameState.maxPairCount}\`);
        if (gameState.pairCount === gameState.maxPairCount) {
          console.log("🎉 Game Won! Creating finish screen...");
          handleWin();
        }
      }, 500);
    }

    function handleMismatch() {
      setTimeout(() => {
        gameState.currentPair.forEach(card => hideCard(card.id));
        gameState.currentPair = [];
        gameState.lastClickedCardId = null;
        gameState.clickable = true;
      }, 1000);
    }

    function handleWin() {
      console.log("🏆 Handling win condition");
      if (gameState.timeInterval) {
        clearInterval(gameState.timeInterval);
      }
      createFinishScreen(true);
    }

    function checkLose() {
      if (gameState.remainingTime <= 0) {
        createFinishScreen(false);
      }
    }

    function createFinishScreen(isWin) {
      if (gameState.isFinishing) return;
      gameState.isFinishing = true;

      const timeElapsed = gameConfig.timing.gameDuration - gameState.remainingTime;
      
      // Find the appropriate promo code based on completion time
      const promoCodeData = gameConfig.promoCodes.find(range => 
        timeElapsed >= range.minTime && timeElapsed <= range.maxTime
      );

      const finishScreen = createDiv({
        id: "exp-finish-screen",
        styles: {
          width: gameConfig.dimensions.gameAreaWidth + "px",
          height: gameConfig.dimensions.gameAreaHeight + "px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 0, 0, 0.95)",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "100002"
        }
      });

      const container = createDiv({
        id: "exp-finish-container",
        styles: {
          textAlign: "center",
          padding: "40px",
          color: "#ffffff",
          width: "100%"
        }
      });

      // Add result message
      const resultMessage = document.createElement("h2");
      resultMessage.style.fontSize = "36px";
      resultMessage.style.marginBottom = "20px";
      resultMessage.style.color = "#1ec4d2";
      resultMessage.textContent = isWin ? "Congratulations!" : "Time's Up!";
      container.appendChild(resultMessage);

      if (promoCodeData) {
        // Add campaign message
        const campaignMessage = document.createElement("p");
        campaignMessage.style.fontSize = "24px";
        campaignMessage.style.marginBottom = "30px";
        campaignMessage.textContent = promoCodeData.campaignText;
        container.appendChild(campaignMessage);

        // Create promo code container with flex column layout
        const promoCodeContainer = document.createElement("div");
        promoCodeContainer.style.marginBottom = "20px";
        promoCodeContainer.style.display = "flex";
        promoCodeContainer.style.flexDirection = "column";
        promoCodeContainer.style.alignItems = "center";
        promoCodeContainer.style.gap = "15px";

        // Display promo code
        const promoCode = document.createElement("div");
        promoCode.style.fontSize = "48px";
        promoCode.style.fontWeight = "bold";
        promoCode.style.color = "#1ec4d2";
        promoCode.style.padding = "10px 30px";
        promoCode.style.border = "2px dashed #1ec4d2";
        promoCode.style.display = "inline-block";
        promoCode.textContent = promoCodeData.staticcode;
        promoCodeContainer.appendChild(promoCode);

        // Add copy button
        const copyButton = document.createElement("button");
        copyButton.style.backgroundColor = "#1ec4d2";
        copyButton.style.color = "white";
        copyButton.style.border = "none";
        copyButton.style.padding = "10px 20px";
        copyButton.style.borderRadius = "5px";
        copyButton.style.cursor = "pointer";
        copyButton.style.fontSize = "16px";
        copyButton.style.minWidth = "120px";
        copyButton.textContent = "Copy Code";
        
        copyButton.onclick = () => {
          navigator.clipboard.writeText(promoCodeData.staticcode)
            .then(() => {
              copyButton.textContent = "Copied!";
              setTimeout(() => {
                copyButton.textContent = "Copy Code";
              }, 2000);
            })
            .catch(err => console.error('Failed to copy:', err));
        };
        
        promoCodeContainer.appendChild(copyButton);
        container.appendChild(promoCodeContainer);
      }

      finishScreen.appendChild(container);
      gameState.mainComponent.appendChild(finishScreen);
    }

    function startTimer() {
      const timerElement = document.getElementById("exp-count-down");
      if (timerElement) {
        const duration = parseInt(gameConfig.timing.gameDuration);
        if (!isNaN(duration)) {
          gameState.timeInterval = utils.startCountDown(timerElement, duration);
        } else {
          console.error('Invalid game duration:', gameConfig.timing.gameDuration);
        }
      }
    }

    // Initialize the game
    initGame();
  `;

  return JSON.stringify({
    js: jsCode,
    css: styles,
    html: "",
    // config: gameConfig,
  });
}
