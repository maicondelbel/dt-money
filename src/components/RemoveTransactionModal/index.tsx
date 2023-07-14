import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { Button } from '../Button'
import { ActionsButtonsWrapper, Close, Content, Overlay } from './styles'

interface IRemoveTransactionModal {
  changeModalState: () => void
  transactionId: string
}

export function RemoveTransactionModal({
  changeModalState,
  transactionId,
}: IRemoveTransactionModal) {
  const removeTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.removeTransaction
    },
  )

  function handleRemoveTransaction() {
    removeTransaction(transactionId)
    changeModalState()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>
        <Dialog.Title>Remover Transação</Dialog.Title>
        <Dialog.Description>
          Você tem certeza que deseja remover a transação selecionada?
        </Dialog.Description>
        <ActionsButtonsWrapper>
          <Button variant="solid" onClick={changeModalState}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleRemoveTransaction}>
            Remover
          </Button>
        </ActionsButtonsWrapper>
      </Content>
    </Dialog.Portal>
  )
}
