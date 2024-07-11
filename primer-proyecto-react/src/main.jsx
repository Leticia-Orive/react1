import React from 'react'
import ReactDOM from 'react-dom/client'
import {PrimerComponente } from './PrimerComponente'
import './styles.css'

//Si pongo subtitulo = '4' me lo toma como un string y no como un número

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <PrimerComponente titulo="Esta sección es de props" />
    
  </React.StrictMode>,
)
