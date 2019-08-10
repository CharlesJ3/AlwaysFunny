import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { robots } from './robot';

export default class App extends React.Component {  
  constructor() {
    super();

    this.state = {
      robots: robots,
      searchfield: '',
    }
  }

  onSearchChange(event){

  const filteredRobots = this.state.robots.filter( robots => {
    
  });
}

  render(){
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
