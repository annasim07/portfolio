import React, {Component} from 'react';

import title from '../imgs/game/title.png';
import cat from '../imgs/game/cat.png';
import ice_boss from '../imgs/game/ice-boss.png';
import dog from '../imgs/game/dog.png';
import soldier from '../imgs/game/soldier.png';
import minion from '../imgs/game/minion.png';

import ImageGallery from 'react-image-gallery';
import '../styles/images.scss';

const games_array = [
    {
        original: title,
        thumbnail: title,
    },
    {
        original: cat,
        thumbnail: cat,
    },
    {
        original: dog,
        thumbnail: dog,
    },
    {
        original: ice_boss,
        thumbnail: ice_boss,
    },
    {
        original: minion,
        thumbnail: minion,
    },
    {
        original: soldier,
        thumbnail: soldier,
    },
]

class Games extends Component {
    render() {
        return (
          <div className="container">
            <h1>Video Games</h1>
            <br />
            <ImageGallery className="gallery" items={games_array} showPlayButton={false} />
          </div>
        );
      }
}

export default Games;
