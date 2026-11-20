import './00_HighlightPage.css'

function NoDirectiveHighlightPage() {
  function handleMouseEnter(event: React.MouseEvent<HTMLElement>) {
    event.currentTarget.classList.add('highlight')
  }

  function handleMouseLeave(event: React.MouseEvent<HTMLElement>) {
    event.currentTarget.classList.remove('highlight')
  }

  function handleFocus(event: React.FocusEvent<HTMLElement>) {
    event.currentTarget.classList.add('highlight')
  }

  function handleBlur(event: React.FocusEvent<HTMLElement>) {
    event.currentTarget.classList.remove('highlight')
  }

  return (
    <section className="page-card">
      <p className="eyebrow">Custom interactions</p>
      <h2>Event handlers</h2>

      <p>
        Elements are highlighted when the user hovers over them or focuses on
        them using the keyboard.
      </p>

      <div className="highlight-examples">
        <button
          type="button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          Hover or focus me
        </button>

        <p
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          You can also apply the same behavior to a text element.
        </p>
      </div>
    </section>
  )
}

export default NoDirectiveHighlightPage
