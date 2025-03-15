import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counter = ref(0)

    return {
      counter,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        @click="counter--"
        :disabled="!(counter > 0)"
      >➖</button>

      <span class="count" data-testid="count">{{ counter }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        @click="counter++"
        :disabled="!(counter < 5)"
      >➕</button>
    </div>
  `,
})
