import disney from './disney.png';
import clown from './clown.jpg';
import failure from './failure.jpg';
import etch from './etch.jpg';
import ghost from './ghost.jpg';
import ocean from './ocean.jpg';
import portrait from './portrait.jpg';
import reaper from './reaper.jpg';
import sfo from './sfo.jpg';
import sol from './sliceoflife.jpg';
import still_life from './stilllife.jpg';

const art_array = [
    {
        id: 0,
        src: {portrait},
        alt: 'Self-portrait',
    },
    {
        id: 1,
        src: {disney},
        alt: 'French building',
    },
    {
        id: 2,
        src: {sfo},
        alt: 'San Francisco',
    },
    {
        id: 3,
        src: {sol},
        alt: 'Slice of life - my dog Romeo',
    },
    {
        id: 4,
        src: {still_life},
        alt: 'still life in ink',
    },
]

export default {
    art_array
};