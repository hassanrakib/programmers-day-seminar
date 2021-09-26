import React from 'react';
import './Programmer.css';

const Programmer = (props) => {
    const { handleInvitation, programmer } = props;
    const { name, age, img, knownFor, education, cost } = programmer;
    return (
        // card = programmer
        <div className='programmer'>
            <div>
                <div className='programmer-img-container'>
                    <img src={img} alt="" />
                </div>
                <div className="container">
                    <p><b>Name: </b>{name}</p>
                    <p><b>Age: </b>{age}</p>
                    <p><b>Known For: </b>{knownFor}</p>
                    <p><b>Education: </b>{education}</p>
                    <p><b>Invitation Cost: </b>{cost}$</p>
                </div>
                <div className='btn-container'>
                    <button className='btn' onClick={() => handleInvitation(programmer)}>
                        <i className="fas fa-user-plus"></i>Invite
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Programmer;