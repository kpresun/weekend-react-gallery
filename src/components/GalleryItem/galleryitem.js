import React from "react";

function GalleryItem(props) {

  const [counter, setCounter] = useState(0);
  const [imgOrDes, setImgOrDes] = useState("false");

  // this probably belongs here because 'like' exist in the array.
  const handleLikeClick = (evt) => {
    evt.preventDefault();
  };

  const handleImageClick = (evt) => {
    evt.preventDefault();
// set a status??
// let thingToShow = (imgOrDes == true) ? run this if true : run this if false:

  return (

  )


}

export default GalleryItem;