import './App.css'

function App() {
  const nome = 'Marcos'
  const newNome = nome.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  function soma(a, b){
    return a + b
  }

  return (
    <div className="App">
      <h2>Olá React!</h2>
      <p>Olá {nome}! Seu nome em maiúsculo: {newNome}</p>
      <p>Soma: {soma(2, 2)}</p>
      <p><img src={url} alt="Placeholder 150x150" /></p>
    </div>
  )
}

export default App
