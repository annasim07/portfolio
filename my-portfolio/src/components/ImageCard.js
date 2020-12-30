import React from 'react';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Container,
  } from '@material-ui/core';

import './components.scss';

const ImageCard = ({ id, src, alt, ...props }) => {
    return (
      <div>
        <Card>
          <CardMedia
            className="media"
            component="img"
            height="140"
            src={src}
            alt={alt}
          />
          {/* <CardContent>
            <Container>
              <Typography variant="body" className="body">
                {title}
              </Typography>
              <br />
              <Typography variant="body" className="body">
                {desc}
              </Typography>
            </Container>
          </CardContent> */}
        </Card>
      </div>
    );
  };

export { ImageCard };
