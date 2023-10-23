import React from 'react';

export const CreacionesContext = React.createContext();

const CreacionesProvider = (props) => {
    const [creaciones, setCreaciones] = React.useState([{
        id: 1,
        nombre: 'Tu biblioteca',
        descripcion: 'Constaba de una página progrmada prinicpalmente con c#, la cual aparecian distintos libros cargados en una base de datos. En la pagína te podías logear o crear una cuenta, además de guardar tus libros favoritos, agregar libros, agregra personajes, poner reseñas, etc.',
        leguaje: 'c#',
        fecha: 'Fines de 2022',
        respositorio: 'https://github.com/sofygb/TP09',
        imagen: null
      },
      {
        id: 2,
        nombre: 'Juego Medio Ambiente',
        descripcion: 'Trata de una página que busca consentizar sobre el medio ambiente a través de tres diferentes juegos y un apartado con infomación sobre el tema en cuestión. El primer juego consiste en poner los elementos en el tacho correspondiente, el segundo es un juego de trivia y por ultimo una sopa de letras (pero solo es un ifram de una página).',
        leguaje: 'JS',
        fecha: 'Septiembre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Juego_Medio_Ambiente',
        imagen: null
      },
      {
        id: 3,
        nombre: 'Challenge React Native',
        descripcion: 'La cosigna fue sacada de un challenge, esta consestia en hacer una app la cual tenía que tener un login (que se verificaba a través de una app) y luego se debia poner en la pantalla prinicpal distintas resetas porporcionadas por una api y luego hacer un buscador de estas recetas, entre otras cosas.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Challenge-React-Native',
        imagen: null
      },
      {
        id: 4,
        nombre: 'Flags Handling',
        descripcion: 'Un juego en el que debías adivinar la bandera',
        leguaje: 'JS',
        fecha: 'Junio 2023',
        respositorio: 'https://github.com/santiagokasses/Flagle',
        imagen: null
      },
      {
        id: 5,
        nombre: 'Buscador de Peliculas',
        descripcion: 'Es una página en la cual podes buscar productos de una api, se llama buscador de peliculas porque originalmnete iba a ser una api de peliculas.',
        leguaje: 'JS',
        fecha: 'Abril 2023',
        respositorio: 'https://github.com/santiagokasses/Buscador-de-peliculas',
        imagen: null
      },
      {
        id: 6,
        nombre: 'Portfolio',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Portfolio_Camila_Lopez',
        imagen: null
      },
      {
        id: 7,
        nombre: 'Lapiz',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Portfolio_Camila_Lopez',
        imagen: null
      },
      {
        id: 8,
        nombre: 'Puerta',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Portfolio_Camila_Lopez',
        imagen: null
      },
      {
        id: 9,
        nombre: 'Gato',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Portfolio_Camila_Lopez',
        imagen: null
      },
      {
        id: 10,
        nombre: 'Dios',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Portfolio_Camila_Lopez',
        imagen: null
      },
      {
        id: 11,
        nombre: 'Tu bibliteca',
        descripcion: 'Constaba de una página progrmada prinicpalmente con c#, la cual aparecian distintos libros cargados en una base de datos. En la pagína te podías logear o crear una cuenta, además de guardar tus libros favoritos, agregar libros, agregra personajes, poner reseñas, etc.',
        leguaje: 'c#',
        fecha: 'Fines de 2022',
        respositorio: 'https://github.com/sofygb/TP09',
        imagen: null
      },
      {
        id: 12,
        nombre: 'Juego Medio Ambiente',
        descripcion: 'Trata de una página que busca consentizar sobre el medio ambiente a través de tres diferentes juegos y un apartado con infomación sobre el tema en cuestión. El primer juego consiste en poner los elementos en el tacho correspondiente, el segundo es un juego de trivia y por ultimo una sopa de letras (pero solo es un ifram de una página).',
        leguaje: 'JS',
        fecha: 'Septiembre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Juego_Medio_Ambiente',
        imagen: null
      },
      {
        id: 13,
        nombre: 'Challenge React Native',
        descripcion: 'La cosigna fue sacada de un challenge, esta consestia en hacer una app la cual tenía que tener un login (que se verificaba a través de una app) y luego se debia poner en la pantalla prinicpal distintas resetas porporcionadas por una api y luego hacer un buscador de estas recetas, entre otras cosas.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Challenge-React-Native',
        imagen: null
      },
      {
        id: 14,
        nombre: 'Flags Handling',
        descripcion: 'Un juego en el que debías adivinar la bandera',
        leguaje: 'JS',
        fecha: 'Junio 2023',
        respositorio: 'https://github.com/santiagokasses/Flagle',
        imagen: null
      },
      {
        id: 15,
        nombre: 'Buscador de Peliculas',
        descripcion: 'Es una página en la cual podes buscar productos de una api, se llama buscador de peliculas porque originalmnete iba a ser una api de peliculas.',
        leguaje: 'JS',
        fecha: 'Abril 2023',
        respositorio: 'https://github.com/santiagokasses/Buscador-de-peliculas',
        imagen: null
      },
      {
        id: 16,
        nombre: 'Portfolio',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Portfolio_Camila_Lopez',
        imagen: null
      },
      {
        id: 17,
        nombre: 'Lapiz',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Portfolio_Camila_Lopez',
        imagen: null
      },
      {
        id: 18,
        nombre: 'Puerta',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Portfolio_Camila_Lopez',
        imagen: null
      },
      {
        id: 19,
        nombre: 'Gato',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Portfolio_Camila_Lopez',
        imagen: null
      },
      {
        id: 20,
        nombre: 'Dios',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/CamilaAylenLopez/Portfolio_Camila_Lopez',
        imagen: null
      },
    ])

    return <CreacionesContext.Provider value={{creaciones, setCreaciones}}>{props.children}</CreacionesContext.Provider>
}

export default CreacionesProvider;