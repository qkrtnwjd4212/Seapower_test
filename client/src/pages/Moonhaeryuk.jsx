import { Fragment, useEffect, useState } from "react";
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

  const onClickNextButton = () => {
    setStep((prev) => prev + 1);
    setIsSelect(false);
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

  const [resultId, setResultId] = useState(0);
  let num;
  const selectMarineLife = () => {
    if (totalScore >= 0 && totalScore <= 3) {
      if (easy === true) num = 1; // 불가사리
      else num = 0; // 말미잘
    } else if (totalScore >= 4 && totalScore <= 6) {
      if (
        conservationScore === ecologyScore &&
        ecologyScore === environmentScore
      )
        num = 2; // 해마
      else if (
        conservationScore > ecologyScore &&
        conservationScore > environmentScore
      )
        num = 3; // 해파리
      else if (
        environmentScore > conservationScore &&
        environmentScore > ecologyScore
      )
        num = 4; // 남방방게
      else if (
        ecologyScore > environmentScore &&
        ecologyScore > conservationScore
      )
        num = 5; // 주황도요
    } else if (totalScore >= 7) {
      if (bonus == true) num = 7; // 강치
      else num = 6; // 상괭이
    }

    num += 1;
  };

  useEffect(() => {
    console.log(totalScore);
    if (num !== resultId) {
      setResultId(num + 1);
    }
  }, [totalScore]);

  return (
    <Fragment>
      <div
        style={{
          margin: "0",
          backgroundColor: "white",
          height: "95vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            margin: "0",
            height: "95vh",
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
              onClick={onClickNextButton}
              disabled={step !== 0 && !isSelect}
            >
              {step === 0 ? "시작" : "다음"}
            </button>
          ) : step === 10 ? (
            <>
              {selectMarineLife()}
              <Button
                style={{ display: "flex", justifyContent: "center" }}
                to={`/result/${resultId}`}
              >
                결과보기
              </Button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};
