import react, { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';

function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Modal />
    </>
  );
}
export default App;
