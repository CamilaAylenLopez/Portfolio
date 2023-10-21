import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext";
import { CreacionesContext } from "../Context/CreacionesContext";

const Favoritos = (props) => {
    const { creaciones, setCreaciones } = useContext(CreacionesContext)
    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const [texto, setTexto] = useState('Agregar a favoritos')

    const indice = favoritos.findIndex((element) => element.id.props === favoritos.id);
    if (indice !== -1) {
        favoritos.splice(indice, 1);
        setTexto('Eliminar de favoritos')
    }
    else{
        setFavoritos((favoritos) => [...favoritos, creaciones[props.id - 1]])
    }

    return (
        <div>
            <button>{texto}</button>
        </div>
    )
}

export default Favoritos