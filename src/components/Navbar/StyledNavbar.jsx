import { styled } from "styled-components";

const StyledNavbar = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1.2rem;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  nav > a {
    font-size: 48px;
    font-weight: 600;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div > a {
    font-size: 25px;
  }

  @media only screen and (min-width: 768px) {
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.1rem 1rem;
    }

    div {
      flex-direction: row;
      gap: 1.2rem;
    }

    a:hover {
      border-bottom: 1.4px solid $color-white;
    }
  }
`;

export default StyledNavbar;
