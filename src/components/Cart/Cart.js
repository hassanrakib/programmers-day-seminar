import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { addedProgrammers } = props;
    const total = addedProgrammers.reduce((previousTotal, currentProgrammer) => previousTotal + currentProgrammer.cost, 0);
    return (
        <div className='cart'>
            <p>Total Speakers: <span>{addedProgrammers.length}</span></p>
            <p>Total Cost: <span>{total}$</span></p>
            <h4>Speakers Invited:</h4>
            <ul>
                {
                    addedProgrammers.map(programmer => <li key={programmer.knownFor}>{programmer.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;