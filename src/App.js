import React, {useState, useEffect} from 'react'
import './App.css';
import Images from './Components/Images'
import axios from 'axios'

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.unsplash.com/photos/random?client_id=rsP6VfEbE6qNglBOLFV4N0P8-UZCat5ESy7C-R7kEXs&count=20')

    .then (res => {
      setImages(res.data);
    })

    .catch(err => alert('error in loading content try again in 30mins'))
  },[]);


  const [search, setSearch] = useState('')

  useEffect(() => {
  
    axios 
    .get(`https://api.unsplash.com/search/photos?client_id=rsP6VfEbE6qNglBOLFV4N0P8-UZCat5ESy7C-R7kEXs&page=1&query=${search}`)
    .then(res => {
      setImages(res.data.results);
    })
  }, [search])

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
      {
        images
        .map(img => {
       return ( 
          <Images 
          url={img.urls.regular} 
          keys={img.id} 
          alt={img.alt_description}
          blur={img.blur_hash} />
       )
      })}
      </div>
    </div>
  );
}

export default App;
