const sampleText = '  TestTexT TestTexT  '

function StringPage() {
  return (
    <section className="page-card">
      <h2>String methods</h2>

      <p>
        JavaScript provides built-in methods for searching, extracting,
        replacing and transforming strings.
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
            <td>toLowerCase()</td>
            <td>{sampleText.toLowerCase()}</td>
          </tr>

          <tr>
            <td>toUpperCase()</td>
            <td>{sampleText.toUpperCase()}</td>
          </tr>

          <tr>
            <td>trim()</td>
            <td>{sampleText.trim()}</td>
          </tr>

          <tr>
            <td>slice(2, 10)</td>
            <td>{sampleText.slice(2, 10)}</td>
          </tr>

          <tr>
            <td>substring(2, 10)</td>
            <td>{sampleText.substring(2, 10)}</td>
          </tr>

          <tr>
            <td>replace('Test', 'New')</td>
            <td>{sampleText.replace('Test', 'New')}</td>
          </tr>

          <tr>
            <td>replaceAll('Test', 'New')</td>
            <td>{sampleText.replaceAll('Test', 'New')}</td>
          </tr>

          <tr>
            <td>includes('Test')</td>
            <td>{String(sampleText.includes('Test'))}</td>
          </tr>

          <tr>
            <td>startsWith('Test')</td>
            <td>{String(sampleText.trim().startsWith('Test'))}</td>
          </tr>

          <tr>
            <td>endsWith('Test')</td>
            <td>{String(sampleText.trim().endsWith('Test'))}</td>
          </tr>

          <tr>
            <td>split(' ')</td>
            <td>{JSON.stringify(sampleText.trim().split(' '))}</td>
          </tr>

          <tr>
            <td>length</td>
            <td>{sampleText.length}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default StringPage
