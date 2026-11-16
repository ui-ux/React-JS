import type { InputDecoratorModel } from '../../../../000_models/InputDecoratorModel'

interface ChildInputDecoratorProps {
  title?: InputDecoratorModel
  hasTitle?: boolean
}

function ChildInputDecorator({
  title,
  hasTitle = false,
}: ChildInputDecoratorProps) {
  return (
    <section className="input-values-child">
      <h3>Child component</h3>
      <table className="input-decorator-table">
        <thead>
          <tr>
            <th scope="col">Props</th>
            <th scope="col">JSX</th>
            <th scope="col">Rendered result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>
                {hasTitle
                  ? '<ChildInputDecorator title={testData1} hasTitle={true} />'
                  : '<ChildInputDecorator hasTitle={false} />'}
              </code>
            </td>
            <td>
              <code>{'{title.name}'}</code>
            </td>
            <td>{title && <div>{title.name}</div>}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default ChildInputDecorator
