import React from "react";
import { useState } from "react";
import './galleryitem.css'

function GalleryItem({imgToShow, theLikes}) {
  //   const [counter, setCounter] = useState(0); - MIGHT not need because put router already is doing +=1
  const [imgOrDes, setImgOrDes] = useState(true);

let displayItem; // going have to try to see what we can set this to so it work!

  const handleImageClick = (evt) => {
    // evt.preventDefault();
   console.log('inside handleImageClick');
    setImgOrDes(!imgOrDes);
  }    

  return (
    <section>
      <div className="gallery-items" onClick={() => handleImageClick(imgToShow.id)}>
        <div className="item-detail">
        {imgOrDes && <img src={imgToShow.path} />}
        {!imgOrDes && <p>{imgToShow.description}</p>}
        </div>
      </div>
      <div>
        <button className="like-button" onClick={() => theLikes(imgToShow.id)}>LIKE: {imgToShow.likes}</button>
     </div>
    </section>
  );
}

export default GalleryItem;
