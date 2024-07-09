//Importamos react
import React from 'react';
//Importamos el archivo css
import '../hojas-de-estilos/Testimonio.css';

class Testimonio extends React.Component {
  //Vamos a definir la estructura del componente
  render() {
    //Describir la estructura del componente
    return (
      //Describir la estructura del componente
      //para poder usar las propiedades del componente Testimonio usamos this.props
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require(`../imagenes/testimonio-${this.props.imagen}.jpg`)}
          alt={`Foto de ${this.props.nombre}`} />
          <div className='contenedor-texto-testimonio'>
            
            <p className='nombre-testimonio'><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
            <p className='cargo-testimonio'>{this.props.cargo} en <strong>{this.props.empresa}</strong> </p>
            <p className='texto-testimonio'>"{this.props.testimonio}"</p>
          </div>
      </div>
      
    );
    }
    }

//exportacion por defecto del componente Testimonio solo podemos tener una exportacion por defecto
export default Testimonio;


