const inputClick = () => {
  alert('Input clicked!')
}

const mouseEnter = () => {
  console.log('Mouse entered!')
}

const placeholder = 'Enter your name !'
const heading = 'Hello, React !'
const a = 10
const b = 5

function ExampleSection() {
  return (
    <section>
      <h1>{heading}</h1>
      <input
        placeholder={placeholder}
        onClick={inputClick}
        onMouseEnter={mouseEnter}
      />
      <p>{a > b ? 'a is greater than b' : 'a is not greater than b'}</p>
    </section>
  )
}

export default ExampleSection
