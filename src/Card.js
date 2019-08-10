import React from 'react';

const Card = (props) => {

  const rand = Math.floor(Math.random() * 100);

  return (
    <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
      <img alt='test' src={`https://robohash.org/${props.id + rand}?50x50`}/>
      <div>
        <h2>{props.name}</h2>
        <h3>{props.username}</h3>
        <h4 className="specialMovie">{props.specialmove}</h4>
      </div>
    </div>
  );
}

export default Card;