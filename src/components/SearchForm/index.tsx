import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { Button } from '../Button'
import { TransactionsContext } from './../../contexts/TransactionsContext'
import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type ISearchFormInput = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ISearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.findTransactions
    },
  )

  async function handleSearchTransactions({ query }: ISearchFormInput) {
    fetchTransactions(query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        onInput={(e) => !e.currentTarget.value && fetchTransactions()}
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <Button disabled={isSubmitting} type="submit" variant="outlined">
        <MagnifyingGlass /> Buscar
      </Button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
