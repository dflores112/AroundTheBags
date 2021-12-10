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

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log(this.props, "props");
//     const { value } = this.state;
//     addToFavoritePlayers(value);
//   }

  render() {
    const { value } = this.state;
    const { addToFavoritePlayers } = this.props;

    return (
      <form onSubmit={(event) => addToFavoritePlayers(event, value)}>
        <label>
          Enter Your Favorite Baseball Players Name:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
