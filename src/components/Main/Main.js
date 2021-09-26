import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';
import './Main.css';

const Main = () => {
    // load programmers from programmers.json and put data in programmers
    const [programmers, setProgrammers] = useState([]);
    useEffect(() => {
        fetch('./programmers.json')
            .then(response => response.json())
            .then(data => setProgrammers(data));
    }, []);

    // add new programmers to addedProgrammers by handleInvitation function
    const [addedProgrammers, setAddedProgrammers] = useState([]);

    const handleInvitation = (programmer) => {
        const programmers = [...addedProgrammers, programmer];
        setAddedProgrammers(programmers);
    }

    return (
        <main>
            {/* programmers container */}
            <div className='programmers'>
                {
                    programmers.map(programmer => <Programmer programmer={programmer} key={programmer.name} handleInvitation={handleInvitation} />)
                }
            </div>
            {/* cart container */}
            <div className='cart-container'>
                <Cart addedProgrammers={addedProgrammers} />
            </div>
        </main>
    );
};

export default Main;