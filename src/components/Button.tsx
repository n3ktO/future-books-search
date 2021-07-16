import styled from 'styled-components';

const ButtonStyle = styled.button`
padding: 8px 16px;
font-family: 'Roboto', sans-serif;
font-size: 16px;
background: #f6f5f5;
border: 1.5px solid #d2d3d4;
border-radius: 4px;
box-sizing: border-box;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
cursor: pointer;

&:hover[disabled] {
  background: #f6f5f5;
}

&:hover {
  background: #d3e0ea;
}

&:active {
  
  background: #9ab3f5;
}
`;

const Button = (props: any) => <ButtonStyle {...props} />;

export default Button;