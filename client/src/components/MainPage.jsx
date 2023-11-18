import { Fragment } from "react";
import MainPageWave from "../assets/MainPageWave.png";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    width: 30vw;
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
            style={{ width: "100vw", height: "80vh" }}
          />
        </Container>
      </div>
    </Fragment>
  );
};