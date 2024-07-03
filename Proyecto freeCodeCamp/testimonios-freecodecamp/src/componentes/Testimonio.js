//Importamos react
import React from 'react';
//Importamos el archivo css
import '../hojas-de-estilos/Testimonio.css';

//Creamos un componente funcional Testimonio texto fijo
/*function Testimonio() {
  //Vamos a definir la estructura del componente
  return (
    //Describir la estructura del componente
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require('../imagenes/testimonio-emma.jpg')}
        alt='Foto de Emma'/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Emma Bostion en Suecia</p>
          <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
          <p className='texto-testimonio'>"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
        </div>
    </div>
    
  );
}*/
//Ahora vamos a crear un componente funcional Testimonio con props para poder reutizarlo.
//Creamos un componente funcional Testimonio con props
function Testimonio(props) {
  //Vamos a definir la estructura del componente
  return (
    //Describir la estructura del componente
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt='Foto de Emma' />
        <div className='contenedor-texto-testimonio'>
          
          <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
          <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong> </p>
          <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
    </div>
    
  );
}
//exportacion por defecto del componente Testimonio solo podemos tener una exportacion por defecto
export default Testimonio;

//Exportacion nombrada del componente Testimonio podemos tener varias exportaciones nombradas
/*export function Testimonio() { } sale un error en consola
para solucionar el error tengo que ir a app.js y meter la importatacion de testimonio entre {}*/ 
