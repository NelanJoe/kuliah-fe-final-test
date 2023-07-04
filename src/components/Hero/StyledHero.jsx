import { styled } from "styled-components";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 1rem;
  text-align: center;
  margin-top: 1.2rem;

  .hero__left .title {
    font-size: 61px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  .hero__left .subtitle {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1.2rem;
  }

  .hero__left .description {
    color: $color-gray;
    margin-bottom: 1.2rem;
    word-break: break-all;
    text-align: center;
  }

  .hero__left .btn {
    padding: 0.8rem 1.8rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    border-radius: 0.4rem;
    border: none;
  }

  img {
    max-width: 100%;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
    margin-top: 1.8rem;
    padding: 1rem;

    .hero__left {
      flex-basis: 50%;
    }

    .hero__right {
      flex-basis: 50%;
    }

    .hero__left .description {
      text-align: justify;
    }
  }
`;

export default StyledHero;
