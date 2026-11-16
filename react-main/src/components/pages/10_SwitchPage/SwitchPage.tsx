import { useState } from 'react'

const choices = ['ready', 'loading', 'empty', 'error'] as const
type Status = (typeof choices)[number]

function SwitchPage() {
  const [status, setStatus] = useState<Status>('ready')

  function renderStatusMessage() {
    switch (status) {
      case 'ready':
        return 'Data is ready to display.'

      case 'loading':
        return 'Loading data…'

      case 'empty':
        return 'There is no data yet.'

      case 'error':
        return 'An error occurred.'

      default:
        return 'Unknown status.'
    }
  }

  return (
    <section className="page-card">
      <h2>Multiple branches with switch</h2>

      <p>
        React uses JavaScript switch statements to determine which content
        should be rendered.
      </p>

      <h3>Option 1: Separate buttons</h3>

      <div className="event-actions">
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

      <h3>Option 2: Generate buttons with map()</h3>

      <div className="event-actions">
        {choices.map((option) => (
          <button key={option} type="button" onClick={() => setStatus(option)}>
            {option}
          </button>
        ))}
      </div>

      <p>
        Current state: <code>{status}</code>
      </p>

      <p role="status">{renderStatusMessage()}</p>
    </section>
  )
}

export default SwitchPage
