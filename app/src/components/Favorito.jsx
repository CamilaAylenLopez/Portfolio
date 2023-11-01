import React, { useState } from 'react'
import './Home.css'
import { useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext"
import { CreacionesContext } from "../Context/CreacionesContext"
import { UsuarioContext } from "../Context/UsuarioContext"
import Modal from 'react-bootstrap/Modal'

const Favoritos = (props) => {
    const { creaciones } = useContext(CreacionesContext)
    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const estaEnFavoritos = favoritos.some((element) => element.id === props.id)
    const { usuario, setUsuario } = useContext(CreacionesContext)
    const { contraseña, setContraseña} = useContext(CreacionesContext)
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false);

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
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicie sesion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column text-center">
                        <form>
                            <div className="form-group">
                                <input value={usuario} type="email" className="form-control" id="email1" placeholder="Your email address..." />
                            </div>
                            <div className="form-group">
                                <input value={contraseña} type="password" className="form-control" id="password1" placeholder="Your password..." />
                            </div>
                            <button type="button" className="btn btn-info btn-block btn-round" onClick={handleClose}>Login</button>
                        </form>

                        <div className="text-center text-muted delimiter">or use a social network</div>
                        <div className="d-flex justify-content-center social-buttons">
                            <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                                <i className="fab fa-facebook"></i>
                            </button>
                            <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
                                <i className="fab fa-linkedin"></i>
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div>
                <button className='estiloBoton' onClick={accionBoton}>{estaEnFavoritos ? 'Eliminar de favoritos' : 'Agregar a favoritos'}</button>
            </div>
            {/* {showModal && (
                <div className="modal">
                    <div className="container">
                        <button type="button" className="btn btn-info btn-round" data-toggle="modal" data-target="#loginModal">
                            Login
                        </button>
                    </div>

                    <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header border-bottom-0">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-title text-center">
                                        <h4>Login</h4>
                                    </div>
                                    <div className="d-flex flex-column text-center">
                                        <form>
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="email1" placeholder="Your email address..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="password1" placeholder="Your password..." />
                                            </div>
                                            <button type="button" className="btn btn-info btn-block btn-round">Login</button>
                                        </form>

                                        <div className="text-center text-muted delimiter">or use a social network</div>
                                        <div className="d-flex justify-content-center social-buttons">
                                            <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                <i className="fab fa-facebook"></i>
                                            </button>
                                            <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
                                                <i className="fab fa-linkedin"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <div className="signup-section">Not a member yet? <a href="#a" className="text-info"> Sign Up</a>.</div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default Favoritos