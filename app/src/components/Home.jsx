import './Home.css'
import React from 'react'
import { useState, useEffect, useContext } from 'react';
import Titulo from './Titulo'
import Favorito from './Favorito';
import { FavoritosContext } from "../Context/FavoritosContext";
import { CreacionesContext } from "../Context/CreacionesContext";

const Home = (props) => {
    const { setFavoritos } = useContext(FavoritosContext);
    const { creaciones, setCreaciones  } = useContext(CreacionesContext)

    const agregarFavoritos = (id) => {
        setFavoritos((favoritos) => [...favoritos, creaciones[id - 1]])
    }

  return (
    <div>
        <section>
            <Titulo/>
        </section>
        {creaciones.slice(0, 6).map((creaciones) => 
            <section className='creacion' key={creaciones.id}>
                <p>{creaciones.id}</p>
                <p>{creaciones.nombre}</p>
                <p>{creaciones.descripcion}</p>
                <p>{creaciones.leguaje}</p>
                <p>{creaciones.fecha}</p>
                <p>{creaciones.respositorio}</p>
                <Favorito id={creaciones.id}/>
            </section>
        )}
    </div>
  )
}

export default Home