import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme['gray-900']};
`

export const HeaderWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2.5rem;
  padding-bottom: 7.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 576px) {
    button {
      font-size: 0.875rem;
      padding: 0.5rem 1rem;
    }
    svg {
      max-width: 8rem;
    }
  }
`
