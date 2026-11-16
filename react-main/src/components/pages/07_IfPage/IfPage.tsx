import { useState } from 'react'

type Status = 'ready' | 'loading' | 'empty' | 'error'

function IfPage() {
  const [status, setStatus] = useState<Status>('ready')
  const [showMessage, setShowMessage] = useState(true)

  function renderStatusMessage() {
    if (status === 'ready') {
      return 'Data is ready to display.'
    } else if (status === 'loading') {
      return 'Loading data…'
    } else if (status === 'empty') {
      return 'There is no data yet.'
    } else if (status === 'error') {
      return 'An error occurred.'
    } else {
      return 'Unknown status.'
    }
  }

  return (
    <section className="page-card">
      <h2>Conditional rendering (Angular @if / React if)</h2>

      <p>
        React uses JavaScript if / else if / else statements to determine which
        content should be rendered.
      </p>

      <div className="event-actions" aria-label="Choose a state">
        <button type="button" onClick={() => setStatus('ready')}>
          Ready
        </button>

        <button type="button" onClick={() => setStatus('loading')}>
          Loading
        </button>

        <button type="button" onClick={() => setStatus('empty')}>
          Empty
        </button>

        <button type="button" onClick={() => setStatus('error')}>
          Error
        </button>
      </div>

      <p>
        Current state: <code>{status}</code>
      </p>

      <p role="status">{renderStatusMessage()}</p>

      <hr />

      <h3>Show / hide content</h3>

      <label>
        <input
          type="checkbox"
          checked={showMessage}
          onChange={(event) => setShowMessage(event.target.checked)}
        />
        Show message
      </label>

      {showMessage && <p>This text is conditionally rendered.</p>}
    </section>
  )
}

export default IfPage
