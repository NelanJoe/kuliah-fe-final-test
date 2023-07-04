import { styled } from "styled-components";

export const StyledForm = styled.section`
  display: flex;
  flex-direction: column;

  .form__image {
    max-width: 100%;
  }

  .form__right {
    margin-top: 1.8rem;
  }

  .form__right h2 {
    font-size: 61px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .form__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
  }

  .form__group label {
    margin-bottom: 0.4rem;
  }

  .form__btn {
    border: none;
    width: 100%;
    padding: 10px 12px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    border-radius: 0.4rem;
  }

  input[type="text"],
  input[type="number"],
  select {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.4rem;
    width: 100%;
    padding: 0.3rem 0.4rem;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 5rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2.8rem;

    .form__left {
      flex-basis: 45%;
    }

    .form__right {
      margin-top: 0;
      flex-basis: 50%;
    }
  }
`;
