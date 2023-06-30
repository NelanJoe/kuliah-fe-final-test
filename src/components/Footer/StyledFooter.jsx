import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 5rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.8rem 1.2rem;
  text-align: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  & .credit {
    margin-bottom: 1.2rem;
  }

  & .credit > a {
    font-size: 42px;
    font-weight: 700;
  }

  p > span {
    color: red;
  }

  & .actions {
    display: flex;
    flex-direction: column;
  }

  & .actions > a {
    margin: 0.5rem 0;
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .actions {
      flex-direction: row;
      gap: 2.2rem;

      a {
        margin: 0;
      }
    }
  }
`;

export default StyledFooter;
