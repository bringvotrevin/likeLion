import React from 'react';

export default function ImageItem({ img }) {
  return (
    <img alt='' src={img.download_url} style={{ width: 400, height: 250 }} />
  );
}
