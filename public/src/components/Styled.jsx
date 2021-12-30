import styled from 'styled-components';

const InputButton = styled.input`
  font-size: 1em;
  border-radius: 0.75rem;
  background-color: #6d59a8;
  font-weight: lighter;
  color:white;
  position: relative;
  top: 0;
  transition: top ease 0.5s;
  padding:0.75rem 2rem;
  /* Color the border and text with theme.main */
  color: white;
  border: 2px solid ${(props) => props.theme.main};
  &:hover {
    top: -10px;
    cursor:pointer;
  }
`;

const InputForm = styled.input`
outline: none;
`;

const Form = styled.form`
  border:1px solid green;
  display:flex;
  justify-content: center;
  padding: 15px;
`;

const Title = styled.h1`
  border:1px solid blue;
  text-align: center;
`;

const Label = styled.label`
  border:1px solid purple;
  position:relative;
  top: 10px;
  padding: 0 10px;
`;


const Container = styled.div`
  border:1px solid orange;
  text-align: center;
  padding:10px;
  font-family: system-ui,-apple-system;
  font-weight: 600;
  background-color: #23252f;
  color:white;
`;

InputButton.defaultProps = {
  theme: {
    main: '#6d59a8',
  },
};

const theme = {
  main: '#6d59a8',
};

const styles = {
  InputButton, InputForm, theme, Container, Title, Form, Label,
};
export { styles as default };
