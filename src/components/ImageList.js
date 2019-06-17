import React from "react";

const ImageList = props => {
  // deconstruction in map
  // don't have to say images multiple times
  const images = props.images.map(({ description, id, urls}) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
