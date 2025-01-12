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
          },
          fontSize: {
            type: "number",
            value: "",
            description: "Font size of the text in pixels"
          },
          fontWeight: {
            type: "string",
            value: "",
            description: "Font weight (e.g., bold, normal)"
          },
          fontFamily: {
            type: "string",
            value: "",
            description: "Font family of the text"
          },
          textAlign: {
            type: "string",
            value: "",
            description: "Text alignment (e.g., left, center)"
          },
          lineHeight: {
            type: "number",
            value: "",
            description: "Line height of the text"
          }
        },
        setTime: {
          description: "Time Settings",
          startDate: {
            type: "date",
            value: "",
            description: "Start date for the banner"
          },
          endDate: {
            type: "date",
            value: "",
            description: "End date for the banner"
          }
        },
        setImage: {
          description: "Image Settings",
          desktopWidth: {
            type: "number",
            value: "",
            description: "Desktop image width in pixels"
          },
          desktopHeight: {
            type: "number",
            value: "",
            description: "Desktop image height in pixels"
          },
          mobileWidth: {
            type: "number",
            value: "",
            description: "Mobile image width in pixels"
          },
          mobileHeight: {
            type: "number",
            value: "",
            description: "Mobile image height in pixels"
          },
          desktopImageUrl: {
            type: "url",
            value: "",
            description: "URL of the desktop image"
          },
          mobileImageUrl: {
            type: "url",
            value: "",
            description: "URL of the mobile image"
          }
        },
        setCountdown: {
          description: "Countdown Settings",
          finishDate: {
            type: "date",
            value: "",
            description: "Finish date for the countdown"
          }
        }
      }
    },
    
  },

  //neden block yazdim: Inline elements are the opposite of block elements because they do not start on a new line and only take up as much width as their content.
  'Block Target': {
    generalId: 'b',
    'Pop-up': {
  id: 2000,
  TargetRequire: {
    general: {
      description: "General Settings",
      backgroundColor: {
        type: "color",
        value: "",
        description: "Background color of the pop-up"
      },
      pageToApply: {
        type: "string",
        value: "",
        description: "Page where the pop-up will be applied"
      },
      redirectUrl: {
        type: "url",
        value: "",
        description: "Redirect URL when the pop-up is clicked"
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
      },
      fontSize: {
        type: "number",
        value: "",
        description: "Font size of the text in pixels"
      },
      fontWeight: {
        type: "string",
        value: "",
        description: "Font weight (e.g., bold, normal)"
      },
      fontFamily: {
        type: "string",
        value: "",
        description: "Font family of the text"
      },
      textAlign: {
        type: "string",
        value: "",
        description: "Text alignment (e.g., left, center)"
      },
      lineHeight: {
        type: "number",
        value: "",
        description: "Line height of the text"
      }
    },
    setTime: {
      description: "Time Settings",
      startDate: {
        type: "date",
        value: "",
        description: "Start date for the pop-up"
      },
      endDate: {
        type: "date",
        value: "",
        description: "End date for the pop-up"
      }
    },
    setImage: {
      description: "Image Settings",
      desktopWidth: {
        type: "number",
        value: "",
        description: "Desktop image width in pixels"
      },
      desktopHeight: {
        type: "number",
        value: "",
        description: "Desktop image height in pixels"
      },
      mobileWidth: {
        type: "number",
        value: "",
        description: "Mobile image width in pixels"
      },
      mobileHeight: {
        type: "number",
        value: "",
        description: "Mobile image height in pixels"
      },
      desktopImageUrl: {
        type: "url",
        value: "",
        description: "URL of the desktop image"
      },
      mobileImageUrl: {
        type: "url",
        value: "",
        description: "URL of the mobile image"
      }
    },
    setCountdown: {
      description: "Countdown Settings",
      finishDate: {
        type: "date",
        value: "",
        description: "Finish date for the countdown"
      }
    }
  }
 },
  },
}

/*
 * Block Target, Gamification gibi ana kategorilerde id: turkce karakter icermeyen harflere gore id'lenecek
 * Inline targetlar 1000'den, Block Target kategorisi 2000 seklinde ilerleyecek. Daha sonra recommendation gibi turler eklenirse 4000 ve her gelen kategori icin target turune ait id 1000'er olarak artacak
 * Kategorilerin alt kirilimlarindaki targetlar ana kategorinin ilk target turundeki sayinin ustune 1eklenerek artirilabilir. Ornek Earlet icin id 2001
 * Yani b2001 idli target turu block target altindaki earlet kurgusu olacaktir.  c3003 --> Gamification altindaki 3003 idli target
 */

export default TargetConfig
