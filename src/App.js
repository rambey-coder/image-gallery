import React, {useState, useEffect} from 'react'
import './App.css';
import Head from './Components/Head'
import Images from './Components/Images'
import Placeholder from './Components/Placeholder'
import axios from 'axios'

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.unsplash.com/photos/random?client_id=rsP6VfEbE6qNglBOLFV4N0P8-UZCat5ESy7C-R7kEXs&count=20')

    .then (res => {
      setImages(res.data);
    })

    .catch(err => alert('error in loading content'))
  },[]);

  return (
    <div className="App">
      
      <Head />
      <Placeholder />
      <div className='general-container'>
      {images.map(img => {
       return ( 
          <Images url={img.urls.thumb} key={img.id} alt={images.alt_description}/>
       )
      })}
      </div>
    </div>
  );
}

export default App;
