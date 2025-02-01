const TargetConfig = {
  "Inline Target": {
    generalId: "a",
    Banner: {
      id: 1000,
      TargetRequire: {
        general: {
          description: "General Settings",
          backgroundColor: {
            type: "color",
            value: "",
            description: "Background color",
          },
          desktopHeight: {
            type: "string",
            value: "60px",
            description: "Height of banner on desktop",
          },
          mobileHeight: {
            type: "string",
            value: "200px",
            description: "Height of banner on mobile",
          },
          pageToApply: {
            type: "string",
            value: "",
            description: "Page to apply",
          },
          redirectUrl: {
            type: "url",
            value: "",
            description: "Redirect URL when the banner is clicked",
          },
          querySelector: {
            type: "string",
            value: "",
            description: "CSS selector for target element",
          },
          insertPosition: {
            type: "select",
            value: "",
            options: ["beforebegin", "afterbegin", "beforeend", "afterend"],
            description: "Position relative to the selected element",
          },
          additionalStyles: {
            type: "string",
            value: "",
            description: "Additional CSS styles for banner container (optional)",
          },
        },
        setText: {
          description: "Text Settings",
          textContent: {
            type: "string",
            value: "",
            description: "Content of the text",
          },
          textColor: {
            type: "color",
            value: "",
            description: "Text color",
          },
          position: {
            type: "select",
            value: "",
            options: ["left", "middle", "right"],
            description: "Position of the text",
          },
          fontSize: {
            type: "string",
            value: "16px",
            description: "Font size of the text",
          },
          fontWeight: {
            type: "select",
            value: "normal",
            options: ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
            description: "Font weight of the text",
          },
        },
        setCountdown: {
          description: "Countdown Settings",
          finishDate: {
            type: "date",
            value: "",
            description: "Finish date for the countdown",
          },
          position: {
            type: "select",
            value: "",
            options: ["left", "middle", "right"],
            description: "Position of the countdown",
          },
          layout: {
            type: "select",
            value: "stacked",
            options: ["inline", "stacked"],
            description: "Layout relative to banner text (stacked = countdown below text)",
          },
          format: {
            type: "select",
            value: "",
            options: ["day-hour-minute", "hour-minute-second"],
            description: "Format of the countdown display",
          },
          showText: {
            type: "select",
            value: "",
            options: ["show", "hide"],
            description: "Show or hide 'Days', 'Hours', etc.",
          },
          additionalStyles: {
            type: "string",
            value: "",
            description: "Additional CSS styles for countdown (optional)",
          },
        },
        setImage: {
          description: "Image Settings",
          desktopImageUrl: {
            type: "url",
            value: "",
            description: "Desktop image URL",
          },
          mobileImageUrl: {
            type: "url",
            value: "",
            description: "Mobile image URL",
          },
        },
      },
    },
  },
  "External Target": {
    generalId: "b",
    "Pop-up": {
      id: 2000,
      TargetRequire: {
        general: {
          description: "General Settings",
          backgroundColor: {
            type: "color",
            value: "#555555",
            description: "Background color of the banner",
          },
          pageToApply: {
            type: "string",
            value: "",
            description: "Page where the banner will be applied",
          },
          redirectUrl: {
            type: "url",
            value: "",
            description: "Redirect URL when the banner is clicked",
          },
          querySelector: {
            type: "string",
            value: "",
            description: "CSS selector for target element",
          },
          insertPosition: {
            type: "select",
            value: "",
            options: ["beforebegin", "afterbegin", "beforeend", "afterend"],
            description: "Position relative to the selected element",
          },
        },
        setText: {
          description: "Text Settings",
          textContent: {
            type: "string",
            value: "",
            description: "Title text",
          },
          titleColor: {
            type: "color",
            value: "",
            description: "Title text color",
          },

          textBody: {
            type: "string",
            value: "",
            description: "Body text",
          },
          bodyColor: {
            type: "color",
            value: "",
            description: "Body text color",
          },

          campaignText: {
            type: "string",
            value: "",
            description: "Campaign rules text",
          },
          campaignColor: {
            type: "color",
            value: "",
            description: "Campaign rules color",
          },
        },
        setCountdown: {
          description: "Countdown Settings",
          finishDate: {
            type: "date",
            value: "",
            description: "Finish date for the countdown",
          },
          position: {
            type: "select",
            value: "",
            options: ["left", "middle", "right"],
            description: "Position of the countdown",
          },
        },
        setCampaignCode: {
          description: "Campaign Code Settings",
          campaignCode: {
            type: "string",
            value: "",
            description: "Campaign code",
          },
          campaignCodeColor: {
            type: "color",
            value: "",
            description: "Campaign code color",
          },
          copyButtonText: {
            type: "string",
            value: "",
            description: "Copy button text",
          },
          copyButtonColor: {
            type: "color",
            value: "",
            description: "Copy button color",
          },
          additionalCampaignTexSettings: {
            type: "string",
            value: "",
            description: "Additional campaign textsettings (css code)",
          },
          additionalCopyButtonSettings: {
            type: "string",
            value: "",
            description: "Additional copy button settings (css code)",
          },
        },
        setImage: {
          description: "Image Settings",
          desktopImageUrl: {
            type: "url",
            value: "",
            description: "Desktop image URL",
          },
          mobileImageUrl: {
            type: "url",
            value: "",
            description: "Mobile image URL",
          },
        },
        setVideo: {
          description: "Video Settings",
          videoUrl: {
            type: "url",
            value: "",
            description: "Video URL",
          },
        },
      },
    },
  },
  Gamification: {
    generalId: "c",
    FindToWin: {
      id: 3000,
      TargetRequire: {
        general: {
          description: "General Settings",
          backgroundColor: {
            type: "color",
            value: "#000000a3",
            description: "Background color of the game container",
          },
          zIndex: {
            type: "string",
            value: "999999",
            description: "Z-index of the game container",
          },
          gameDuration: {
            type: "number",
            value: 60,
            description: "Game duration in seconds",
          },
        },
        gameConfig: {
          description: "Game Configuration",
          gridRows: {
            type: "number",
            value: 3,
            description: "Number of rows in the game grid",
          },
          gridCols: {
            type: "number",
            value: 3,
            description: "Number of columns in the game grid",
          },
          cardImages: {
            type: "string",
            value: "https://picsum.photos/100/100?random=1, https://picsum.photos/100/100?random=2, https://picsum.photos/100/100?random=3, https://picsum.photos/100/100?random=4",
            description: "Comma-separated URLs for card faces (using Lorem Picsum 100x100 random images)",
          },
          backCardImage: {
            type: "url",
            value: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/418_1455_20241209195350115.jpg",
            description: "Image URL for card back",
          },
          emptyCardImage: {
            type: "url",
            value: "https://static.thenounproject.com/png/4653780-200.png",
            description: "Image URL for empty card",
          },
          backgroundImage: {
            type: "url",
            value: "https://voyagemaison.com/cdn/shop/files/BOWMONT_WPO_PHE_2.jpg?format=pjpg&v=1710155491&width=720",
            description: "Background image URL for game area",
          },
        },
        startScreen: {
          description: "Start Screen Settings",
          backgroundColor: {
            type: "color",
            value: "#000000",
            description: "Background color for start screen",
          },
          backgroundImage: {
            type: "url",
            value: "",
            description: "Background image URL for start screen",
          },
          title: {
            type: "string",
            value: "Memory Match Challenge",
            description: "Title text for start screen",
          },
          titleColor: {
            type: "color",
            value: "#ffffff",
            description: "Title text color",
          },
          titleFontSize: {
            type: "string",
            value: "48px",
            description: "Title font size",
          },
          description: {
            type: "string",
            value: "Match all pairs as quickly as possible to win bigger discounts!",
            description: "Description text for start screen",
          },
          descriptionColor: {
            type: "color",
            value: "#ffffff",
            description: "Description text color",
          },
          descriptionFontSize: {
            type: "string",
            value: "36px",
            description: "Description font size",
          },
          buttonText: {
            type: "string",
            value: "START GAME",
            description: "Start button text",
          },
          buttonColor: {
            type: "color",
            value: "#1ec4d2",
            description: "Start button color",
          },
          buttonFontSize: {
            type: "string",
            value: "40px",
            description: "Button font size",
          },
        },
        promoCodes: {
          description: "Promo Code Settings",
          timeRanges: {
            type: "string",
            value: `[
              {"minTime":0, "maxTime":5, "staticcode":"WIN100", "campaignText":"Congratulations! You've won a 100% discount!"},
              {"minTime":6, "maxTime":15, "staticcode":"SAVE75", "campaignText":"Amazing! Enjoy 75% off!"},
              {"minTime":16, "maxTime":25, "staticcode":"HALF50", "campaignText":"Great job! Get 50% off!"},
              {"minTime":26, "maxTime":999, "staticcode":"QUICK25", "campaignText":"Nice work! Take 25% off!"}
            ]`,
            description: "JSON string of time-based promo codes and messages",
          },
        },
        visual: {
          description: "Visual Settings",
          cardBorderRadius: {
            type: "string",
            value: "10px",
            description: "Border radius for cards",
          },
          scoreBoardRadius: {
            type: "string",
            value: "5px",
            description: "Border radius for scoreboard",
          },
          closeButtonColor: {
            type: "color",
            value: "black",
            description: "Close button color",
          },
          fontFamily: {
            type: "string",
            value: "'Arial', sans-serif",
            description: "Custom font family",
          },
          mobileFontSizes: {
            type: "string",
            value: `{
              "timer": "32px",
              "closeButton": "32px",
              "title": "48px",
              "description": "36px",
              "button": "40px"
            }`,
            description: "JSON string of mobile font sizes",
          },
        },
        sound: {
          description: "Sound Settings",
          enabled: {
            type: "select",
            value: "true",
            options: ["true", "false"],
            description: "Enable game sounds",
          },
          soundUrl: {
            type: "url",
            value: "https://bariisarslans.github.io/giftcatchgame/sound.mp3",
            description: "URL for game sound effect",
          },
        },
      },
    },
  },
  Customize: {
    generalId: "d",
    CustomizeExperience: {
      id: 4000,
      TargetRequire: {
        general: {
          description: "General Settings",
          code: {
            type: "string",
            value: "",
            description: "Code to be executed",
          },
        },
      },
    },
  },
};

export default TargetConfig;
