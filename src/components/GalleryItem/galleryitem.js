import React from "react";

function GalleryItem(props) {
  const [counter, setCounter] = useState(0);
  const [imgOrDes, setImgOrDes] = useState("false");


  // This has to use the counter useState above ti display counter below like button.
  const handleLikeClick = (evt) => {
    evt.preventDefault();
  };

  const handleImageClick = (evt) => {
    evt.preventDefault();
  };
  // set a status??
  // let displayItem = (imgOrDes == true) ? run this if true : run this if false:
  // maybe <p>prop.something.description</p> then <img prop.something.path/>

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
