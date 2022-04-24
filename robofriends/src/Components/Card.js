import React from 'react';
import 'tachyons';

const Card = ({ id, name, email, }) => {
    return (
        <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow'>
            {/* <h1>Robofriends</h1> */}
            <img alt='robots' src={`https://robohash.org/${id}`} width='200' height='200' />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;