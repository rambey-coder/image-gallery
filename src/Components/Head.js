import React, { useState } from 'react'
import './Head.css'

const Head = () => {
    const [search, setSearch] = useState('')
  return (
    <div className='head-container'>
        <div className='content-container'>
            <h1>Unsplash</h1>
            <p>The internet’s source of freely-usable images.</p>
            <p>Powered by creators everywhere.</p>
            <div className='search-input'>
                <img src='./Assets/search.svg' alt='search' className='search-icon' />
                <input type='search' placeholder='Search for photos'/>
            </div>
        </div>
    </div>
  )
}

export default Head