import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styled.jsx';

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
      <form onSubmit={(event) => addToFavoritePlayers(event, value)}>
        <label htmlFor="submit-btn">
          Enter Your Favorite Baseball Players Name:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <Styles.Input type="submit" value="Add To List" />
      </form>
    );
  }
}

Form.propTypes = {
  addToFavoritePlayers: PropTypes.func.isRequired,
};

export default Form;
