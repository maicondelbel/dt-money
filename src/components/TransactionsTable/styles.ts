import styled from 'styled-components'

export const TransactionsTableContainer = styled.table`
  margin-top: 0.875rem;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td:first-child {
    width: 40%;
  }

  td {
    padding: 1.25rem 0;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      padding-left: 1.5rem;
    }

    &:last-child {
      width: 1%;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      padding-right: 1.5rem;
    }

    &:not(:last-child) svg {
      margin: 0;
      margin-right: 0.5rem;
      vertical-align: middle;
    }
  }

  @media (max-width: 576px) {
    td {
      display: block;
      padding: 0;

      svg {
        display: inline-block;
      }
    }

    td:first-child {
      padding: 1.5rem 1.5rem 0 1.5rem;
      width: 100%;
    }

    td:nth-child(2) {
      padding: 0 1.5rem;
      font-size: 1.25rem;
      font-weight: bold;
    }

    td:nth-child(3) {
      display: inline-block;
      width: 50%;
      padding: 0.5rem 0.25rem 1.5rem 1.5rem;
    }

    td:nth-child(4) {
      text-align: right;
      display: inline-block;
      width: 50%;
      padding: 0.5rem 1.5rem 1.5rem 0.25rem;
    }

    td:nth-child(5) {
      text-align: center;
      display: inline-block;
      width: 100%;
      padding: 0.5rem 1.5rem 1.5rem 0.25rem;

      button {
        justify-content: center;
        width: 100%;
      }
    }
  }
`
interface IPriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<IPriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
