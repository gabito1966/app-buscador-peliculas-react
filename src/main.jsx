import React from 'react'
import ReactDOM from 'react-dom/client'
import { BuscadorPeliculas } from './BuscadorPeliculas'
import './styles/movieSearch.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuscadorPeliculas/>
    <div className='container'>
      <h2>by GabrielDev© 2024</h2>
    </div>
  </React.StrictMode>,
)
