import { useHighlight } from './01_useHighlight'
import './01_HighlightPage.css'

function NoDirectiveUseHighlightPage() {
  const highlight = useHighlight()

  return (
    <section className="page-card">
      <p className="eyebrow">Custom Hooks</p>
      <h2>useHighlight Hook</h2>

      <p>
        This custom hook adds a highlight effect when an element is hovered over
        or receives keyboard focus.
      </p>

      <div className="highlight-examples">
        <button type="button" {...highlight}>
          Hover or focus me
        </button>

        <p tabIndex={0} {...highlight}>
          The same hook can be reused on different elements.
        </p>
      </div>
    </section>
  )
}

export default NoDirectiveUseHighlightPage
