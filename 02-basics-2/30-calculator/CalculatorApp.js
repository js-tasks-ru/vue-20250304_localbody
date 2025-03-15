import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    let operandLeft = ref(null)

    let operandRight = ref(null)

    let operator = ref('sum')

    let result = computed(() => {
      // console.log(`${operandLeft}`)
      // if (operandRight === 0 && operator === 'divide') return 'деление на ноль'
      if (operator.value === 'sum') return parseInt(operandLeft.value) + parseInt(operandRight.value)
      if (operator.value === 'subtract') return parseInt(operandLeft.value) - parseInt(operandRight.value)
      if (operator.value === 'multiply') return parseInt(operandLeft.value) * parseInt(operandRight.value)
      if (operator.value === 'divide') return parseInt(operandLeft.value) / parseInt(operandRight.value)

      return ''
    })

    return {
      operandLeft,
      operandRight,
      operator,
      result,
    }
  },

  template: `
    <div class="calculator">
      <input name="operandLeft" type="number" aria-label="First operand" v-model="operandLeft" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model='operator' />➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model='operator'  />➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model='operator' />✖</label>
        <label><input type="radio" name="operator" value="divide" v-model='operator'  />➗</label>
      </div>

      <input name="operandRight" type="number" aria-label="Second operand" v-model="operandRight" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
