import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '../lib/axios'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
interface CreateTransaction {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextType {
  transactions: Transaction[]
  fecthTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransaction) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fecthTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransaction) {
    const { category, description, price, type } = data

    const response = await api.post('/transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fecthTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fecthTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
