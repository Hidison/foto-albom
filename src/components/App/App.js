import "./App.css";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import Main from "../Main/Main";
import AddCardModal from "../AddCardModal/AddCardModal";
import FullSizeImg from "../FullSizeImg/FullSizeImg";
import useFirestore from "../../hooks/useFirestore";
import { useSelector } from "react-redux";

function App() {
  const { modalVisible, modalImgVisible } = useSelector((state) => state.app);

  const { docs } = useFirestore("images");

  return (
    <div style={{ padding: "0 30px 20px 30px" }}>
      <Header />
      <Main fotos={docs} />
      <Modal modalVisible={modalVisible}>
        <AddCardModal />
      </Modal>
      <Modal modalVisible={modalImgVisible}>
        <FullSizeImg />
      </Modal>
    </div>
  );
}

export default App;
