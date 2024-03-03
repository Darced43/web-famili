import { reactive } from 'vue'

export const store = reactive({
    aboutSlider: '',
    increment(newMessage) {
        this.aboutSlider = newMessage
      }
  })