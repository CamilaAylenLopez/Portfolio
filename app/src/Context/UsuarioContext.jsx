import React from 'react';

export const UsuarioContext = React.createContext();

const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = React.useState(JSON.parse(sessionStorage.getItem('usuario')) || []);
    const [contraseña, setContraseña] = React.useState(JSON.parse(sessionStorage.getItem('contraseña')) || []);

    
    React.useEffect(()=>{
        sessionStorage.setItem('usuario', JSON.stringify(usuario))
        sessionStorage.setItem('contraseña', JSON.stringify(contraseña))
    }, [usuario, contraseña])

    return <UsuarioContext.Provider value={{usuario, setUsuario, contraseña, setContraseña}}>{props.children}</UsuarioContext.Provider>
}

export default UsuarioProvider;