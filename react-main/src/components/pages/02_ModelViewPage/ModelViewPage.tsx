import { useState } from 'react'

function ModelViewPage() {
  const name = 'myName'
  const [person, setPerson] = useState({ name: 'your Name' })

  return (
    <section>
      <h2>Model View</h2>
      <p>
        In React, JSX expressions display JavaScript values, while props pass
        values to elements.
      </p>
      <table className="model-view-table">
        <thead>
          <tr>
            <th scope="col">JSX</th>
            <th scope="col">Rendered result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>{'{name}'}</code>
            </td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>
              <code>{'{person.name}'}</code>
            </td>
            <td>{person.name}</td>
          </tr>
          <tr>
            <td>
              <code>{'<input value={person.name} onChange={...} />'}</code>
            </td>
            <td>
              <input
                aria-label="Person name"
                onChange={(event) =>
                  setPerson({ ...person, name: event.target.value })
                }
                value={person.name}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default ModelViewPage
