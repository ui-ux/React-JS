import FormsPageView from './FormsPageView'
import type { ContactFormValues } from './types'
import { useState, type SubmitEvent } from 'react'

function FormsPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const contact: ContactFormValues = { name, email }

  const [controlledSubmission, setControlledSubmission] =
    useState<ContactFormValues | null>(null)

  // Controlled form

  function handleNameChange(value: string) {
    setName(value)
    setControlledSubmission(null)
  }

  function handleEmailChange(value: string) {
    setEmail(value)
    setControlledSubmission(null)
  }

  function handleControlledSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setControlledSubmission(contact)
  }

  return (
    <FormsPageView
      contact={contact}
      controlledSubmission={controlledSubmission}
      onNameChange={handleNameChange}
      onEmailChange={handleEmailChange}
      onControlledSubmit={handleControlledSubmit}
    />
  )
}

export default FormsPage
