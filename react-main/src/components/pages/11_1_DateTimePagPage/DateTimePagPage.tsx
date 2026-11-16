const currentDate = new Date()
const sampleDate = new Date('2024-01-15T12:30:45Z')
const anotherDate = new Date('2025-06-20T18:45:00Z')

function DateTimePage() {
  const formatDate = (date: Date, options: Intl.DateTimeFormatOptions = {}) =>
    new Intl.DateTimeFormat('en-US', {
      ...options,
      timeZone: 'UTC',
    }).format(date)

  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
  }

  return (
    <section className="page-card">
      <h2>Date and time formatting</h2>

      <p>
        JavaScript provides Date and Intl.DateTimeFormat to work with dates and
        format them according to different locales.
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
            <td>new Date()</td>
            <td>{currentDate.toString()}</td>
          </tr>

          <tr>
            <td>new Date().toISOString()</td>
            <td>{currentDate.toISOString()}</td>
          </tr>

          <tr>
            <td>new Date('2024-01-15T12:30:45Z')</td>
            <td>{sampleDate.toISOString()}</td>
          </tr>

          <tr>
            <td>dateStyle: 'full'</td>
            <td>{formatDate(sampleDate, { dateStyle: 'full' })}</td>
          </tr>

          <tr>
            <td>dateStyle: 'long'</td>
            <td>{formatDate(sampleDate, { dateStyle: 'long' })}</td>
          </tr>

          <tr>
            <td>dateStyle: 'medium'</td>
            <td>{formatDate(sampleDate, { dateStyle: 'medium' })}</td>
          </tr>

          <tr>
            <td>dateStyle: 'short'</td>
            <td>{formatDate(sampleDate, { dateStyle: 'short' })}</td>
          </tr>

          <tr>
            <td>timeStyle: 'full'</td>
            <td>{formatDate(sampleDate, { timeStyle: 'full' })}</td>
          </tr>

          <tr>
            <td>timeStyle: 'long'</td>
            <td>{formatDate(sampleDate, { timeStyle: 'long' })}</td>
          </tr>

          <tr>
            <td>timeStyle: 'medium'</td>
            <td>{formatDate(sampleDate, { timeStyle: 'medium' })}</td>
          </tr>

          <tr>
            <td>timeStyle: 'short'</td>
            <td>{formatDate(sampleDate, { timeStyle: 'short' })}</td>
          </tr>

          <tr>
            <td>year: 'numeric'</td>
            <td>{formatDate(sampleDate, { year: 'numeric' })}</td>
          </tr>

          <tr>
            <td>year: '2-digit'</td>
            <td>{formatDate(sampleDate, { year: '2-digit' })}</td>
          </tr>

          <tr>
            <td>month: 'numeric'</td>
            <td>{formatDate(sampleDate, { month: 'numeric' })}</td>
          </tr>

          <tr>
            <td>month: '2-digit'</td>
            <td>{formatDate(sampleDate, { month: '2-digit' })}</td>
          </tr>

          <tr>
            <td>month: 'long'</td>
            <td>{formatDate(sampleDate, { month: 'long' })}</td>
          </tr>

          <tr>
            <td>month: 'short'</td>
            <td>{formatDate(sampleDate, { month: 'short' })}</td>
          </tr>

          <tr>
            <td>month: 'narrow'</td>
            <td>{formatDate(sampleDate, { month: 'narrow' })}</td>
          </tr>

          <tr>
            <td>day: 'numeric'</td>
            <td>{formatDate(sampleDate, { day: 'numeric' })}</td>
          </tr>

          <tr>
            <td>day: '2-digit'</td>
            <td>{formatDate(sampleDate, { day: '2-digit' })}</td>
          </tr>

          <tr>
            <td>weekday: 'long'</td>
            <td>{formatDate(sampleDate, { weekday: 'long' })}</td>
          </tr>

          <tr>
            <td>weekday: 'short'</td>
            <td>{formatDate(sampleDate, { weekday: 'short' })}</td>
          </tr>

          <tr>
            <td>weekday: 'narrow'</td>
            <td>{formatDate(sampleDate, { weekday: 'narrow' })}</td>
          </tr>

          <tr>
            <td>hour: 'numeric'</td>
            <td>{formatDate(sampleDate, { hour: 'numeric' })}</td>
          </tr>

          <tr>
            <td>hour: '2-digit'</td>
            <td>{formatDate(sampleDate, { hour: '2-digit' })}</td>
          </tr>

          <tr>
            <td>minute: 'numeric'</td>
            <td>{formatDate(sampleDate, { minute: 'numeric' })}</td>
          </tr>

          <tr>
            <td>minute: '2-digit'</td>
            <td>{formatDate(sampleDate, { minute: '2-digit' })}</td>
          </tr>

          <tr>
            <td>second: 'numeric'</td>
            <td>{formatDate(sampleDate, { second: 'numeric' })}</td>
          </tr>

          <tr>
            <td>second: '2-digit'</td>
            <td>{formatDate(sampleDate, { second: '2-digit' })}</td>
          </tr>

          <tr>
            <td>hour12: false</td>
            <td>
              {formatDate(sampleDate, {
                hour: 'numeric',
                minute: '2-digit',
                hour12: false,
              })}
            </td>
          </tr>

          <tr>
            <td>hour12: true</td>
            <td>
              {formatDate(sampleDate, {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
              })}
            </td>
          </tr>

          <tr>
            <td>date + time</td>
            <td>{formatDate(sampleDate, dateTimeOptions)}</td>
          </tr>

          <tr>
            <td>Locale: en-US</td>
            <td>
              {new Intl.DateTimeFormat('en-US', {
                dateStyle: 'long',
                timeZone: 'UTC',
              }).format(sampleDate)}
            </td>
          </tr>

          <tr>
            <td>Locale: en-GB</td>
            <td>
              {new Intl.DateTimeFormat('en-GB', {
                dateStyle: 'long',
                timeZone: 'UTC',
              }).format(sampleDate)}
            </td>
          </tr>

          <tr>
            <td>Locale: uk-UA</td>
            <td>
              {new Intl.DateTimeFormat('uk-UA', {
                dateStyle: 'long',
                timeZone: 'UTC',
              }).format(sampleDate)}
            </td>
          </tr>

          <tr>
            <td>getFullYear()</td>
            <td>{sampleDate.getUTCFullYear()}</td>
          </tr>

          <tr>
            <td>getMonth() + 1</td>
            <td>{sampleDate.getUTCMonth() + 1}</td>
          </tr>

          <tr>
            <td>getDate()</td>
            <td>{sampleDate.getUTCDate()}</td>
          </tr>

          <tr>
            <td>getDay()</td>
            <td>{sampleDate.getUTCDay()}</td>
          </tr>

          <tr>
            <td>getTime()</td>
            <td>{sampleDate.getTime()}</td>
          </tr>

          <tr>
            <td>toLocaleDateString('en-US')</td>
            <td>
              {sampleDate.toLocaleDateString('en-US', { timeZone: 'UTC' })}
            </td>
          </tr>

          <tr>
            <td>toLocaleTimeString('en-US')</td>
            <td>
              {sampleDate.toLocaleTimeString('en-US', { timeZone: 'UTC' })}
            </td>
          </tr>

          <tr>
            <td>Compare dates: sampleDate &lt; anotherDate</td>
            <td>{String(sampleDate < anotherDate)}</td>
          </tr>

          <tr>
            <td>Compare dates: sampleDate &gt; anotherDate</td>
            <td>{String(sampleDate > anotherDate)}</td>
          </tr>

          <tr>
            <td>
              Compare dates: sampleDate.getTime() === anotherDate.getTime()
            </td>
            <td>{String(sampleDate.getTime() === anotherDate.getTime())}</td>
          </tr>

          <tr>
            <td>Difference between dates (milliseconds)</td>
            <td>{anotherDate.getTime() - sampleDate.getTime()}</td>
          </tr>

          <tr>
            <td>Difference between dates (days)</td>
            <td>
              {Math.floor(
                (anotherDate.getTime() - sampleDate.getTime()) /
                  (1000 * 60 * 60 * 24),
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default DateTimePage
