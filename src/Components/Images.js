import React, { useState } from 'react'
import './Images.css'


const Images = ({ url, key, alt, blur, port }) => {
 
  return (
    <div className='img-container'>
        <img src={url} key={key} alt={alt} blur={blur} port={port} className='image-self'/>
    </div>
  )
}

export default Images