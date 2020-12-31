import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';

import me from '../imgs/me_cropped.png';

import '../styles/about.scss';

class About extends Component {
    render() {
        return(
            <div className="container">
                <Container fluid className="about">
                    <img className="myPhoto" src={me} alt="myself" />
                    <h3>Anna Sim</h3>
                </Container>
            </div>
        )
    }
}

export default About;