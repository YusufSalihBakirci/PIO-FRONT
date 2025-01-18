import { defineStore } from 'pinia'

export const useIframeStore = defineStore('iframeStore', {
  state: () => ({
    content: null
  }),
  actions: {
    setIframeContent(content) {
      this.content = content
    },
  },
})
