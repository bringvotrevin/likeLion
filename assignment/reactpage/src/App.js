import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import GameList from "./components/GameList";
import Header from "./components/Header/Header";
import Description from "./components/Description";


function App() {
  // return (
  //   <div>
  //     <Header/>
  //     <GameList/>
  //     <Description/>
  //   </div>
  // );

  return (
    <BrowserRouter >
      <Link to='/game'>game</Link>
      <Link to='/header'>header</Link>
      <Link to='/description'>description</Link>
      <Routes>
        <Route path='/' element={<GameList />}/>
        <Route path='/header' element={<Header />}/>
        <Route path='/description' element={<Description />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
