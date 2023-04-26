import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const nome = 'Matheus'


  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name="Marcos"/>
      <SayMyName name={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  )
}

export default App
