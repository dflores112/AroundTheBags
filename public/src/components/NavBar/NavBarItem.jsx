import React from 'react';
import Styles from '../Styled.jsx';

const { NavItem } = Styles;

function NavBarItem({name}) {
  return (
    <NavItem>
      {name}
    </NavItem>
  );
}

export default NavBarItem;
