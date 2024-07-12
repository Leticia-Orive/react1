
import PropTypes from 'prop-types';
export function Route ({ path, Component}) {
    console.log(`La ruta de esta página es: ${path}`);
    console.log(`El componente de esta página es: ${Component}`);
    return null
  }
  Route.propTypes = {
    path: PropTypes.string.isRequired, // Define PropTypes para path
    Component: PropTypes.elementType.isRequired, // PropTypes para Component, asegura que sea un componente válido
  };