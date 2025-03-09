import { defineComponent, createApp } from 'vue'

const RootComponent = defineComponent({
  name: 'RootComponent',
  setup() {
    function showCurrentDateLongFormat() {
      const formatter = new Intl.DateTimeFormat('en-EN', { dateStyle: 'long' })
      const currentDateTime = new Date()
      return formatter.format(currentDateTime)
    }

    return {
      showCurrentDateLongFormat,
    }
  },

  template: `<div>Сегодня {{showCurrentDateLongFormat()}}</div>`,
})

createApp(RootComponent).mount('#app')
