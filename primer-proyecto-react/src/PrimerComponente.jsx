

//creamos un componente de clase y lo exportamos esto ya no se lleva porque ahora se usan los hooks
/*
class PrimerComponente extends Component {
    state = {  } 
    render() { 
        return (
            <h1>Hola Mundo!</h1>
        );
    }
}
 
export default PrimerComponente;*/
//creamos un componente funcional y lo exportamos
/*
    function PrimerComponente() {
        return ( <h1>Hola Mundo!</h1> );
    }

    export default PrimerComponente;*/
//Creamos variables
const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Youtube', 4, 100000]
const boolean = true
const funcion = () => 1+1
const objeto = {nombre: 'Leticia', edad: 30}
const fecha = new Date()

//creamos un componente rafc y lo exportamos
export const PrimerComponente = () => {
  return (
    //Para ver como se ejecutan nuestras variables con js
    
    <>
        <h1>Variables en JSX</h1>
        <h4>Variable tipo String:</h4> <p>{string}</p>
        <h4>Variable tipo Number:</h4> <p>{number}</p>
        <h4>Variable tipo Array:</h4> <p>{array}</p>
        <h4>Variable tipo Boolean:</h4> <p>{boolean}</p>
        <h4>Variable tipo Funcion:</h4> <p>{funcion()}</p>
        
    </>
    
   
  )
}
