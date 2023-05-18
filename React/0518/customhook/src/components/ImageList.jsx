import React from 'react';
import ImageItem from './ImageItem';

export default function ImageList({ imageList }) {
  return (
    <ul>
      {imageList.map((img) => {
        return (
          <li key={img.id}>
            <ImageItem img={img} />
          </li>
        );
      })}
    </ul>
  );
}
