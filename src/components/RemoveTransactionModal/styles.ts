import * as Dialog from '@radix-ui/react-dialog'

import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: #00000075;
  z-index: 1;
`

export const Content = styled(Dialog.Content)`
  z-index: 2;
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme['gray-800']};

  p {
    margin-top: 1rem;
  }

  @media (max-width: 576px) {
    min-width: 95vw;
    padding: 1.5rem;

    button[type='submit'] {
      padding: 0.75rem !important;
    }
  }
`
export const Close = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  color: ${(props) => props.theme['gray-500']};
`

export const ActionsButtonsWrapper = styled('div')`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;

  button {
    flex: 50%;
  }
`
