import React from 'react';
import axios from 'axios';
import Form from './form.jsx';
import PlayerList from './playerList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = { favoritePlayers: [] };
    this.addToFavoritePlayers = this.addToFavoritePlayers.bind(this);
  }

  addToFavoritePlayers(event, player) {
    event.preventDefault();
    const { favoritePlayers } = this.state;
    favoritePlayers.push(player);
    const newFavoritePlayers = [...favoritePlayers];
    this.setState({ favoritePlayers: newFavoritePlayers });
  }

  render() {
    const { favoritePlayers } = this.state;
    return (
      <div>
        <h1>Favorite Baseball Players List</h1>
        <Form addToFavoritePlayers={this.addToFavoritePlayers} />
        <PlayerList playerList={favoritePlayers} />
      </div>
    );
  }
}

export default App;
