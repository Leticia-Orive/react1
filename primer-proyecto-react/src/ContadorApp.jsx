function manejarClick(event) {
    console.log(event)}


//Voy hacer una funcion anonima  <button onClick={function () {console.log('Soy un boton')}}>
//Esta es una forma de poner el boton
/**
 * <button onClick={(event) => manejarClick(event)}>
        Soy un botón
     </button>
 * 
 */
//Pero la mas comun es:
/**
 * <button onClick={manejarClick}>
        Soy un botón
     </button>
 */
//Pero si hay dos eventos se pone asi:
/**
 * <button onClick= {(event) => manejarClick(event, 'Otro Argumento')}>
        Soy un botón
     </button>
 */

export const ContadorApp = (value) => {
    
  return (
    <>
    <h1>Contador:</h1>
    <p>{value}</p>
    <button onClick={manejarClick}>
        Soy un botón
     </button>

    </>
  );
}