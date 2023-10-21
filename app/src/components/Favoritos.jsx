import './Home.css'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext";

const Favoritos = (props) => {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);
  const eliminarFavoritos = (id) => {
    console.log('Eliminar id:', id)
  }
  console.log('favoritos tiene: ',favoritos)
  return (
    <div className='margengrande'>
      <h1 className='blando'>HOLA MUNDO</h1>
      {favoritos.length > 1 ? ( favoritos.map((favoritos) => 
            <section className='creacion' key={favoritos.id}>
                <p>{favoritos.id}</p>
                <p>{favoritos.nombre}</p>
                <p>{favoritos.descripcion}</p>
                <p>{favoritos.leguaje}</p>
                <p>{favoritos.fecha}</p>
                <p>{favoritos.respositorio}</p>
                <button onClick={() => eliminarFavoritos(favoritos.id)}>Eliminar de favoritos</button>
            </section>
        )) : 
        <>
        <section className='creacion'>
                <p>{favoritos.id}</p>
                <p>{favoritos.nombre}</p>
                <p>{favoritos.descripcion}</p>
                <p>{favoritos.leguaje}</p>
                <p>{favoritos.fecha}</p>
                <p>{favoritos.respositorio}</p>
                <button onClick={() => eliminarFavoritos(favoritos.id)}>Eliminar de favoritos</button>
            </section>
        </>}
    </div>
  )
}

export default Favoritos