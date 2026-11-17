import { type SubmitEvent } from 'react'

export type ContactFormValues = {
  name: string
  email: string
}

export type FormsPageViewProps = {
  contact: ContactFormValues
  controlledSubmission: ContactFormValues | null
  onNameChange: (value: string) => void
  onEmailChange: (value: string) => void
  onControlledSubmit: (event: SubmitEvent<HTMLFormElement>) => void
}
