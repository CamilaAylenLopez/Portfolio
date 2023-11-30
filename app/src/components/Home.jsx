import './Home.css'
import React from 'react'
import { useEffect, useContext } from 'react'
import Titulo from './Titulo'
import Favorito from './Favorito'
import { CreacionesContext } from "../Context/CreacionesContext"

const Home = () => {
    const { creaciones } = useContext(CreacionesContext)

    useEffect(() => {
        document.title = `Home`
    }, [])

  return (
    <div className='bottom'>
        <section className='centrar'>
            <Titulo/>
        </section>
        {creaciones.slice(0, 6).map((creaciones) => 
            <section className='creacion' key={creaciones.id}>
                <div className='espacioCreacion rowHome'>
                    <div className='col-lg-4 col-md-12 tamanio'>
                        <p>● Proyecto {creaciones.id}</p>
                        <p className='tituloProyecto'><b>{creaciones.nombre}</b></p>
                        <p>{creaciones.descripcion}</p>
                        <p>Lenguaje: {creaciones.leguaje}</p>
                        <p>{creaciones.fecha}</p>
                        <a className='linkRepositorio' href={creaciones.respositorio} target='_blank'>{creaciones.respositorio}</a>
                        <Favorito id={creaciones.id}/>
                    </div>
                    <div className='separacion'>
                        <img className='imagen' src={creaciones.imagen ? creaciones.imagen : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'}/>
                    </div>
                </div>
                
            </section>
        )}
    </div>
  )
}

export default Home