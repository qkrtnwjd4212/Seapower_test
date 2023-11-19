import { Fragment, useEffect, useState, useRef } from "react";
import MainPageWeb_v from "../UI/MainPageWeb_v";
import "../index.css";
import { MainPage, Header } from "../components";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  Step10,
} from "../../src";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

export const Moonhaeryuk = () => {
  const [step, setStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isSelect, setIsSelect] = useState(false);

  const [conservationScore, setConservationScore] = useState(0); // 보전 점수
  const [ecologyScore, setEcologyScore] = useState(0); // 생태 점수
  const [environmentScore, setEnvironmentScore] = useState(0); // 환경 점수
  const [easy, setEasy] = useState(false); // 담배꽁초 문제
  const [bonus, setBonus] = useState(false); // 보너스 문제
  const [resultId, setResultId] = useState(0);
  // const resultId = useRef(0);
  // const [navigateToResult, setNavigateToResult] = useState(false);

  const onClickNextButton = () => {
    setStep((prev) => prev + 1);
    setIsSelect(false);
  };

  const onClickLast = () => {
    selectMarineLife();
  };

  const totalScoreHandler = () => {
    setTotalScore((prev) => prev + 1);
    console.log(totalScore);
  };

  const conservationScoreHandler = () => {
    setConservationScore((prev) => prev + 1);
    console.log(conservationScore);
  };
  const ecologyScoreHandler = () => {
    setEcologyScore((prev) => prev + 1);
    console.log(ecologyScore);
  };
  const environmentScoreHandler = () => {
    setEnvironmentScore((prev) => prev + 1);
    console.log(environmentScore);
  };

  const num = useRef(0);
  const selectMarineLife = () => {
    if (totalScore >= 0 && totalScore <= 3) {
      if (easy === true) num.current = 2; // 불가사리
      else num.current = 1; // 말미잘
    } else if (totalScore >= 4 && totalScore <= 6) {
      if (
        conservationScore === ecologyScore &&
        ecologyScore === environmentScore
      )
        num.current = 3; // 해마
      else if (
        conservationScore > ecologyScore &&
        conservationScore > environmentScore
      )
        num.current = 4; // 해파리
      else if (
        environmentScore > conservationScore &&
        environmentScore > ecologyScore
      )
        num.current = 5; // 남방방게
      else if (
        ecologyScore > environmentScore &&
        ecologyScore > conservationScore
      )
        num.current = 6; // 주황도요
    } else if (totalScore >= 7) {
      if (bonus == true) num.current = 8; // 강치
      else num.current = 7; // 상괭이
    }

    // num += 1;
  };

  useEffect(() => {
    selectMarineLife();

    if (step === 10) setResultId(num.current);
    // setResultId(num);
    console.log("re : ", totalScore);
  }, [totalScore, isSelect]);

  useEffect(() => {
    setResultId(num.current);
  }, [num]);

  useEffect(() => {
    if (step === 0) num.current = 0;
  }, [step]);

  console.log("출력 ", totalScore, resultId, num);

  return (
    <Fragment>
      <div
        style={{ width: "100vw", display: "flex", justifyContent: " center" }}
      >
        <MainPageWeb_v
          style={{
            margin: "0",
            backgroundColor: "white",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              margin: "0",
              height: "98vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Header />
            {step === 0 ? <MainPage /> : ""}
            {step === 1 ? (
              <Step1
                totalScoreHandler={totalScoreHandler}
                setIsSelect={setIsSelect}
                isSelect={isSelect}
                conservationScoreHandler={conservationScoreHandler}
              />
            ) : step === 2 ? (
              <Step2
                totalScoreHandler={totalScoreHandler}
                setIsSelect={setIsSelect}
                isSelect={isSelect}
                conservationScoreHandler={conservationScoreHandler}
                setEasy={setEasy}
              />
            ) : step === 3 ? (
              <Step3
                totalScoreHandler={totalScoreHandler}
                setIsSelect={setIsSelect}
                isSelect={isSelect}
                conservationScoreHandler={conservationScoreHandler}
              />
            ) : step === 4 ? (
              <Step4
                totalScoreHandler={totalScoreHandler}
                setIsSelect={setIsSelect}
                isSelect={isSelect}
                ecologyScoreHandler={ecologyScoreHandler}
              />
            ) : step === 5 ? (
              <Step5
                totalScoreHandler={totalScoreHandler}
                setIsSelect={setIsSelect}
                isSelect={isSelect}
                ecologyScoreHandler={ecologyScoreHandler}
              />
            ) : step === 6 ? (
              <Step6
                totalScoreHandler={totalScoreHandler}
                setIsSelect={setIsSelect}
                isSelect={isSelect}
                ecologyScoreHandler={ecologyScoreHandler}
              />
            ) : step === 7 ? (
              <Step7
                totalScoreHandler={totalScoreHandler}
                setIsSelect={setIsSelect}
                isSelect={isSelect}
                ecologyScoreHandler={ecologyScoreHandler}
                setBonus={setBonus}
              />
            ) : step === 8 ? (
              <Step8
                totalScoreHandler={totalScoreHandler}
                setIsSelect={setIsSelect}
                isSelect={isSelect}
                environmentScoreHandler={environmentScoreHandler}
              />
            ) : step === 9 ? (
              <Step9
                totalScoreHandler={totalScoreHandler}
                setIsSelect={setIsSelect}
                isSelect={isSelect}
                environmentScoreHandler={environmentScoreHandler}
              />
            ) : step === 10 ? (
              <Step10
                totalScoreHandler={totalScoreHandler}
                setIsSelect={setIsSelect}
                isSelect={isSelect}
                environmentScoreHandler={environmentScoreHandler}
              />
            ) : (
              ""
            )}
            {/* {step === 11 ? <ResultPage totalScore={totalScore} /> : ""} */}

            {step < 10 ? (
              <button
                style={{
                  width: "85vw",
                  margin: "3vh",
                  height: "5vh",
                  borderRadius: "10px",
                  backgroundColor: "var(--light-sand)",
                }}
                onClick={onClickNextButton}
                disabled={step !== 0 && !isSelect}
              >
                {step === 0 ? "시작" : "다음"}
              </button>
            ) : step === 10 ? (
              <>
                {selectMarineLife()}
                <button
                  style={{
                    height: "5vh",
                    borderRadius: "10px",
                    backgroundColor: "var(--light-sand)",
                  }}
                  onClick={onClickLast}
                >
                  <Button
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    to={`/result/${resultId}`}
                  >
                    결과보기
                  </Button>
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </MainPageWeb_v>
      </div>
    </Fragment>
  );
};
