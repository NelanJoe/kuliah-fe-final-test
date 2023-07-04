import { styled } from "styled-components";

const StyledRegion = styled.div`
  .title,
  .subtitle {
    text-align: center;
  }

  .card {
    width: 350px;
    padding: 1.2rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.6rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  .card h2 {
    margin-bottom: 1.1rem;
    text-align: center;
    font-size: 26px;
  }

  .situations {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .situations div {
    margin: 0.5rem 0;
  }

  .situations-title {
    color: ${({ theme }) => theme.colors.slateGray};
  }

  .situations-confirmed,
  .situations-icon-confirmed {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .situations-recovered,
  .situations-icon-recovered {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  .situations-death,
  .situations-icon-death {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.danger};
  }

  @media only screen and (min-width: 768px) {
    .container {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export default StyledRegion;
