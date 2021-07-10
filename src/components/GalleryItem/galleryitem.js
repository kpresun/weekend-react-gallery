import React from "react";
import { useState } from "react";

function GalleryItem(props) {
  //   const [counter, setCounter] = useState(0); - MIGHT not need because put router already is doing +=1
  const [imgOrDes, setImgOrDes] = useState(false);

  // This has to use the counter useState above ti display counter below like button.
  const handleLikeClick = (evt) => {
    evt.preventDefault();
    theLikes(props.imgToShow);
  };

  const handleImageClick = (evt) => {
    evt.preventDefault();
    let displayItem =
      imgOrDes === !imgOrDes ? (
        <img src={props.imgToShow.path} />
      ) : (
        <p>{props.imgToShow.description}</p>
      );
    //   console.log({props.imgToShow.path});
    //   console.log({props.imgToShow.description});
  };

  return (
    <section>
      <div onClick={handleImageClick}>{displayItem}</div>
      <div>
        <button onClick={handleLikeClick}>LIKE</button>
      </div>
      <div>{counter}</div>
    </section>
  );
}

export default GalleryItem;
