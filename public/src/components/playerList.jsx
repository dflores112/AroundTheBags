import React from 'react';
import PlayerComponent from './playerComponent.jsx';

const PlayerList = function (props) {
  const { playerList } = props;
  if (playerList.length === 0) {
    return <div>Add your favorite players above</div>;
  }
  const temp = [];
  playerList.forEach((player) => temp.push(<PlayerComponent name={player} key={Math.random()} />));
  return temp;
};

export default PlayerList;
