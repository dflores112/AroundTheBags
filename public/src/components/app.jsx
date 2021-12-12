import React from 'react';
import axios from 'axios';
import Form from './form.jsx';
import PlayerList from './playerList.jsx';
import Styled from './Styled.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = { favoritePlayers: [] };
    this.addToFavoritePlayers = this.addToFavoritePlayers.bind(this);
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
    const toSave = JSON.stringify(favoritePlayers);
    localStorage.setItem('favoritePlayers', toSave);
    const newFavoritePlayers = [...favoritePlayers];
    this.setState({ favoritePlayers: newFavoritePlayers });
  }

  render() {
    const { favoritePlayers } = this.state;
    return (
      <div>
        <h1>Favorite Baseball Players List</h1>
        <Form addToFavoritePlayers={this.addToFavoritePlayers} />
        <Styled.PlayerContainer>
          <PlayerList playerList={favoritePlayers} />
        </Styled.PlayerContainer>
      </div>
    );
  }
}

export default App;
