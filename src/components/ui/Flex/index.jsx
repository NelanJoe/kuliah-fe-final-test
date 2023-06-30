import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${props.justify};
  align-items: ${props.align};

  @media only screen and (min-width: 768pcx) {
    justify-content: ${props};
  }
`;

export default Flex;
