import { Fragment, useState } from "react";
import Container from "../UI/Container";
import Solution from "../UI/Solution";
import Quiz from "../UI/Quiz";
import quizImg from "../assets/quiz1_3_img.png";
import "../index.css";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step1 = ({
  totalScoreHandler,
  setIsSelect,
  isSelect,
  conservationScoreHandler,
}) => {
  const [isAnswer, setIsAnswer] = useState(false);
  const [selectedValue, setSectedValue] = useState(null);

  const answer = 1;

  const onClick = (value) => {
    setIsSelect((prev) => !prev);
    setSectedValue(value);
    const isAnswer = answer === parseInt(value);
    setIsAnswer(isAnswer);
    if (isAnswer) {
      totalScoreHandler();
      conservationScoreHandler();
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
            해양쓰레기 중 가장 높은 비율을 차지하는 쓰레기는 무엇일까요?
          </Quiz>
          <Question
            style={{
              backgroundColor: isSelect ? "green" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>플라스틱</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 2 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>유리</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>마스크</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 4 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>종이</QuestionContents>
          </Question>
          {isSelect && (
            <Solution>
              {isAnswer ? (
                <div style={{ color: "green" }}>정답 !</div>
              ) : (
                <div style={{ color: "red" }}>오답 !</div>
              )}
              <div>
                {/* 해양쓰레기 중 가장 높은 비율을 차지하는 쓰레기는
                플라스틱입니다😭 */}
                해양환경정보포털의 2022년부터 2023년 해안쓰레기 모니터링 통계에
                따르면 플라스틱 비율이 전체의 91%를 차지한다고 합니다😭
              </div>
            </Solution>
          )}
        </div>
      </Container>
    </Fragment>
  );
};
