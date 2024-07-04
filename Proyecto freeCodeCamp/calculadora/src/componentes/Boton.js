import React from 'react';
import '../hojas-de-estilos/Boton.css';
import { i } from 'mathjs';

function Boton(props){
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }
  //Alternativa condicional{esOperador(props.children) 
  if(esOperador(props.children)){
    return(
      <div className='boton-contenedor operador' onClick={() => props.manejarClic(props.children)}>
          {props.children}
      </div>
  );
  }else{
    return(
      <div className='boton-contenedor ' onClick={() => props.manejarClic(props.children)}>
          {props.children}
      </div>
  );
  }
  /**Esto es otra forma con js puro
    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()} onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
        
    )*/

}
export default Boton;