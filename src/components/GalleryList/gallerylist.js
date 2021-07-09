import React from 'react';
import { useState } from 'react';

function GalleryList(props) {

    const [counter, setCounter] = useState(0);
    const [imgOrDes, setImgOrDes] = useState('false');


    const handleImageClick = (evt) => {
        evt.preventDefault();
// let a const equal something where when true/false
// return const equal this/that to return a new append

      }


    return (
        <>
        <img src="images/babyarray.png" width="250" height="250"/>
        </>
    )
}


export default GalleryList;

// maybe define the image path here, only push description or image
// add counter into return ()
// // this goes here:
// <div>
// {props.imgList.map(single =>
//  <GalleryItem key={single.id} single={}
//  )}
// </div>
