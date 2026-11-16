import { useState } from 'react'
import ChildOutput from './ChildOutput'
import type { ChildOutputData } from '../../../000_models/ChildOutput.model'

function OutputParentPage() {
  const [receivedData, setReceivedData] = useState<ChildOutputData | null>(null)

  function handleSend(data: ChildOutputData) {
    setReceivedData(data)
  }

  return (
    <section className="page-card">
      <h2>Child-to-parent communication</h2>

      <ChildOutput onSend={handleSend} />

      <p aria-live="polite">
        Parent state:
        {receivedData && ` ${receivedData.userId}: ${receivedData.message}`}
        {!receivedData && ' Nothing received yet.'}
      </p>
    </section>
  )
}

export default OutputParentPage
