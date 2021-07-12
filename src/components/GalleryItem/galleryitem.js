import React from "react";
import { useState } from "react";

function GalleryItem({imgToShow, theLikes}) {
  //   const [counter, setCounter] = useState(0); - MIGHT not need because put router already is doing +=1
  const [imgOrDes, setImgOrDes] = useState(true);

  // This has to use the counter useState above ti display counter below like button.
  const handleLikeClick = (evt) => {
    evt.preventDefault();
    theLikes(imgToShow);
  };

let displayItem; // going have to try to see what we can set this to so it work!

  const handleImageClick = (evt) => {
    evt.preventDefault();
   console.log('inside handleImageClick');
    setImgOrDes(!imgOrDes);
  }    

//     let displayItem;
//     imgOrDes === !imgOrDes ? (
//         <img src={imgToShow.path} />
//       ) : (
//         <p>{imgToShow.description}</p>
//       );
//       console.log(displayItem);
//   };

  return (
    <section>
      <div onClick={() => handleImageClick(imgToShow.id)}>
        {imgOrDes && <img src={imgToShow.path} />}
        {!imgOrDes && <p>{imgToShow.description}</p>}
      </div>
      <div><button onClick={handleLikeClick}>LIKE</button></div>
      {/* <div>{counter}</div> */}
    </section>
  );
}

export default GalleryItem;
