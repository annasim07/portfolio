import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { ImageCard } from './ImageCard';
import './components.scss';

// const ImageCarousel = ({ data }) => {
//     const renderItem = (item, index) => {
//       return <ImageCard key={index} {...item} />;
//     };
//     return <div className="grid container"><Carousel>{data.map(renderItem)}</Carousel></div>;
//   };
const ImageCarousel = ({ data }) => <UncontrolledCarousel className="images" autoPlay="false" items={data} />;

export { ImageCarousel };