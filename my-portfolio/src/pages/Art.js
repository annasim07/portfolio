import React, {Component} from 'react';
import disney from '../imgs/art/disney.png';
import clown from '../imgs/art/clown.jpg';
import failure from '../imgs/art/failure.jpg';
import etch from '../imgs/art/etch.jpg';
import ghost from '../imgs/art/ghost.jpg';
import ocean from '../imgs/art/ocean.jpg';
import portrait from '../imgs/art/portrait.jpg';
import reaper from '../imgs/art/reaper.jpg';
import sfo from '../imgs/art/sfo.jpg';
import sol from '../imgs/art/sliceoflife.jpg';
import still_life from '../imgs/art/stilllife.jpg';

import ImageGallery from 'react-image-gallery';
import '../styles/images.scss';

const art_array = [
    {
        id: 0,
        original: portrait,
        thumbnail: portrait,
        originalAlt: "self portrait in acrylic",
        sizes: "150"
    },
    {
        id: 1,
        original: disney,
        thumbnail: disney,
    },
    {
        id: 2,
        original: sfo,
        thumbnail: sfo,
    },
    {
        id: 3,
        original: sol,
        thumbnail: sol,
    },
    {
        id: 4,
        original: still_life,
        thumbnail: still_life,
    },
    {
        original: etch,
        thumbnail: etch,
    },
    {
        original: ocean,
        thumbnail: ocean
    },
    {
        original: ghost,
        thumbnail:ghost
    },
    {
        original: clown,
        thumbnail: clown,
    },
    {
        original: failure,
        thumbnail: failure,
    },
    {
        original: reaper,
        thumbnail: reaper,
    }
]

class Art extends Component {
    render() {
        return (
          <div className="container">
            <h1>ArtWorks</h1>
            <br />
            <ImageGallery className="gallery" items={art_array} showPlayButton={false} />
          </div>
        );
      }
}

export default Art;
