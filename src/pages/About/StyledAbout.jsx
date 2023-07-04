import { styled } from "styled-components";

export const StyledAbout = styled.div`
  margin: 3rem 0;
  text-align: center;
  padding: 10rem 0;

  h2:first-child {
    font-size: 52px;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.2rem;
  }

  div {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
  }

  a {
    font-size: 62px;
    color: ${({ theme }) => theme.colors.slateGray};
  }

  @media only screen and (min-width: 768px) {
    h2:first-child {
      font-size: 62px;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 1.2rem;
    }
  }
`;
