import React from 'react';
import CARD_DATA from './card.data.js';
import Collection from '../collection/collection.component';
import './card.styles.scss';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cards: CARD_DATA
        }
    }

    render () { 
        //destructure the cards first
        const {cards} = this.state;
        return (<div className='card-page'>
        {
            cards.map(({id, ...otherCardProps}) => (
                <Collection key={id} {...otherCardProps} />
            ))
        }

        </div>)
        
    }

}
export default Card;