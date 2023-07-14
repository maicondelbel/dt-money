import { Summary } from '../../components/Summary'
import { Header } from './../../components/Header/index'
import { MainPage, MainPageContainer } from './styles'
import { TransactionsTable } from './../../components/TransactionsTable/index'
import { SearchForm } from '../../components/SearchForm'

export function Transactions() {
  return (
    <>
      <Header />
      <MainPage>
        <MainPageContainer>
          <Summary />
          <SearchForm />
          <TransactionsTable />
        </MainPageContainer>
      </MainPage>
    </>
  )
}
