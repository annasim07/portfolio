import React from 'react';

import './components.scss';
import { ImageCard } from './ImageCard';

const ImageGrid = ({ data }) => {
    const renderItem = (item, index) => {
      return <ImageCard key={index} {...item} />;
    };
    return <div className="grid container">{data.map(renderItem)}</div>;
  };
export { ImageGrid };
