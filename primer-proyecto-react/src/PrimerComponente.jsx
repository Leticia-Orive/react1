
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

//creamos un componente rafc y lo exportamos


export const PrimerComponente = () => {
  return (
    <h1>Hola Mundo !</h1>
  )
}
