import { ref } from "vue";

const iframeUrl = ref("http://127.0.0.1:3000/");
const iframeContent = ref(null);
const previewElement = ref(null);
const isIframeLoaded = ref(false);

export function useIframeUrl() {
  return {
    content: iframeUrl,
    isLoaded: isIframeLoaded,
    getIframeUrl: () => iframeUrl.value,
    setIframeContentUrl: (url) => {
      console.log("Setting iframe URL:", url);
      iframeUrl.value = url;
    },
    setIframeLoaded: (loaded) => {
      isIframeLoaded.value = loaded;
    },
  };
}

export function useIframeContent() {
  return {
    content: iframeContent,
    previewElement: previewElement,
    setContent: (content) => {
      iframeContent.value = content;
    },
    setPreviewElement: (element) => {
      previewElement.value = element;
    },
  };
}
