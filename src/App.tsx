//IMPORTACAO DO STYLED COMPONENTS
import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransectionModal } from './components/NewTransectionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionContext } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionContext.Provider value={[]}>

     <Header onOpenNewTransectionModal = { handleOpenNewTransactionModal } />
     <Dashboard />
      <NewTransectionModal
        isOpen = { isNewTransactionModalOpen }
        onRequestClose = { handleCloseNewTransactionModal }
      />
     <GlobalStyle />

    </TransactionContext.Provider>
  );
}