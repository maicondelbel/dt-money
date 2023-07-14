import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { Button } from '../Button'
import {
  Close,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionTypeWrapper,
} from './styles'

const newTransactionFormSchema = z.object({
  description: z.string().min(1),
  price: z.number(),
  category: z.string().min(1),
  type: z.enum(['income', 'outcome']),
})

type INewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

interface ITransactionModal {
  changeModalState: () => void
}

export function TransactionModal({ changeModalState }: ITransactionModal) {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<INewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const createNewTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createNewTransaction
    },
  )

  function handleCreateNewTransactions(data: INewTransactionFormInputs) {
    createNewTransaction(data)
    reset()
    changeModalState()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <form onSubmit={handleSubmit(handleCreateNewTransactions)}>
          <input
            {...register('description')}
            type="text"
            placeholder="Descrição"
            className={errors.description && 'error'}
          />
          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            min={0}
            placeholder="Preço"
            className={errors.price && 'error'}
          />
          <input
            {...register('category')}
            type="text"
            placeholder="Categoria"
            className={errors.category && 'error'}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionTypeWrapper
                  className={errors.type && 'error'}
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionTypeWrapper>
              )
            }}
          />

          <Button disabled={isSubmitting} type="submit" variant="solid">
            Cadastrar
          </Button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
