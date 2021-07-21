import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransectionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransectionInput) => Promise<void>;
}

 const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData);



export function TransectionsProvider({children}: TransactionsProviderProps){

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))

  }, []);

  async function createTransaction(transactionInput: TransectionInput){

    const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return(
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionContext);

  return context;
}

