import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {

  // const search = () => {
  //   const x = robots.filter((robots, index) => {
  //     return robots.id.length < 2;
  //   });

  //   return x;
  // }

  return (
    <div className='pa2'>
      <input 
        name="search" 
        type="search" 
        placeholder="Search..."
        onChange={ searchChange }>
      </input>

    </div>
  );
}

export default Searchbox ;