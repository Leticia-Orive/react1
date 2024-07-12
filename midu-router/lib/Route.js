import PropTypes from 'prop-types';
export function Route({path,Component}){
    console.log(`La ruta de esta página es: ${path}`);
    console.log(`El componente de esta página es: ${Component}`);
    return null
}
Route.propTypes = {
    path: PropTypes.string.isRequired,
    Component: PropTypes.elementType.isRequired,}