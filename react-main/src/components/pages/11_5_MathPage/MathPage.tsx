const sampleNumber = 4.7

function MathPage() {
  return (
    <section className="page-card">
      <h2>Math methods</h2>

      <p>
        JavaScript provides the Math object with built-in mathematical constants
        and methods.
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
            <td>Math.PI</td>
            <td>{Math.PI}</td>
          </tr>

          <tr>
            <td>Math.round(4.7)</td>
            <td>{Math.round(sampleNumber)}</td>
          </tr>

          <tr>
            <td>Math.floor(4.7)</td>
            <td>{Math.floor(sampleNumber)}</td>
          </tr>

          <tr>
            <td>Math.ceil(4.7)</td>
            <td>{Math.ceil(sampleNumber)}</td>
          </tr>

          <tr>
            <td>Math.trunc(4.7)</td>
            <td>{Math.trunc(sampleNumber)}</td>
          </tr>

          <tr>
            <td>Math.abs(-10)</td>
            <td>{Math.abs(-10)}</td>
          </tr>

          <tr>
            <td>Math.max(10, 20, 5)</td>
            <td>{Math.max(10, 20, 5)}</td>
          </tr>

          <tr>
            <td>Math.min(10, 20, 5)</td>
            <td>{Math.min(10, 20, 5)}</td>
          </tr>

          <tr>
            <td>Math.pow(2, 3)</td>
            <td>{Math.pow(2, 3)}</td>
          </tr>

          <tr>
            <td>Math.sqrt(64)</td>
            <td>{Math.sqrt(64)}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default MathPage
