import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import Styled from './Styled.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    const { addToFavoritePlayers } = this.props;
    return (
      <Styled.Form onSubmit={(event) => addToFavoritePlayers(event, value)}>
        <Styled.Label htmlFor="submit-btn">
          Enter Your Favorite Baseball Players Name:
          <Styled.InputForm type="text" value={value} onChange={this.handleChange} required />
        </Styled.Label>
        <Styled.InputButton type="submit" value="Add To List" />
      </Styled.Form>
    );
  }
}

Form.propTypes = {
  addToFavoritePlayers: PropTypes.func.isRequired,
};

export default Form;
