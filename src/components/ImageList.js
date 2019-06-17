import React from "react";

const ImageList = props => {
  const images = props.images.map((image, index) => {
    return <img alt="" key={index} src={image.urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
