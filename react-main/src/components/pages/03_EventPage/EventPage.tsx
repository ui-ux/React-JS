import {
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
} from 'react'

function EventPage() {
  const [name, setName] = useState('Name Person')
  const [message, setMessage] = useState('')

  const nameLength = name.length
  const nameStatus = nameLength >= 5 ? 'Long name' : 'Short name'

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.currentTarget.value)
  }

  function handleNameKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      setMessage(`Enter pressed for ${name}`)
    }
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setMessage(`"${event.currentTarget.textContent}" clicked for ${name}`)
  }

  return (
    <section className="page-card">
      <h2>React Events</h2>

      <article className="event-example">
        <h3>Event handlers</h3>

        <p>
          Person name: <strong>{name}</strong>
        </p>

        <p>Name length: {nameLength}</p>
        <p>Name status: {nameStatus}</p>

        <label htmlFor="person-name">Edit name and press Enter</label>
        <input
          id="person-name"
          onChange={handleNameChange}
          onKeyDown={handleNameKeyDown}
          type="text"
          value={name}
        />

        <div className="event-actions">
          <button type="button" onClick={handleClick}>
            Click
          </button>
        </div>

        <p aria-live="polite" className="event-message">
          {message}
        </p>
      </article>
    </section>
  )
}

export default EventPage
