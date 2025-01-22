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
        },
        setCountdown: {
          description: "Countdown Settings",
          finishDate: {
            type: "date",
            value: "",
            description: "Finish date for the countdown",
          },
        },
        setImage: {
          description: "Image Settings",
          imageUrl: {
            type: "url",
            value: "",
            description: "Image URL",
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
