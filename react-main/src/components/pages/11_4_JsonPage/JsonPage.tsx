const sampleUsers = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Maria' },
]

const sampleJson = JSON.stringify(sampleUsers)

function JsonPage() {
  return (
    <section className="page-card">
      <h2>JSON methods</h2>

      <p>
        JavaScript provides JSON.stringify() and JSON.parse() to convert between
        JavaScript values and JSON strings.
      </p>

      <table className="model-view-table">
        <thead>
          <tr>
            <th scope="col">Operation</th>
            <th scope="col">Result</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>JSON.stringify(value)</td>
            <td>
              <pre>{JSON.stringify(sampleUsers)}</pre>
            </td>
          </tr>

          <tr>
            <td>JSON.stringify(value, null, 2)</td>
            <td>
              <pre>{JSON.stringify(sampleUsers, null, 2)}</pre>
            </td>
          </tr>

          <tr>
            <td>JSON.parse(jsonString)</td>
            <td>
              <pre>{JSON.stringify(JSON.parse(sampleJson), null, 2)}</pre>
            </td>
          </tr>

          <tr>
            <td>typeof sampleJson</td>
            <td>{typeof sampleJson}</td>
          </tr>

          <tr>
            <td>typeof sampleUsers</td>
            <td>{typeof sampleUsers}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default JsonPage
