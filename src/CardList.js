import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {



  return (
  <div id="cardList">
    {
      robots.map((user, index) => {
        return (
          <Card 
            key={index}
            id={robots[index].id} 
            name={robots[index].name} 
            username={robots[index].username} 
            specialmove={robots[index].specialMove}
          />
        );
      })}
  </div>
  );
}

export default CardList;