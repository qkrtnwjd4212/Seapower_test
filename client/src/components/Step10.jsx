import { Fragment, useState } from "react";
import Container from "../UI/Container";
import quizImg from "../assets/quiz8_10_img.png";
import Solution from "../UI/Solution";
import "../index.css";
import Quiz from "../UI/Quiz";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step10 = ({
  totalScoreHandler,
  setIsSelect,
  isSelect,
  environmentScoreHandler,
}) => {
  const [isAnswer, setIsAnswer] = useState(false);
  const [selectedValue, setSectedValue] = useState(null);

  const answer = 2;

  const onClick = (value) => {
    setIsSelect((prev) => !prev);
    setSectedValue(value);
    const isAnswer = answer === parseInt(value);
    setIsAnswer(isAnswer);
    if (isAnswer) {
      totalScoreHandler();
      environmentScoreHandler();
    }
  };

  const nonEvent = () => {
    //
  };

  return (
    <Fragment>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <img src={quizImg} style={{ height: "25vh", margin: "3vh" }} />
          <Quiz>
            블루카본이란 바다와 해양 생태계에 의해 흡수되는 탄소 및 흡수원으로
            블루카본의 탄소 흡수량은 육상의 식물보다 50배 가량 많다고 합니다.
            우리나라의 갯벌은 매년 26~49만톤의 탄소를 흡수합니다. 갯벌은 IPCC에
            의해 블루카본으로 인정받았을까요?
          </Quiz>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>O</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "#8DBD40" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>X</QuestionContents>
          </Question>
          {isSelect && (
            <Solution>
              {isAnswer ? (
                <div style={{ color: "#8DBD40" }}>정답 !</div>
              ) : (
                <div style={{ color: "#C34747" }}>오답 !</div>
              )}
              <div>
                우리나라의 갯벌은 아직 IPCC에 의해 블루카본으로 인정받지
                못했지만🥺, 뛰어난 탄소 흡수 능력으로 차세대 블루카본으로 떠오르는 중입니다. 또한 갯벌의 가치를 인정받기 위한 다양한 사업과 연구들도 추진중이라고 해요!
              </div>
            </Solution>
          )}
        </div>
      </Container>
    </Fragment>
  );
};
