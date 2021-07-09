import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect(() => {
    console.log("in useEffect");
    fetchImages();
    updateLikes();
  }, []);

  const [GalleryList, setGalleryList] = useState([]);

  const fetchImages = () => {   
    console.log('Inside GET'); 
    axios.get('/')
      .then(response => {
        console.log('images have been retrieved', response);
        setGalleryList(response.data);
      })
      .catch(error => {
        console.log('images could not be retrieved', error);
      });

  }

  // if we are having issues connecting try both /like/:id or '/' - 
  const updateLikes = () => {
    console.log('Inside PUT', );
    axios.put('/like/:id')
    .then(response => {
      console.log('Like is updated through PUT', response);
    }).catch(error => {
      console.log('Like could not be updated', error);
    })
  }

    



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Life of a Coder</h1>
        </header>
        <p>The Coding Gallery of Truth.</p>
      <img src="images/babyarray.png" width="250" height="250"/>
      </div>
    );
}

export default App;
