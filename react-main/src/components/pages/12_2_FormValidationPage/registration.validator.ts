import type { Registration } from './Registration.model'

export type ValidationErrors = Partial<Record<keyof Registration, string>>

export function validateRegistration(values: Registration): ValidationErrors {
  const errors: ValidationErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (values.password.length < 8) {
    errors.password = 'Password must contain at least 8 characters.'
  }

  return errors
}
