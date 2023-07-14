import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

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

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      width: 100%;
      text-align: center;
      justify-content: center;
      padding: 1.25rem;
    }
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

export const TransactionTypeWrapper = styled(RadioGroup.Root)`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  &.error {
    border-radius: 6px;
    box-shadow: 0 0 0 2px ${(props) => props.theme['red-300']};
  }
`

interface ITransactionTypeButton {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<ITransactionTypeButton>`
  background-color: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  flex: 1 1 50%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['gray-600']};
    transition: 0.2s;
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
