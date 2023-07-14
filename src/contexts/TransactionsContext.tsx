import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { v4 as uuidv4 } from 'uuid'

interface ITransaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface ICreateNewTransaction {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
}

interface ITransactionContextType {
  transactions: ITransaction[]
  findTransactions: (query?: string) => void
  createNewTransaction: (data: ICreateNewTransaction) => void
  removeTransaction: (transactionId: string) => void
}
interface ITransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionContextType)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  function getTransactionsFromLocalStorage(): ITransaction[] {
    const storedStateAsJSON = localStorage.getItem(
      '@dt-money:transactions-1.0.0',
    )
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return []
  }

  const [initialTransactions, setInitialTransactions] = useState<
    ITransaction[]
  >(getTransactionsFromLocalStorage())

  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const createNewTransaction = useCallback((data: ICreateNewTransaction) => {
    const newTransaction: ITransaction = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      ...data,
    }

    setTransactions((prevState) => [newTransaction, ...prevState])
    setInitialTransactions((prevState) => [newTransaction, ...prevState])
  }, [])

  const findTransactions = useCallback(
    (query?: string) => {
      if (query) {
        const transactionFiltred = initialTransactions.filter((transaction) => {
          return (
            transaction.description
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            transaction.category.toLowerCase().includes(query.toLowerCase())
          )
        })
        setTransactions(transactionFiltred)
      } else {
        setTransactions(initialTransactions)
      }
    },
    [initialTransactions],
  )

  const removeTransaction = useCallback(
    (transactionId: string) => {
      const filtredTransactions = initialTransactions.filter(
        (transaction) => transaction.id !== transactionId,
      )

      setInitialTransactions(filtredTransactions)
    },
    [initialTransactions],
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(initialTransactions)
    localStorage.setItem('@dt-money:transactions-1.0.0', stateJSON)
    setTransactions(initialTransactions)
  }, [initialTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        findTransactions,
        createNewTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
