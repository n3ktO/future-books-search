import styled from 'styled-components';

const TextFieldStyle = styled.input`
width: 100%;
padding: 8px 16px;
font-family: 'Roboto', sans-serif;
font-size: 16px;
border: 1.5px solid #d2d3d4;
border-radius: 4px;
box-sizing: border-box;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const TextField = (props: any) => <TextFieldStyle {...props} />;

export default TextField;