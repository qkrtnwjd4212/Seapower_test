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

export const Moonhaeryuk = () => {
  const [step, setStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isSelect, setIsSelect] = useState(false);

  const onClickNextButton = () => {
    setStep((prev) => prev + 1);
    setIsSelect(false);
  };

  const totalScoreHandler = () => {
    setTotalScore((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(totalScore);
  }, [totalScore]);

  return (
    <Fragment>
      <div
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
            height: "100vh",
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
            />
          ) : step === 2 ? (
            <Step2
              totalScoreHandler={totalScoreHandler}
              setIsSelect={setIsSelect}
              isSelect={isSelect}
            />
          ) : step === 3 ? (
            <Step3
              totalScoreHandler={totalScoreHandler}
              setIsSelect={setIsSelect}
              isSelect={isSelect}
            />
          ) : step === 4 ? (
            <Step4
              totalScoreHandler={totalScoreHandler}
              setIsSelect={setIsSelect}
              isSelect={isSelect}
            />
          ) : step === 5 ? (
            <Step5
              totalScoreHandler={totalScoreHandler}
              setIsSelect={setIsSelect}
              isSelect={isSelect}
            />
          ) : step === 6 ? (
            <Step6
              totalScoreHandler={totalScoreHandler}
              setIsSelect={setIsSelect}
              isSelect={isSelect}
            />
          ) : step === 7 ? (
            <Step7
              totalScoreHandler={totalScoreHandler}
              setIsSelect={setIsSelect}
              isSelect={isSelect}
            />
          ) : step === 8 ? (
            <Step8
              totalScoreHandler={totalScoreHandler}
              setIsSelect={setIsSelect}
              isSelect={isSelect}
            />
          ) : step === 9 ? (
            <Step9
              totalScoreHandler={totalScoreHandler}
              setIsSelect={setIsSelect}
              isSelect={isSelect}
            />
          ) : step === 10 ? (
            <Step10
              totalScoreHandler={totalScoreHandler}
              setIsSelect={setIsSelect}
              isSelect={isSelect}
            />
          ) : (
            ""
          )}

          <button
            onClick={onClickNextButton}
            disabled={step !== 0 && !isSelect}
          >
            {step === 0 ? "시작" : step === 10 ? "결과보기" : "다음"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};
