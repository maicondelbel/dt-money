import { Button } from '../Button'
import { Logo } from '../Logo'
import { HeaderContainer, HeaderWrapper } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { TransactionModal } from '../TransactionModal'
import { useState } from 'react'

export function Header() {
  const [modalState, setModalState] = useState<boolean>(false)

  function handleModalState() {
    setModalState(false)
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <Dialog.Root open={modalState} onOpenChange={setModalState}>
          <Dialog.Trigger asChild>
            <Button variant="solid">Nova Transação</Button>
          </Dialog.Trigger>

          <TransactionModal changeModalState={handleModalState} />
        </Dialog.Root>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
