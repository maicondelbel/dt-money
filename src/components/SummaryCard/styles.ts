import styled from 'styled-components'

interface ISummaryCardContainer {
  bgColor: 'default' | 'green' | 'red'
}

export const SummaryCardContainer = styled.div<ISummaryCardContainer>`
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-radius: 6px;
  background-color: ${(props) =>
    (props.bgColor === 'green' && props.theme['green-700']) ||
    (props.bgColor === 'red' && props.theme['red-500']) ||
    (props.bgColor === 'default' && props.theme['gray-600'])};

  header {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }
  strong {
    font-size: 2rem;
  }
`
