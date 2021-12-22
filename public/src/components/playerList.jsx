import React from 'react';
import PlayerComponent from './PlayerComponent.jsx';

const PlayerList = function (props) {
  const { playerList, removePlayer } = props;
  if (playerList.length === 0) {
    return <div>Add your favorite players above</div>;
  }
  const temp = [];
  playerList.forEach((player) => temp.push(<PlayerComponent name={player} key={Math.random()} removePlayer={removePlayer} />));
  return temp;
};

export default PlayerList;
