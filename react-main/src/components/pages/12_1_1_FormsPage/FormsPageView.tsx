import type { FormsPageViewProps } from './types'

function FormsPageView({
  contact,
  controlledSubmission,
  onControlledSubmit,
  onNameChange,
  onEmailChange,
}: FormsPageViewProps) {
  return (
    <section className="page-card">
      <p className="eyebrow">React forms</p>

      <h2>Controlled form</h2>

      <p>
        React has no Angular-style template-driven and reactive form APIs. A
        controlled input gets its value from React state and updates that state
        on each change.
      </p>

      <article className="form-example">
        <h3>Controlled inputs</h3>

        <p>
          Each input gets its value from state and updates that state in
          <code>onChange</code>.
        </p>

        <form className="form-fields" onSubmit={onControlledSubmit}>
          <label htmlFor="controlled-name">Name</label>

          <input
            id="controlled-name"
            name="name"
            value={contact.name}
            onChange={(event) => onNameChange(event.currentTarget.value)}
            required
          />

          <label htmlFor="controlled-email">Email</label>

          <input
            id="controlled-email"
            name="email"
            type="email"
            value={contact.email}
            onChange={(event) => onEmailChange(event.currentTarget.value)}
            required
          />

          <button type="submit">Submit controlled form</button>
        </form>

        <p aria-live="polite">
          State value: <code>{JSON.stringify(contact)}</code>
        </p>

        {controlledSubmission && (
          <p className="result" aria-live="polite">
            Submitted: {controlledSubmission.name} ({controlledSubmission.email}
            )
          </p>
        )}
      </article>
    </section>
  )
}

export default FormsPageView
