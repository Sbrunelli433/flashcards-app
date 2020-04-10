import React from 'react';
import './collection.styles.scss';


const Collection = ({title, cards}) => (
    <div classname='collection'>
        <h1> {title}</h1>
        <div className='preview'>
        {cards.map((card) => (
                <div key={card.id}>{card.word}</div>
            ))}
        </div>
    </div>
);

export default Collection;