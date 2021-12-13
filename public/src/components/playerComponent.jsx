import React from 'react';

const PlayerComponent = function (props) {
  const { name, removePlayer } = props;
  return (
    <div>
      {name}
      <button type="submit" value="Submit" onClick={() => removePlayer(name)}>
        Remove
      </button>
      <button type="submit" value="Submit">
        Edit
      </button>
    </div>
  );
};

export default PlayerComponent;
