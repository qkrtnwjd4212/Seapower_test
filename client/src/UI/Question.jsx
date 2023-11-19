import styled from "styled-components";
const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px;
  padding: 4px;
  border: 1px black solid;
  margin: 10;
  width: 85vw;
  height: 5vh;
  @media (min-width: 800px) {
    width: 30vw;
  }
  @media (max-width: 250px) {
    width: 100vw;
  }
`;

export default Question;
