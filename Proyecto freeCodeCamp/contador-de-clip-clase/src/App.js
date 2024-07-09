
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import React from 'react';
//Para los componentes de clase se importa React y no se necesita los hooks
//Componente de clase
class App extends React.Component {
  //Medodo constructor
  //solo lo definimos si queremos un estado en ele componente o metodos a otros componentes
  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    //estas lineas son importantes para que el metodo manejarClic y reiniciarContador funcione
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }
//Metodo para reiniciar el contador
  manejarClic() {
    //Hay dos formas de hacerlo una es con una funcion flecha y la otra es con bind
    //con funcion flecha DESTRUCTURACION
    this.setState(({ numClics})=> ({ numClics: numClics + 1}));
  };

  reiniciarContador(){
    this.setState({numClics: 0});
  };
  render() {
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
          numClics={this.state.numClics} />
          <Boton 
            texto='Clic' 
            csBotonDeClic={true}
            manejarClic={this.manejarClic}/>
          <Boton 
            texto='Reiniciar' 
            csBotonDeClic={false}
            manejarClic={this.reiniciarContador}
          />
  
        </div>
      </div >
    );
  }
}



export default App;
