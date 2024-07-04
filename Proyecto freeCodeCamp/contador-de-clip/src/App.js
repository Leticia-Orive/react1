
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  //Ya tengo mi hook de estado ahora vamos a usarlo
   const [numClics, setNumClics] = useState(0);

  //Introduciomos algo de interactividad
  //Primero escribimos const
  //luego definimos una funcion flecha
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' /> 
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClics={numClics} />
        <Boton 
          texto='Clic' 
          csBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar' 
          csBotonDeClic={false}
          manejarClic={reiniciarContador}
        />

      </div>
    </div >
  );
}

export default App;
