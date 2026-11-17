import { useState, type SubmitEvent } from 'react'

type Contact = {
  name: string
  email: string
}

function UncontrolledFormsPage() {
  const [submittedContact, setSubmittedContact] = useState<Contact | null>(null)

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    setSubmittedContact({
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
    })
  }

  return (
    <section className="page-card">
      <p className="eyebrow">12_1_2 · React forms</p>
      <h2>Uncontrolled form</h2>
      <p>
        The browser owns the current input values. Read them at submit time with
        the native <code>FormData</code> API instead of storing every keystroke
        in React state.
      </p>

      <article className="form-example">
        <form className="form-fields" onSubmit={handleSubmit}>
          <label htmlFor="uncontrolled-name">Name</label>
          <input id="uncontrolled-name" name="name" required />

          <label htmlFor="uncontrolled-email">Email</label>
          <input id="uncontrolled-email" name="email" type="email" required />

          <button type="submit">Submit uncontrolled form</button>
        </form>

        {submittedContact && (
          <p className="result" aria-live="polite">
            Submitted: {submittedContact.name} ({submittedContact.email})
          </p>
        )}
      </article>
    </section>
  )
}

export default UncontrolledFormsPage
