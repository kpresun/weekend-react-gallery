import React from 'react';
import { useState } from 'react';
import GalleryItem from "../GalleryItem/galleryitem";

function GalleryList(props) {

// maybe define the image path here, only push description or image
// add counter into return ()
// // this goes here:
// <div>
// {props.imgList.map(single =>
//  <GalleryItem key={single.id} single={}
//  )}
// </div>


    return (
        <>
        <img src="images/babyarray.png" width="250" height="250"/>
        </>
    )
}


export default GalleryList;
