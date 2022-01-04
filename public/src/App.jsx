import React from 'react';
import ReactDOM from 'react-dom';

import Styled from './components/Styled.jsx';
import NavBarItem from './components/NavBar/NavBarItem.jsx';

const { Container, Title, NavBarContainer } = Styled;

function App() {
  return (
    <><Container>
      <NavBarContainer>
        <NavBarItem name={"About"} />
        <NavBarItem name={"Projects"} />
        <NavBarItem name={"Contact"} />
      </NavBarContainer>

      <div>
        Design. Build. Improve.
        <Title>
          I create beautiful websites your users will love
        </Title>
      </div>
    </Container><Container>
        Project Tiles
      </Container></>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
