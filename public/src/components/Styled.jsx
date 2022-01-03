import styled from 'styled-components';

const theme = {
  main: '#6d59a8',
};

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

InputButton.defaultProps = {
  theme: {
    main: '#6d59a8',
  },
};

const Title = styled.h1`
  border:1px solid blue;
  text-align: center;
  font-size:4.25rem;
  line-height: 1;
  width:65%;
  margin: auto;
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

const styles = {
  Container, Title,
};

export {styles as default };
