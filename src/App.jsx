
import './App.css'
import ReproductorMusic from './views/ReproductorMusic'
import Portada from './views/Portada'
import Frase from './views/Frase'
import CuentaRegresiva from './views/CuentaRegresiva'
import Varios from "./views/Varios"

function App() {
  

  return (
    <>
       <aside className='fondo1 mb-5'>
         <ReproductorMusic></ReproductorMusic>
      <Portada></Portada>
      <Frase></Frase>
      <CuentaRegresiva></CuentaRegresiva>
       </aside>
       <Varios></Varios>

     
      
    </>
  )
}

export default App
