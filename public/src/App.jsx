import React from 'react';
import ReactDOM from 'react-dom';

import Styled from './components/Styled.jsx';
const { Container } = Styled;

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        Hello World
      </Container>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
