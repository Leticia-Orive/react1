
import './App.css';
import freecodecampLogo from './imagenes/freecodecamp-logo.jpg';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='aplicacion-tareas'>
        <div className='freecodecamp-logo-contenedor'>
          <img src={freecodecampLogo} className='freecodecamp-logo' alt='logo' />
        </div>
        
      </div>
      <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
    </div>
  );
}

export default App;
