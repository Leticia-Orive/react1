import React from 'react';
import '../hojas-de-estilos/Boton.css';
//sintaxis destrucion
function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        //operador ternario
        //Logica de nuestro boton
        <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} onClick={manejarClic}>
            {texto}
        </button>
    );

}
export default Boton;