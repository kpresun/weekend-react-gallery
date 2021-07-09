import React from 'react';

function GalleryItem(props) {

    const [counter, setCounter] = useState(0);
    const [imgOrDes, setImgOrDes] = useState('false');

    return (
        <img >{GalleryItem.imgDescription}</img>
    )
}


export default GalleryItem;



// const handleLikeClick = (evt) => {
//     evt.preventDefault();
//   };
//   // this probably belongs here because 'like' exist in the array.

//   const handleImageClick = (evt) => {
//     evt.preventDefault();
// // let a const equal something where when true/false
// // return const equal this/that to return a new append
// //this belongs here because we are either going to send img or description in gallery.data
//   }