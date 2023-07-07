import { styled } from "styled-components";

const Heading = styled.h1`
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ theme, color }) => theme.colors[color]};
  text-align: ${({ $textAlign }) => $textAlign};
  
  margin: ${({ $m, $my, $mx }) =>
    `${$m}` && (`${$my} 0 ${$my} 0` || `0 ${$mx} 0 ${$my}`)};
  margin-top: ${({ $mt }) => $mt || 0};
  margin-bottom: ${({ $mb }) => $mb || 0};
`;

export default Heading;
