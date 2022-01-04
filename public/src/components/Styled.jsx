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

const Title = styled.h1`
  border:1px solid blue;
  text-align: center;
  font-size:4.25rem;
  line-height: 1;
  width:65%;
  margin: auto;
`;

const Container = styled.div`
  border:2px solid green;
  text-align: center;
  letter-spacing: -.025em;
  padding:10px;
  font-family: system-ui,-apple-system;
  font-weight: 600;
  background-color: #323542;
  
  color:white;
  height: 90%;
`;

const NavBarContainer = styled.div`
 border:2px solid yellow;
 padding:10px;
 display:flex;
 justify-content: right;
`;

const NavItem = styled.button`
background-color: #323542;
border-radius: 10px;
border:none;
color:white;
font-weight: 600;
margin: 12px;
padding: 10px;
font-size: 16px;
&:hover {
  cursor:pointer;
  background-color: #1A1C23;
}
`;

const styles = {
  Container, Title, NavBarContainer, NavItem,
};

export {styles as default };
