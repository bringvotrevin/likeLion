import Resume from "./Components/Resume";
import Hello from "./Components/Hello";
import ColorText from "./Components/ColorText";

  function Time() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    return (
    <div style={{backgroundColor:"black", color:"white"}}>
    <h1 style={{color:'red'}}>년 : {year}</h1>
    <h1>월/일 : {month}/{date}</h1>
    <h1>시간 : {hour}시 {min}분 {sec}초</h1>
    </div>
    )
  }

  function Licat() {
    const name = '라이캣!';
    const someStyle = {backgroundColor:"black", color:"white"};

    return (
      <div>
        <h1 style={someStyle}>안녕, {name} 1호</h1>
        <h1>안녕, 라이캣 2호!</h1>
        <div className="newClass"/>
      </div>
    );
  }

function App() {

  return (
    <div>
      <ColorText color='red'/>
      <ColorText color='green'/>
      <ColorText color='blue'/>
      <Hello name="개리"/>
      <Time />
      <Licat />
			<Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       hello world
//     </div>
//   );
// }
export default App;
