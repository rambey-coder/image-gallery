import React from 'react'
import './Images.css'

const Images = ({ url, key, alt, name, blur, port}) => {
  console.log(alt);
  return (
    <div className='img-container'>
        <img src={url} keys={key} alt={alt} blur={blur} port={port} className='image-self'/>
        <p>{name}</p>
    </div>
  )
}

export default Images