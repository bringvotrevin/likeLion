import styled from 'styled-components'

const Btn = styled.button`
  width: 100px;
  padding: 20px;
  box-shadow: inset 0 0 0 3px #dbdbdb;
  font-size: 20px;
  font-weight: 600;
  background-color: royalblue;
`;

const FirstBtn = styled(Btn)`
  color: white;
`
const SecondBtn = styled(Btn)`
  color: black;
  border-radius: 20px;
  box-shadow:  0 0 2px 2px rgba(0, 0, 0, 0.3);
`
const ThirdBtn = styled(Btn)`
background-color: lightgreen;
color: white;
`

function App() {
  return (
    <div>
      hello world
      <FirstBtn>버튼1</FirstBtn>
      <SecondBtn>버튼2</SecondBtn>
      <ThirdBtn>버튼4</ThirdBtn>
    </div>
  );
}
export default App;
