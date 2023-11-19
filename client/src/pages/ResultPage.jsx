import { Fragment } from "react";
import styled from "styled-components";
import MainPageWeb_v from "../UI/MainPageWeb_v";
import { useParams } from "react-router-dom";
import { Result1 } from "../components/Result1";
import { Result2 } from "../components/Result2";
import { Result3 } from "../components/Result3";
import { Result4 } from "../components/Result4";
import { Result5 } from "../components/Result5";
import { Result6 } from "../components/Result6";
import { Result7 } from "../components/Result7";
import { Result8 } from "../components/Result8";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const ResultPage = () => {
  const params = useParams();
  console.log(params.id);
  const step = params.id;

  return (
    <Fragment>
      {step == 1 && (
        <Wrapper>
          <MainPageWeb_v>
            <Result1 />
          </MainPageWeb_v>
        </Wrapper>
      )}
      {step == 2 && (
        <Wrapper>
          <MainPageWeb_v>
            <Result2 />
          </MainPageWeb_v>
        </Wrapper>
      )}
      {step == 3 && (
        <Wrapper>
          <MainPageWeb_v>
            <Result3 />
          </MainPageWeb_v>
        </Wrapper>
      )}
      {step == 4 && (
        <Wrapper>
          <MainPageWeb_v>
            <Result4 />
          </MainPageWeb_v>
        </Wrapper>
      )}
      {step == 5 && (
        <Wrapper>
          <MainPageWeb_v>
            <Result5 />
          </MainPageWeb_v>
        </Wrapper>
      )}
      {step == 6 && (
        <Wrapper>
          <MainPageWeb_v>
            <Result6 />
          </MainPageWeb_v>
        </Wrapper>
      )}
      {step == 7 && (
        <Wrapper>
          <MainPageWeb_v>
            <Result7 />
          </MainPageWeb_v>
        </Wrapper>
      )}
      {step == 8 && (
        <Wrapper>
          <MainPageWeb_v>
            <Result8 />
          </MainPageWeb_v>
        </Wrapper>
      )}
    </Fragment>
  );
};
