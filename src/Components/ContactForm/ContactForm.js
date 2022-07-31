import './ContactForm.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from '../Modal/Modal';

import Button from '../Button/Button';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');
  const [heading, setHeading] = useState('');
  const [modalActive, setModalActive] = useState(false);

  const form = useRef();

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const mailHandler = (e) => {
    setMail(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const resetForm = () => {
    setName('');
    setMail('');
    setMessage('');
  };

  const setModalInformation = (heading, text, boolean) => {
    setHeading(heading);
    setText(text);
    setModalActive(boolean);
  };

  const isFormValid = (name, mail, message) => {
    if (name === '' || mail === '' || message === '') {
      return false;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid(name, mail, message)) {
      setModalInformation(
        'Error!',
        'Make sure the inputs are filled out correct',
        true
      );
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_MAILJS_SERVICE_ID,
        process.env.REACT_APP_MAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_MAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          resetForm();
          setModalInformation('Succesfull!', 'You email has bent sent', true);
        },
        (error) => {
          setModalInformation(
            'Error',
            `The following error occured: ${error}`,
            true
          );
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          onChange={nameHandler}
          noValidate
          value={name}
        />

        <input
          type="mail"
          name="from_email"
          placeholder="Email"
          onChange={mailHandler}
          noValidate
          value={mail}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={messageHandler}
          noValidate
          value={message}
        />
        <Button classname="custom-button-light" type="submit">
          Send Mail
        </Button>
      </form>
      {modalActive && (
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}
          text={text}
          heading={heading}
        />
      )}
    </>
  );
};

export default ContactForm;
