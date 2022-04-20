import React from 'react'

const Images = ({ url, key, alt}) => {
  return (
    <div className='img-container'>
        <img src={url} key={key} alt={alt} />
    </div>
  )
}

export default Images