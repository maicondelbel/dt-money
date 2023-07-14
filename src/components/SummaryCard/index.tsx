import { ReactNode } from 'react'
import { SummaryCardContainer } from './styles'

interface ISummaryCardProps {
  bgColor: 'default' | 'green' | 'red'
  icon: ReactNode
  title: string
  amount: string
}

export function SummaryCard({
  amount,
  bgColor = 'default',
  icon,
  title,
}: ISummaryCardProps) {
  return (
    <SummaryCardContainer bgColor={bgColor}>
      <header>
        <span>{title}</span>
        {icon}
      </header>
      <strong>{amount}</strong>
    </SummaryCardContainer>
  )
}
