import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: ${({ $gap }) => $gap};

  margin: ${({ $m, $my, $mx }) =>
    `${$m}` && (`${$my} 0 ${$my} 0` || `0 ${$mx} 0 ${$my}`)};
  margin-top: ${({ $mt }) => $mt || 0};
  margin-bottom: ${({ $mb }) => $mb || 0};
`;

export default Flex;
