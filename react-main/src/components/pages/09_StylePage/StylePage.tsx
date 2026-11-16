import { useState } from 'react'

function StylePage() {
  const [useAccent, setUseAccent] = useState(false)
  const textStyle = {
    color: useAccent ? 'tomato' : 'teal',
    fontSize: useAccent ? '24px' : '18px',
  }

  return (
    <section className="page-card">
      <h2>Inline styles</h2>
      <p>
        React takes a style object with camelCased property names and CSS values
        as strings.
      </p>
      <button type="button" onClick={() => setUseAccent((current) => !current)}>
        Toggle style
      </button>
      <p style={textStyle}>This text uses the current style state.</p>
      <pre>
        <code>{`style={{ color: useAccent ? 'tomato' : 'teal' }}`}</code>
      </pre>
    </section>
  )
}

export default StylePage
