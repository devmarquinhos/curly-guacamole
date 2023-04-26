import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {
  const nome = 'Matheus'


  return (
    <div className="App">
      <h1>Testando o CSS</h1>
      <Frase/>
      <Frase/>
      <Frase/>
      <SayMyName name="Marcos"/>
      <SayMyName name={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  )
}

export default App
