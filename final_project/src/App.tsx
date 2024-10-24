import './App.css'
import Counter from './components/Counter'
import { Welcome } from './components/Welcome'

const App = () => {

  return (
    <>
      <Counter />
      <Welcome name="Ahoj" age={32}>
        <div>This is children</div>
      </Welcome>
    </>
  )
}

export default App
