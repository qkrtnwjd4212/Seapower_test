import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 800px) {
    width: 30vw;
  }
  @media (max-width: 250px) {
    width: 100vw;
  }
`;

export default Container;
