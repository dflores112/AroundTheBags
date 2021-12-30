import React from 'react';
import propTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import PlayerComponent from './PlayerComponent.jsx';

function PlayerList(props) {
  const { playerList, removePlayer } = props;
  if (playerList.length === 0) {
    return <div>Add your favorite players above</div>;
  }
  const temp = [];
  playerList.forEach((player) => {
    temp.push(<PlayerComponent name={player} key={Math.random()} removePlayer={removePlayer} />);
  });
  return temp;
}

PlayerList.propTypes = {
  playerList: propTypes.arrayOf(propTypes.string),
  removePlayer: propTypes.func.isRequired,
};
PlayerList.defaultProps = {
  playerList: [],
};

export default PlayerList;
