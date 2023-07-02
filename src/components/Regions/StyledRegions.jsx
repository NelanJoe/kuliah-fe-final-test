import { styled } from "styled-components";

const StyledRegions = styled.div`
  margin-bottom: 8rem;

  .title {
    font-size: 52px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }

  .subtitle {
    font-size: 25px;
    text-align: center;
    margin-bottom: 2.2rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.6rem;
  }

  @media only screen and (min-width: 768px) {
    .container {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .title {
      font-size: 62px;
    }
  }
`;

export default StyledRegions;
