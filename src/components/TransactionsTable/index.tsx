import * as Dialog from '@radix-ui/react-dialog'
import { CalendarBlank, TagSimple, Trash } from 'phosphor-react'
import { useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { Button } from '../Button'
import { RemoveTransactionModal } from '../RemoveTransactionModal'
import { PriceHighlight, TransactionsTableContainer } from './styles'

export function TransactionsTable() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const [modalState, setModalState] = useState<boolean>(false)

  function handleModalState() {
    setModalState(false)
  }

  return (
    <TransactionsTableContainer>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
              </td>
              <td>
                <TagSimple /> {transaction.category}
              </td>
              <td>
                <CalendarBlank />
                {dateFormatter.format(new Date(transaction.createdAt))}
              </td>
              <td>
                <Dialog.Root open={modalState} onOpenChange={setModalState}>
                  <Dialog.Trigger asChild>
                    <Button variant="danger">
                      <Trash />
                    </Button>
                  </Dialog.Trigger>

                  <RemoveTransactionModal
                    changeModalState={handleModalState}
                    transactionId={transaction.id}
                  />
                </Dialog.Root>
              </td>
            </tr>
          )
        })}
      </tbody>
    </TransactionsTableContainer>
  )
}
