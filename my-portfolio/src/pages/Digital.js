import React, {Component} from 'react';

import { withRouter } from 'react-router-dom';

import char_sheet from '../imgs/digital/character.png';
import group from '../imgs/digital/kappa.JPG';
import self from '../imgs/digital/me.JPG';
import parents from '../imgs/digital/parents.JPG';
import flowers from '../imgs/digital/vase.JPG';

import ImageGallery from 'react-image-gallery';
import '../styles/images.scss';

const digital_array = [
    {
        original: flowers,
        thumbnail: flowers,
    },
    {
        original: group,
        thumbnail: group,
    },
    {
        original: self,
        thumbnail: self,
    },
    {
        original: parents,
        thumbnail: parents
    },
    {
        original: char_sheet,
        thumbnail: char_sheet,
    },
]

class Digital extends Component {
    render() {
        return(
            <div>
                <h1>Digital</h1>
                <br />
                <ImageGallery className="gallery" items={digital_array} showPlayButton={false} />
            </div>
        )
    }
}

export default withRouter(Digital);