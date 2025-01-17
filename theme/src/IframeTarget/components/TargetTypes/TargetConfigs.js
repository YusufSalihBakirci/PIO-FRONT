const TargetConfig = {
  'Inline Target': {
    generalId: 'a',
    Banner: {
      id: 1000,
      TargetRequire: {
        general: {
          description: "General Settings",
          backgroundColor: {
            type: "color",
            value: "",
            description: "Background color of the banner"
          },
          pageToApply: {
            type: "string",
            value: "",
            description: "Page where the banner will be applied"
          },
          redirectUrl: {
            type: "url",
            value: "",
            description: "Redirect URL when the banner is clicked"
          }
        },
        setText: {
          description: "Text Settings",
          textContent: {
            type: "string",
            value: "",
            description: "Content of the text"
          },
          textColor: {
            type: "color",
            value: "",
            description: "Text color"
          }
        },
        setCountdown: {
          description: "Countdown Settings",
          finishDate: {
            type: "date",
            value: "",
            description: "Finish date for the countdown"
          }
        },
        setImage: {
          description: "Image Settings",
          imageUrl: {
            type: "url",
            value: "",
            description: "Image URL"
          }
        },
        setVideo: {
          description: "Video Settings",
          videoUrl: {
            type: "url",
            value: "",
            description: "Video URL"
          }
        }
      }
    }
  },
  'External Target': {
    generalId: 'b',
    'Pop-up': {
      id: 2000,
      TargetRequire: {
        general: {
          description: "General Settings",
          backgroundColor: {
            type: "color",
            value: "",
            description: "Background color of the banner"
          },
          pageToApply: {
            type: "string",
            value: "",
            description: "Page where the banner will be applied"
          },
          redirectUrl: {
            type: "url",
            value: "",
            description: "Redirect URL when the banner is clicked"
          }
        },
        setText: {
          description: "Text Settings",
          textContent: {
            type: "string",
            value: "",
            description: "Content of the text"
          },
          textColor: {
            type: "color",
            value: "",
            description: "Text color"
          }
        },
        setCountdown: {
          description: "Countdown Settings",
          finishDate: {
            type: "date",
            value: "",
            description: "Finish date for the countdown"
          }
        },
        setImage: {
          description: "Image Settings",
          imageUrl: {
            type: "url",
            value: "",
            description: "Image URL"
          }
        },
        setVideo: {
          description: "Video Settings",
          videoUrl: {
            type: "url",
            value: "",
            description: "Video URL"
          }
        }
      }
    }
  },
  'Gamification': {
    generalId: 'c',
    'FindToWin': {
      id: 3000,
      TargetRequire: {
        general: {
          description: "General Settings",
          backgroundColor: {
            type: "color",
            value: "",
            description: "Background color of the banner"
          },
          pageToApply: {
            type: "string",
            value: "",
            description: "Page where the banner will be applied"
          },
          redirectUrl: {
            type: "url",
            value: "",
            description: "Redirect URL when the banner is clicked"
          }
        }
      }
    }
  },
  'Customize': {
    generalId: 'd',
    'CustomizeExperience': {
      id: 4000,
      TargetRequire: {
        general: {
          description: "General Settings",
          code: {
            type: "string",
            value: "",
            description: "Code to be executed"
          }
        }
      }
    }
  }
};

export default TargetConfig;
