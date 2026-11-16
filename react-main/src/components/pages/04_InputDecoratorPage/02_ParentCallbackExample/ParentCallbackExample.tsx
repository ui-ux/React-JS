import ChildInputDecorator from './ChildInputDecorator'

function ParentCallbackExample() {
  function handleClick() {
    alert('Hello from Parent!')
  }

  return (
    <section className="input-decorator-example">
      <h3>Calling a parent function from a child</h3>
      <p>The parent passes a callback prop to the child component.</p>
      <ChildInputDecorator onClick={handleClick} />
    </section>
  )
}

export default ParentCallbackExample
