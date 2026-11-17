import { useState, type SubmitEvent } from 'react'

type EmailField = {
  id: number
  value: string
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function DynamicFormPage() {
  const [fields, setFields] = useState<EmailField[]>([{ id: 1, value: '' }])
  const [showErrors, setShowErrors] = useState(false)
  const [submittedEmails, setSubmittedEmails] = useState<string[] | null>(null)
  const [nextId, setNextId] = useState(2)

  function updateEmail(id: number, value: string) {
    setFields((current) =>
      current.map((field) => (field.id === id ? { ...field, value } : field)),
    )
    setSubmittedEmails(null)
  }

  function addEmail() {
    setFields((current) => [...current, { id: nextId, value: '' }])
    setNextId((current) => current + 1)
    setSubmittedEmails(null)
  }

  function removeEmail(id: number) {
    setFields((current) => current.filter((field) => field.id !== id))
    setSubmittedEmails(null)
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setShowErrors(true)

    if (
      fields.length > 0 &&
      fields.every((field) => isValidEmail(field.value))
    ) {
      setSubmittedEmails(fields.map((field) => field.value.trim()))
    } else {
      setSubmittedEmails(null)
    }
  }

  return (
    <section className="page-card">
      <p className="eyebrow">12_3 · React forms</p>
      <h2>Dynamic form fields</h2>
      <p>
        Store a list of fields in component state and render it with
        <code>map()</code>. Stable IDs let React track each field when items are
        added or removed.
      </p>

      <form className="form-fields" noValidate onSubmit={handleSubmit}>
        {fields.map((field, index) => {
          const errorId = `dynamic-email-error-${field.id}`
          const hasError = showErrors && !isValidEmail(field.value)

          return (
            <div className="dynamic-field" key={field.id}>
              <label htmlFor={`dynamic-email-${field.id}`}>
                Email {index + 1}
              </label>
              <div className="dynamic-field-row">
                <input
                  id={`dynamic-email-${field.id}`}
                  aria-describedby={hasError ? errorId : undefined}
                  aria-invalid={hasError}
                  onChange={(event) =>
                    updateEmail(field.id, event.currentTarget.value)
                  }
                  type="email"
                  value={field.value}
                />
                <button
                  type="button"
                  disabled={fields.length === 1}
                  onClick={() => removeEmail(field.id)}
                >
                  Remove
                </button>
              </div>
              {hasError && (
                <small id={errorId} className="error" role="alert">
                  {field.value.trim()
                    ? 'Enter a valid email address.'
                    : 'Email is required.'}
                </small>
              )}
            </div>
          )
        })}

        <div className="form-actions">
          <button type="button" onClick={addEmail}>
            Add email
          </button>
          <button type="submit">Submit emails</button>
        </div>
      </form>

      {submittedEmails && (
        <div className="result" aria-live="polite">
          <p>Submitted emails: {submittedEmails.join(', ')}</p>
        </div>
      )}
    </section>
  )
}

export default DynamicFormPage
