import React from 'react';
import Form from './form.jsx';
import PlayerList from './playerList.jsx';

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
    this.updateLS(favoritePlayers);
    const newFavoritePlayers = [...favoritePlayers];
    this.setState({ favoritePlayers: newFavoritePlayers });
  }

  updateLS(favoritePlayers) {
    const toSave = JSON.stringify(favoritePlayers);
    localStorage.setItem('favoritePlayers', toSave);
  }

  removePlayer(player) {
    const { favoritePlayers } = this.state;
    function checkPlayers(p) {
      return p !== player;
    }
    const newPlayers = favoritePlayers.filter(checkPlayers);
    this.setState({ favoritePlayers: newPlayers });
    this.updateLS(newPlayers);
  }

  render() {
    const { favoritePlayers } = this.state;
    return (
      <div>
        <h1>Favorite Baseball Players List</h1>
        <Form addToFavoritePlayers={this.addToFavoritePlayers} />
        <div>
          <PlayerList playerList={favoritePlayers} removePlayer={this.removePlayer} />
        </div>
      </div>
    );
  }
}

export default App;
