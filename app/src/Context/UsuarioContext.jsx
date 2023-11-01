import React from 'react';

export const UsuarioContext = React.createContext();

const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = React.useState(JSON.parse(localStorage.getItem('usuario')) || []);
    
    React.useEffect(()=>{
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }, [usuario])

    return <UsuarioContext.Provider value={{usuario, setUsuario}}>{props.children}</UsuarioContext.Provider>
}

export default UsuarioProvider;