const sampleNumber = 12345.6789

function NumberPage() {
  return (
    <section className="page-card">
      <h2>Number formatting</h2>

      <p>
        JavaScript provides Intl.NumberFormat to format numbers, currencies and
        percentages according to different locales.
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
            <td>Default formatting</td>
            <td>{new Intl.NumberFormat('en-US').format(sampleNumber)}</td>
          </tr>

          <tr>
            <td>minimumFractionDigits: 2</td>
            <td>
              {new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
              }).format(sampleNumber)}
            </td>
          </tr>

          <tr>
            <td>maximumFractionDigits: 2</td>
            <td>
              {new Intl.NumberFormat('en-US', {
                maximumFractionDigits: 2,
              }).format(sampleNumber)}
            </td>
          </tr>

          <tr>
            <td>minimumIntegerDigits: 8</td>
            <td>
              {new Intl.NumberFormat('en-US', {
                minimumIntegerDigits: 8,
              }).format(123)}
            </td>
          </tr>

          <tr>
            <td>useGrouping: false</td>
            <td>
              {new Intl.NumberFormat('en-US', {
                useGrouping: false,
              }).format(sampleNumber)}
            </td>
          </tr>

          <tr>
            <td>style: decimal</td>
            <td>
              {new Intl.NumberFormat('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2,
              }).format(sampleNumber)}
            </td>
          </tr>

          <tr>
            <td>style: percent</td>
            <td>
              {new Intl.NumberFormat('en-US', {
                style: 'percent',
              }).format(0.25)}
            </td>
          </tr>

          <tr>
            <td>currency: GBP</td>
            <td>
              {new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
              }).format(1234.5)}
            </td>
          </tr>

          <tr>
            <td>currency: USD</td>
            <td>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(1234.5)}
            </td>
          </tr>

          <tr>
            <td>currency: EUR</td>
            <td>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
              }).format(1234.5)}
            </td>
          </tr>

          <tr>
            <td>currency: UAH</td>
            <td>
              {new Intl.NumberFormat('uk-UA', {
                style: 'currency',
                currency: 'UAH',
              }).format(1234.5)}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default NumberPage
