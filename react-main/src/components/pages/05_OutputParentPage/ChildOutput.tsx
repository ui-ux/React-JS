import type { ChildOutputData } from '../../../000_models/ChildOutput.model'

interface ChildOutputProps {
  onSend: (data: ChildOutputData) => void
}

function ChildOutput({ onSend }: ChildOutputProps) {
  function handleClick() {
    onSend({
      message: 'Hello from the child!',
      userId: 123,
    })
  }

  return (
    <button type="button" onClick={handleClick}>
      Send message to parent
    </button>
  )
}

export default ChildOutput
