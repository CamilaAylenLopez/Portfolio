import React from 'react'
import { useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext"
import { CreacionesContext } from "../Context/CreacionesContext"

const Favoritos = (props) => {
    const { creaciones} = useContext(CreacionesContext)
    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const estaEnFavoritos = favoritos.some((element) => element.id === props.id)

    const accionBoton = async () => {
        if (estaEnFavoritos) {
            const indice = favoritos.findIndex((element) => (element.id) === props.id)
            console.log(indice)
            const nuev = [...favoritos]
            nuev.splice(indice, 1)
            setFavoritos(nuev)
        }
        else{
            setFavoritos((favoritos) => [...favoritos, creaciones[props.id - 1]])
        }
    }
    

    return (
        <div>
            <button onClick={accionBoton}>{estaEnFavoritos ? 'Eliminar de favoritos' : 'Agregar a favoritos'}</button>
        </div>
    )
}

export default Favoritos