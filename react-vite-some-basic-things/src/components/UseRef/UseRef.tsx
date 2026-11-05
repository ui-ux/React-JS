import { useEffect, useRef, useState } from 'react'

function FocusInputExample() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <section>
      <h3>Focus Input</h3>
      <input ref={inputRef} placeholder="Click the button to focus the input" />
      <div>
        <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
      </div>
    </section>
  )
}

function ScrollExample() {
  const targetRef = useRef<HTMLParagraphElement>(null)

  return (
    <section>
      <h3>Scroll to Element</h3>
      <button onClick={() => targetRef.current?.scrollIntoView({ behavior: 'smooth' })}>
        Scroll to Text
      </button>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <p ref={targetRef}>Target text for scrolling.</p>
    </section>
  )
}

function MeasureElementExample() {
  const boxRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number | null>(null)

  const measureWidth = () => {
    if (boxRef.current) {
      setWidth(boxRef.current.getBoundingClientRect().width)
    }
  }

  return (
    <section>
      <h3>Measuring DOM Element</h3>
      <div ref={boxRef} style={{ width: 200, padding: 10, border: '1px solid' }}>
        Element to measure
      </div>
      <button onClick={measureWidth}>Measure Width</button>
      <div>
        {width !== null && <p>Width: {width} px</p>}
      </div>
    </section>
  )
}

function PreviousValueExample() {
  const [value, setValue] = useState(0)
  const previousValueRef = useRef<number | null>(null)

  useEffect(() => {
    previousValueRef.current = value
  }, [value])

  return (
    <section>
      <h3>Keeping Previous Value</h3>
      <p>Previous: {previousValueRef.current ?? 'still no value'}</p>
      <p>Current: {value}</p>
      <button onClick={() => setValue((current) => current + 1)}>
        Increase Value
      </button>
    </section>
  )
}

function IntervalExample() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const startTimer = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setSeconds((current) => current + 1)
      }, 1000)
    }
  }

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  return (
    <section>
      <h3>Keeping Interval ID</h3>
      <p>Timer: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </section>
  )
}

function TimeoutExample() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [message, setMessage] = useState('Timer not started')

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const startTimeout = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
    }

    setMessage('Message will appear in 2 seconds')
    timeoutRef.current = setTimeout(() => {
      setMessage('Time is up!')
      timeoutRef.current = null
    }, 10000)
  }

  const cancelTimeout = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
      setMessage('Timer cancelled')
    }
  }

  return (
    <section>
      <h3>Canceling Timer</h3>
      <p>{message}</p>
      <button onClick={startTimeout}>Start Timer</button>
      <button onClick={cancelTimeout}>Cancel</button>
    </section>
  )
}

function MutableValueExample() {
  const clickCountRef = useRef(0)
  const [displayedCount, setDisplayedCount] = useState(0)

  return (
    <section>
      <h3>Mutable Value</h3>
      <p>Stored value: {displayedCount}</p>
      <button onClick={() => { clickCountRef.current += 1 }}>
        Increase value in ref
      </button>
      <button onClick={() => setDisplayedCount(clickCountRef.current)}>
        Show stored value
      </button>
    </section>
  )
}

function PreventDuplicateActionExample() {
  const isSubmittingRef = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [status, setStatus] = useState('Ready to submit')

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const submit = () => {
    if (isSubmittingRef.current) {
      return
    }

    isSubmittingRef.current = true
    setStatus('Submitting...')
    timeoutRef.current = setTimeout(() => {
      isSubmittingRef.current = false
      timeoutRef.current = null
      setStatus('Submission completed')
    }, 1500)
  }

  return (
    <section>
      <h3>Preventing Duplicate Actions</h3>
      <p>{status}</p>
      <button onClick={submit}>Submit (simulation)</button>
    </section>
  )
}

function UseRef() {
  return (
    <div>
      <h2>Examples useRef</h2>
      <FocusInputExample />
      <hr/>
      <ScrollExample />
      <hr/>
      <MeasureElementExample />
      <hr/>
      <PreviousValueExample />
      <hr/>
      <IntervalExample />
      <hr/>
      <TimeoutExample />
      <hr/>
      <MutableValueExample />
      <hr/>
      <PreventDuplicateActionExample />
    </div>
  )
}

export default UseRef
