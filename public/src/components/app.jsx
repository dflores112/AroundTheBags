import React from 'react';
// eslint-disable-next-line import/extensions
import Form from './Form.jsx';
// eslint-disable-next-line import/extensions
import PlayerList from './PlayerList.jsx';
// eslint-disable-next-line import/extensions
import { updateLS } from '../jsFuncs.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { favoritePlayers: [] };
    this.addToFavoritePlayers = this.addToFavoritePlayers.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  componentDidMount() {
    if ('favoritePlayers' in localStorage) {
      this.setState({ favoritePlayers: JSON.parse(localStorage.favoritePlayers) });
    }
  }

  addToFavoritePlayers(event, player) {
    event.preventDefault();
    const { favoritePlayers } = this.state;
    favoritePlayers.push(player);
    updateLS(favoritePlayers);
    const newFavoritePlayers = [...favoritePlayers];
    this.setState({ favoritePlayers: newFavoritePlayers });
  }

  removePlayer(player) {
    const { favoritePlayers } = this.state;
    function checkPlayers(p) {
      return p !== player;
    }
    const newPlayers = favoritePlayers.filter(checkPlayers);
    this.setState({ favoritePlayers: newPlayers });
    updateLS(newPlayers);
  }

  render() {
    const { favoritePlayers } = this.state;
    return (
      <div>
        <div>
          <h1>Favorite Baseball Players List</h1>
        </div>
        <div>
          <Form addToFavoritePlayers={this.addToFavoritePlayers} />
        </div>
        <div>
          <PlayerList playerList={favoritePlayers} removePlayer={this.removePlayer} />
        </div>
      </div>
    );
  }
}

export default App;
