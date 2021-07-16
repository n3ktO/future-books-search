import styled from 'styled-components';

const SelectWrapperStyle = styled.label`
width: 100%;
box-sizing: border-box;
`;

const SelectLabelStyle = styled.div`
width: 100%;
padding: 8px 0;
font-size: 14px;
font-weight: 500;
`;

const SelectStyle = styled.select`
width: 100%;
padding: 8px 16px;
font-family: 'Roboto', sans-serif;
font-size: 16px;
border: 1.5px solid #d2d3d4;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
cursor: pointer;
`;

const Selector = ({ label, options, setOption }: any) => {
  return (
    <SelectWrapperStyle>
      {label && <SelectLabelStyle>{label}</SelectLabelStyle>}
      <SelectStyle onChange={event => setOption(event.currentTarget.value)}>
        {options.map((item: string, index: number) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </SelectStyle>
    </SelectWrapperStyle>
  );
}

export default Selector;