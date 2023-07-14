import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'solid' | 'outlined' | 'danger'
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  function Button({ variant, children, ...props }, ref) {
    return (
      <ButtonContainer {...props} variant={variant} ref={ref}>
        {children}
      </ButtonContainer>
    )
  },
)
