import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [GalleryList, setGalleryList] = useState([]);

  function fetchImages() {    
    axios.get('/')
      .then(response => {
        console.log('images have been retrieved'. response);
        setGalleryList(response.data);
      })
      .catch(error => {
        console.log('images could not be retrieved', error);
      });

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
