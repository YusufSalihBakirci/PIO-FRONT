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
            description: "Background color of the banner",
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
            value: "",
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
