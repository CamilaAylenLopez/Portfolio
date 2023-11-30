
import React from "react"
import { useEffect } from 'react'

const InfoMia = () => {

  useEffect(() => {
    document.title = `Información sobre mi`
  }, [])

  return (
    <div>
      <h1 className='margengrande'>Camila Aylen Lopez</h1>
      <h1 className=''>Graduada de ORT</h1>
      <h1 className=''>2023</h1>
    </div>
  )
}

export default InfoMia