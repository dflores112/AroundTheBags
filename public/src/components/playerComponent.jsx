import propTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line import/extensions
import Styled from './Styled.jsx';

function PlayerComponent(props) {
  const { name, removePlayer } = props;
  return (
    <div>
      {name}
      <button type="submit" value="Submit" onClick={() => removePlayer(name)}>
        Remove
      </button>
    </div>
  );
}

PlayerComponent.propTypes = {
  name: propTypes.string.isRequired,
  removePlayer: propTypes.func.isRequired,
};

export default PlayerComponent;
