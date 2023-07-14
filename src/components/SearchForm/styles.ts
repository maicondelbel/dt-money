import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 4rem;
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  @media (max-width: 576px) {
    button {
      padding: 0 1.2rem;
      text-indent: -9999em;
      text-transform: uppercase;
      gap: 0;
    }
  }
`
