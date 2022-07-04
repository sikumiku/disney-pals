import React from 'react';
import Card from './Card';

const CardList = ({pals}) => {
    return (
        <div className='tc'>
            {pals.map((pal, index) => {
                return (
                    <Card 
                        key={index} 
                        id={pal._id} 
                        name={pal.name} 
                        imageUrl={pal.imageUrl}
                    />
                );
            })}
        </div>
    );
}

export default CardList;