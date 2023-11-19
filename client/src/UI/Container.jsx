import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-direction: column;
  @media (min-width: 800px) {
    width: 350px;
  }
`;

export default Container;
