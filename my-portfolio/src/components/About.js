import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';

import me from '../imgs/me_cropped.png';

import '../styles/about.scss';

class About extends Component {
    render() {
        return(
            <div>
                <img className="myPhoto" src={me} alt="myself" />
            </div>
        )
    }
}

export default About;