import { useEffect } from 'react'
import PropTypes from 'prop-types';
export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])

  return (
    <h1>Has buscado {routeParams.query}</h1>
  )
}
SearchPage.propTypes = {
    routeParams: PropTypes.shape({
      query: PropTypes.string.isRequired
    }).isRequired
  };