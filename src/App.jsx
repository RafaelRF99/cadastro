import './App.css'

import { useState } from 'react'

import Formulario from './components/Formulario'
import Time from './components/Time';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const usuarioAdicionado = (usuario) => {
    setUsuarios([...usuarios, usuario])
    console.log(usuario)
  }

  return (
    <div className="App">
      <Formulario usuarioCadastrado={usuarioAdicionado} />
      <Time usuarios={usuarios}/>
    </div>
  )
}

export default App
