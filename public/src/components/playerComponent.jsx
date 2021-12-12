import React from 'react';

const PlayerComponent = function (props) {
  const { name } = props;
  return (
    <div>
      {name}
      <button type="submit" value="Submit">
        Remove
      </button>
      <button type="submit" value="Submit">
        Edit
      </button>
    </div>
  );
};

export default PlayerComponent;
