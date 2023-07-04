import { styled } from "styled-components";

export const StyledProvince = styled.section`
  margin: 4rem 0;

  .province h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 61px;
    text-align: center;
  }

  .province p {
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
  }

  .table-container {
    overflow: auto;
  }

  table {
    width: 100%;
    margin-top: 1.6rem;
    border-collapse: collapse;
    word-wrap: break-word;
  }

  th {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    text-align: center;
    border: 1px solid #ccc;
    padding: 0.8rem 0;
  }

  td {
    padding: 4px;
    border: 1px solid #ccc;
    text-align: center;
  }

  tbody {
    tr > .city {
      text-align: left;
    }
  }
`;
