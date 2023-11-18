import { Fragment, useEffect, useState } from "react";
import { Step1, Step2, Step3 } from "./components";

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
      <div style={{ backgroundColor: "lightyellow", height: "100vh" }}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {step === 0 ? <div>메인페이지</div> : ""}
          {step === 1 ? (
            <Step1
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
