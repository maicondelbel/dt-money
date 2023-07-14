import styled, { css } from 'styled-components'

interface IButtonContainerProps {
  variant: 'solid' | 'outlined' | 'danger'
}

const BUTTON_VARIANTS = {
  danger: css`
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['red-500']};
    padding: 0.75rem;

    &:hover {
      background-color: ${(props) => props.theme['red-300']};
      transition: 0.2s;
    }
  `,
  solid: css`
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['green-500']};

    &:hover {
      background-color: ${(props) => props.theme['green-300']};
      transition: 0.2s;
    }
  `,
  outlined: css`
    color: ${(props) => props.theme['green-500']};
    background-color: transparent;
    border: solid 1px ${(props) => props.theme['green-500']};

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['green-500']};
      transition: 0.2s;
    }
  `,
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) => BUTTON_VARIANTS[props.variant]}

  svg {
    height: 1.25rem;
    width: 1.25rem;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
