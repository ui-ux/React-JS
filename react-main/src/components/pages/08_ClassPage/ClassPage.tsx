import { useState } from 'react'
import './ReactExamples.css'

function ClassPage() {
  const [highlighted, setHighlighted] = useState(false)

  return (
    <section className="page-card">
      <h2>Conditional classes</h2>
      <p>
        React uses <code>className</code>. A JavaScript expression can choose
        which class to apply.
      </p>
      <button
        type="button"
        onClick={() => setHighlighted((current) => !current)}
      >
        Toggle highlight
      </button>
      <p className={highlighted ? 'example-highlight' : 'example-plain'}>
        Highlighted: {String(highlighted)}
      </p>
      <pre>
        <code>
          {`className={highlighted ? 'example-highlight' : 'example-plain'}`}
        </code>
      </pre>
    </section>
  )
}

export default ClassPage
