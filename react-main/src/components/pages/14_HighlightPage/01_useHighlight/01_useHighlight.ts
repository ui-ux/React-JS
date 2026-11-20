import type { MouseEvent, FocusEvent } from 'react'

export function useHighlight() {
  function handleMouseEnter(event: MouseEvent<HTMLElement>) {
    event.currentTarget.classList.add('highlight')
  }

  function handleMouseLeave(event: MouseEvent<HTMLElement>) {
    event.currentTarget.classList.remove('highlight')
  }

  function handleFocus(event: FocusEvent<HTMLElement>) {
    event.currentTarget.classList.add('highlight')
  }

  function handleBlur(event: FocusEvent<HTMLElement>) {
    event.currentTarget.classList.remove('highlight')
  }

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
  }
}
