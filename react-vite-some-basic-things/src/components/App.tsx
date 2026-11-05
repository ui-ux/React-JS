import './App.css'
import Header from './Header/Header.tsx'
import Images from './Images/Images.tsx'
import ExampleSection from './ExampleSection/ExampleSection.tsx'
import viteSvg from '../assets/img/vite.svg'
import States from './States/States.tsx'
import UseEffectComponent from './UseEffect/UseEffect.tsx'
import UseRef from './UseRef/UseRef.tsx'

function App() {
  return (
    <div className="container">
      <Header title="Title Header" />
      <hr />
      <Images src={viteSvg} alt="Description" width={60} height={40} />
      <hr />
      <ExampleSection />
      <hr />
      <States />
      <hr />
      <UseEffectComponent nameButton="Click Me" />
      <hr />
      <UseRef />
    </div>
  )
}

export default App
