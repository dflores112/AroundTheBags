import styled from 'styled-components';

const Input = styled.input`
  font-size: 1em;
  margin: 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

Input.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

const theme = {
  main: 'mediumseagreen',
};

const styles = {
  Input, theme,
};
export { styles as default };
