import { useState } from "react";
import Login from './Components/Login/Login';
import Homepage from './Components/Homepage/Homepage';
import Modal from "./Components/Modal/Modal";

function App() {

  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234',
  }

  const [login, setLogin] = useState(false);
  const [modal, setModal] = useState(true);

  // console.log(login);
  return (
    <>
      {login? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />}
      
      {modal && <Modal setModal={setModal}>
        <h2>사용 약관에 대한 안내</h2>
        <p>
          jfosdjfidfjwidofjdiofjwifjwfijwdfowdjf
        </p>
        <a href='#none'>더 보기</a>
      </Modal>}
    </>
  )

}

export default App;