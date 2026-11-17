import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import type { Registration } from './Registration.model'
import {
  validateRegistration,
  type ValidationErrors,
} from './registration.validator'

const initialRegistration: Registration = {
  name: '',
  email: '',
  password: '',
}

function FormValidationPage() {
  const [values, setValues] = useState(initialRegistration)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [submitted, setSubmitted] = useState<Registration | null>(null)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const field = event.currentTarget.name
    if (field !== 'name' && field !== 'email' && field !== 'password') {
      return
    }

    const value = event.currentTarget.value
    const nextValues = { ...values, [field]: value }
    setValues(nextValues)
    setErrors(validateRegistration(nextValues))
    setSubmitted(null)
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateRegistration(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(values)
    }
  }

  return (
    <section className="page-card">
      <p className="eyebrow">React forms</p>
      <h2>Form validation</h2>
      <p>
        Keep validation in ordinary functions and derive error messages from the
        current values. Native input types still provide useful browser
        semantics.
      </p>

      <form className="form-fields" noValidate onSubmit={handleSubmit}>
        <label htmlFor="validation-name">Name</label>
        <input
          id="validation-name"
          aria-describedby={errors.name ? 'validation-name-error' : undefined}
          aria-invalid={Boolean(errors.name)}
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        {errors.name && (
          <small id="validation-name-error" className="error" role="alert">
            {errors.name}
          </small>
        )}

        <label htmlFor="validation-email">Email</label>
        <input
          id="validation-email"
          aria-describedby={errors.email ? 'validation-email-error' : undefined}
          aria-invalid={Boolean(errors.email)}
          name="email"
          onChange={handleChange}
          type="email"
          value={values.email}
        />
        {errors.email && (
          <small id="validation-email-error" className="error" role="alert">
            {errors.email}
          </small>
        )}

        <label htmlFor="validation-password">Password</label>
        <input
          id="validation-password"
          aria-describedby={
            errors.password ? 'validation-password-error' : undefined
          }
          aria-invalid={Boolean(errors.password)}
          name="password"
          onChange={handleChange}
          type="password"
          value={values.password}
        />
        {errors.password && (
          <small id="validation-password-error" className="error" role="alert">
            {errors.password}
          </small>
        )}

        <button type="submit">Create account</button>
      </form>

      {submitted && (
        <div className="result" aria-live="polite">
          <p>
            Submitted: {submitted.name} ({submitted.email})
          </p>
          <p>Password is not included in the submitted preview.</p>
        </div>
      )}
    </section>
  )
}

export default FormValidationPage
