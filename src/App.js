import React, {useState, useEffect} from 'react'
import './App.css';
// import Head from './Components/Head'
import Images from './Components/Images'
// import Placeholder from './Components/Placeholder'
import axios from 'axios'

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.unsplash.com/photos/random?client_id=rsP6VfEbE6qNglBOLFV4N0P8-UZCat5ESy7C-R7kEXs&count=20')

    .then (res => {
      setImages(res.data);
    })

    // .catch(err => alert('error in loading content'))
  },[]);

  const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

  return (
    <div className="App">
      
      <div className='head-container'>
        <div className='content-container'>
            <h1>Unsplash</h1>
            <p>The internet’s source of freely-usable images.</p>
            <p>Powered by creators everywhere.</p>
            <div className='search-input'>
                <img src='./Assets/search.svg' alt='search' className='search-icon' />
                <input type='search' placeholder='Search for photos' onChange={handleChange}/>
            </div>
        </div>
    </div>
      
      <div className='general-container'>
      {images.map(img => {
       return ( 
          <Images url={img.urls.thumb} key={img.id} alt={images.alt_description} />
       )
      })}
      </div>
    </div>
  );
}

export default App;
