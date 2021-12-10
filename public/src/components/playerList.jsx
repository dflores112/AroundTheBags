import React from 'react';

const PlayerList = function (props) {
  const { playerList } = props;
  if (playerList.length === 0) {
    return <div>Add your favorite players above</div>;
  }
  const temp = [];
  playerList.forEach((player) => temp.push(<div key={Math.random()}>{player}</div>));
  return temp;
};

export default PlayerList;
