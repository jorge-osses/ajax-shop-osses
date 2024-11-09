import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
  <>
    <NavbarComponent/>
    <ItemListContainer greeting='Bienvenido a la primer entrega'/>
  </>
  )
}

export default App
