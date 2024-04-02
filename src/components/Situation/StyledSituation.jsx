import { styled } from "styled-components";

const StyledSituation = styled.div`
  margin: 5rem 0;
  padding: 10rem 2rem;
  background-color: #f8f9fa;
  border-radius: 0.5rem;

  h1,
  p {
    text-align: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
  }

  .card {
    width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1.2rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.6rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  .card h1 {
    text-transform: capitalize;
  }

  .card h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 42px;
  }

  .card .primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  .card .secondary {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .card .danger {
    color: ${({ theme }) => theme.colors.danger};
  }

  @media only screen and (min-width: 768px) {
    .container {
      flex-direction: row;
    }
  }
`;

export default StyledSituation;
