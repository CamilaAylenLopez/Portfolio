import React, { useState } from 'react'
import './Home.css'
import { useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext"
import { CreacionesContext } from "../Context/CreacionesContext"
import { UsuarioContext } from "../Context/UsuarioContext"

const Favoritos = (props) => {
    const { creaciones } = useContext(CreacionesContext)
    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const estaEnFavoritos = favoritos.some((element) => element.id === props.id)
    const { usuario, setUsuario } = useContext(CreacionesContext)
    const [ showModal, setShowModal ] = useState(false)

    const accionBoton = async () => {

        if (usuario != null) {
            if (estaEnFavoritos) {
                const indice = favoritos.findIndex((element) => (element.id) === props.id)
                console.log(indice)
                const nuev = [...favoritos]
                nuev.splice(indice, 1)
                setFavoritos(nuev)
            }
            else {
                setFavoritos((favoritos) => [...favoritos, creaciones[props.id - 1]])
            }
        } else {
            setShowModal(true)
        }

    }


    return (
        <div>

            <div>
                <button className='estiloBoton' onClick={accionBoton}>{estaEnFavoritos ? 'Eliminar de favoritos' : 'Agregar a favoritos'}</button>
            </div>
            {showModal && (
                <div className="modal">
                    <div class="container">
                        <button type="button" class="btn btn-info btn-round" data-toggle="modal" data-target="#loginModal">
                            Login
                        </button>
                    </div>

                    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header border-bottom-0">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-title text-center">
                                        <h4>Login</h4>
                                    </div>
                                    <div class="d-flex flex-column text-center">
                                        <form>
                                            <div class="form-group">
                                                <input type="email" class="form-control" id="email1" placeholder="Your email address..." />
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" id="password1" placeholder="Your password..." />
                                            </div>
                                            <button type="button" class="btn btn-info btn-block btn-round">Login</button>
                                        </form>

                                        <div class="text-center text-muted delimiter">or use a social network</div>
                                        <div class="d-flex justify-content-center social-buttons">
                                            <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                <i class="fab fa-twitter"></i>
                                            </button>
                                            <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                <i class="fab fa-facebook"></i>
                                            </button>
                                            <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
                                                <i class="fab fa-linkedin"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <div class="signup-section">Not a member yet? <a href="#a" class="text-info"> Sign Up</a>.</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Favoritos