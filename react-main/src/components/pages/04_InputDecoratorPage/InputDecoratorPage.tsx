import InputValuesExample from './01_InputValuesExample/InputValuesExample'
import ParentCallbackExample from './02_ParentCallbackExample/ParentCallbackExample'
import './InputDecoratorPage.css'

function InputDecoratorPage() {
  return (
    <section className="input-decorator-page">
      <h2>Input Decorator</h2>
      <InputValuesExample />
      <ParentCallbackExample />
    </section>
  )
}

export default InputDecoratorPage
