import React from 'react';

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
        <label>
          Enter Your Favorite Baseball Players Name:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add To List" />
      </form>
    );
  }
}

export default Form;
