import './Home.css'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext"
import Favorito from './Favorito'

const Favoritos = (props) => {
  const { favoritos, setFavoritos } = useContext(FavoritosContext)

  console.log('favoritos tiene: ', favoritos)

  return (
    <div className='margengrande bottom'>
      {favoritos.length > 1 ? (
        favoritos.map((favoritos) =>
          <section className='creacion' key={favoritos.id}>
            <div className='espacioCreacion rowHome'>
              <div className='col-4'>
                <p>● Proyecto {favoritos.id}</p>
                <p className='tituloProyecto'><b>{favoritos.nombre}</b></p>
                <p>{favoritos.descripcion}</p>
                <p>Lenguaje: {favoritos.leguaje}</p>
                <p>{favoritos.fecha}</p>
                <a className='linkRepositorio' href={favoritos.respositorio}>{favoritos.respositorio}</a>
                <Favorito id={favoritos.id} />
              </div>
              <div>
                <img className='imagen' src={favoritos.imagen ? favoritos.imagen : 'https://www.ciudaddemascotas.com/pub/media/wysiwyg/BlogImages/Junio2016/gato-feliz.jpg'} />
              </div>
            </div>
          </section>
        )) : favoritos.length === 1 ? (
          <>
            <section className='creacion'>
              <div className='espacioCreacion rowHome'>
                <div className='col-4'>
                  <p>● Proyecto {favoritos[0].id}</p>
                  <p className='tituloProyecto'><b>{favoritos[0].nombre}</b></p>
                  <p>{favoritos[0].descripcion}</p>
                  <p>Lenguaje: {favoritos[0].leguaje}</p>
                  <p>{favoritos[0].fecha}</p>
                  <a className='linkRepositorio' href={favoritos[0].respositorio}>{favoritos[0].respositorio}</a>
                  <Favorito id={favoritos[0].id} />
                </div>
                <div>
                  <img className='imagen' src={favoritos[0].imagen ? favoritos[0].imagen : 'https://www.ciudaddemascotas.com/pub/media/wysiwyg/BlogImages/Junio2016/gato-feliz.jpg'} />
                </div>
              </div>
            </section>
          </>) : (
        <><h1>No hay elementos todavía</h1></>
      )
      }
    </div>
  )
}

export default Favoritos