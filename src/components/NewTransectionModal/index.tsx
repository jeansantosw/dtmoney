import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransectionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransectionModal({ isOpen, onRequestClose }: NewTransectionModalProps) {

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">

      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título"/>
        <input type="number" placeholder="Valor"/>
        <input placeholder="CAtegoria"/>

        <button type="submit">Cadastrar</button>

      </Container>

    </Modal>
  );
}