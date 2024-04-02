import styled from "styled-components";

const Card = styled.div`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: ${({ $p }) => $p};
  padding-top: ${({ $pt }) => $pt};
  padding-bottom: ${({ $pb }) => $pb};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.6rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export default Card;
