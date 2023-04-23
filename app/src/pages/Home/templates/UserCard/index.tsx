import { ReactNode, useState } from 'react';
import { Container, Name } from './styles';
import { PrimaryButton } from '../../../../components/Buttons';
import Modal from 'react-modal';
import Form from '../Form';
const icon = require("../../../../assets/icons/149071.png")

interface UserCardProps {
  name: ReactNode;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '60%',
    maxWidth: 600,
    minHeight: 300,
    borderRadius: 20,
    backgroundColor: '#fff',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function UserCard({ name }: UserCardProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  if (Modal.defaultStyles.overlay) {
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(93, 91, 91, 0.4)';
  }

  function handleSend() {
    closeModal()
  }

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form onSubmit={handleSend} />
      </Modal>
      <img src={icon} alt="icon"  />
      <Name>{name}</Name>
      <PrimaryButton onClick={openModal}>
        Contratar
      </PrimaryButton>
    </Container>
  );
}
