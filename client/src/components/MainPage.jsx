import { Fragment } from "react";
import MainPageWave from "../assets/MainPageWave.png";
import styled from "styled-components";
import MainGIF from "../assets/maingif.gif";

const Container = styled.div`
  margin: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    width: 350px;
  }

  position: relative;
`;

const GIFimg = styled.img`
  width: 90vw;
  background-image: contain;
  z-index: 1;
  @media (min-width: 800px) {
    width: 350px;
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -22%);
`;

export const MainPage = () => {
  return (
    <Fragment>
      <div>
        <Container>
          <GIFimg src={MainGIF} alt="loading" />
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
