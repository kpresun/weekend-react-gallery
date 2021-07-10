import React from "react";
import { useState } from "react";
import GalleryItem from "../GalleryItem/galleryitem";

function GalleryList(props) {
  // I need to loop through the items with Map and Key
  // I need something here that will grab the items information and return a jsx of:
  // image, description, likes
  return (
    <>
      <div>
        {props.imgList.map((single) => (
            <
          <GalleryItem key={single.id} imgToShow={single} />
        ))}
      </div>
    </>
  );
}

export default GalleryList;
