interface ChildInputDecoratorProps {
  onClick: () => void
}

function ChildInputDecorator({ onClick }: ChildInputDecoratorProps) {
  return (
    <section className="parent-callback-child">
      <h4>Child component</h4>
      <button type="button" onClick={onClick}>
        Call parent method
      </button>
    </section>
  )
}

export default ChildInputDecorator
