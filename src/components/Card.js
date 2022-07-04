import React from 'react';
import './Card.css';

const Card = ({id, name, imageUrl, wikiUrl}) => {

    return (
        <div className='bg-yellow br3 dib w-25 pa3 ma2 grow bw2 shadow-5 card'>
            <div>
                <img className='image' alt='disney-pal' src={imageUrl} />
                <h2 className='athelas dark-red '>{name}</h2>
            </div>
        </div>
    );
}

export default Card;
