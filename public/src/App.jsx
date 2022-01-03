import React from 'react';
import ReactDOM from 'react-dom';

import Styled from './components/Styled.jsx';

const { Container, Title } = Styled;

function App() {
  return (
    <Container>
      Design. Build. Improve.
      <Title>
        I create beautiful websites your users will love
      </Title>
    </Container>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
