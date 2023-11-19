import { Fragment } from "react";
import MainPageWave from "../assets/MainPageWave.png";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    width: 400px;
  }
`;
export const MainPage = () => {
  return (
    <Fragment>
      <div>
        <Container>
          <img
            src={MainPageWave}
            alt="WaveImage"
            style={{ width: "100vw", height: "75vh", marginTop: "5vh" }}
          />
        </Container>
      </div>
    </Fragment>
  );
};
