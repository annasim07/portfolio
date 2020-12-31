import React from 'react';

import { useHistory } from 'react-router-dom';

import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
  } from '@material-ui/core';

import gouache from '../imgs/art/gouache.jpg';
import irl from '../imgs/UI/irl.PNG';
import gameTitle from '../imgs/game/title.png';
import group from '../imgs/digital/kappa.JPG';

import './components.scss';

const pics = {ui: irl, games: gameTitle, art: gouache, digital: group};

const ImageCard = ({ title, alt, page, ...props }) => {
    const history = useHistory();

    return (
      <div>
            <Card>
                <CardActionArea onClick={() => history.push('/'+page)}>
                    <CardMedia
                    component="img"
                    className="media"
                    image={pics[page]}
                    title={alt}
                    />
                    <CardContent>
                      <Typography className="titles" gutterBottom variant="h6" component="h6">
                          {title}
                      </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
      </div>
    );
  };

export { ImageCard };
