import './Modal.css';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';

const Information = (props) => {
  const buttonHandler = () => {
    if (props.modalActive) {
      props.setModalActive(false);
    }
  };

  return (
    <div onClick={buttonHandler} className="modal-main-container">
      <div className="modalContainer">
        <div className="modalHeading">
          <h2>{props.heading}</h2>
        </div>
        <p>{props.text}</p>
        <div className="button-container">
          <Button
            classname="custom-button-light"
            onClick={buttonHandler}
            className="button"
            style={{ width: '40%' }}
          >
            {''}
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Information
          modalActive={props.modalActive}
          text={props.text}
          heading={props.heading}
          setModalActive={props.setModalActive}
        />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
