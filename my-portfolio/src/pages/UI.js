import React, {Component} from 'react';

import { withRouter } from 'react-router-dom';

import cachd from '../imgs/UI/cachd_web.gif';
import leaderboards from '../imgs/UI/leaderboards-1.PNG';
import irl from '../imgs/UI/irl.PNG';
import tx_rise2 from '../imgs/UI/texas-rise-pages.png';
import tx_rise1 from '../imgs/UI/texas-rise.png';
import u_owe from '../imgs/UI/u-owe.png';
import u_owe_home from '../imgs/UI/u-owe-home.png'

import ImageGallery from 'react-image-gallery';
import '../styles/images.scss';

const ui_array = [
    {
        original: irl,
        thumbnail: irl,
    },
    {
        original: cachd,
        thumbnail: cachd,
    },
    {
        original: leaderboards,
        thumbnail: leaderboards,
    },
    {
        original: tx_rise1,
        thumbnail: tx_rise1,
    },
    {
        original: tx_rise2,
        thumbnail: tx_rise2,
    },
    {
        original: u_owe_home,
        thumbnail: u_owe_home
    },
    {
        original: u_owe,
        thumbnail: u_owe
    }
]

class UI_UX extends Component {
    render() {
        return(
            <div>
                <h1>UI/UX</h1>
                <br />
                <ImageGallery className="gallery" items={ui_array} showPlayButton={false} />
            </div>
        )
    }
}

export default withRouter(UI_UX);