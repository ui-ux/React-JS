import { TESTS } from '../../../../000_models/InputDecoratorModel'
import ChildInputDecorator from './ChildInputDecorator'

function InputValuesExample() {
  const [testData1, testData2, testData3] = TESTS

  return (
    <section className="input-decorator-example">
      <h3>Passing values to a child component</h3>
      <table className="input-decorator-table">
        <thead>
          <tr>
            <th scope="col">JSX</th>
            <th scope="col">Rendered result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>{'{testData1.name}'}</code>
            </td>
            <td>{testData1.name}</td>
          </tr>
          <tr>
            <td>
              <code>{'{testData2.name}'}</code>
            </td>
            <td>{testData2.name}</td>
          </tr>
          <tr>
            <td>
              <code>{'{testData3.name}'}</code>
            </td>
            <td>{testData3.name}</td>
          </tr>
        </tbody>
      </table>

      <ChildInputDecorator title={testData1} hasTitle />
      <ChildInputDecorator hasTitle={false} />
    </section>
  )
}

export default InputValuesExample
