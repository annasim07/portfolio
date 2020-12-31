import React from 'react';

import { ImageGrid } from '../components';

import '../styles/home.scss';

const items = [
    {
        alt: "UI/UX thumbnail",
        title: "UI/UX",
        page: "ui"
    },
    {
        alt: "Game title screen",
        title: "Games",
        page: "games"
    },
    {
        alt: "Artworks",
        title: "ArtWorks",
        page: "art",
    },
    {
        alt: "Digital pieces",
        title: "Digital",
        page: "digital"
    }
]

const Home = () => {

    return (
        <div className="home">
            <ImageGrid data={items} />
        </div>
    );
}

export { Home };
