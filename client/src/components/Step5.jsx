import { Fragment, useState } from "react";
import Container from "../UI/Container";
import Solution from "../UI/Solution";
import quizImg from "../assets/quiz4_7_img.png";
import Quiz from "../UI/Quiz";
import "../index.css";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step5 = ({
  totalScoreHandler,
  setIsSelect,
  isSelect,
  ecologyScoreHandler,
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
      ecologyScoreHandler();
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
            산호는 해양 생태계를 풍성하게 만드는 중요한 생물으로 ‘바다의
            열대우림’이라고도 불립니다. 산호에 대한 설명으로 옳지 않은 것은
            무엇일까요?
          </Quiz>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>
              바다생물의 25%가 산호에 의존해 살고 있다
            </QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "#8DBD40" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>산호는 해양에 서식하는 식물이다</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>대부분의 산호는 투명하다</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 4 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>산호는 동물 중 수명이 제일 길다</QuestionContents>
          </Question>
          {isSelect && (
            <Solution>
              {isAnswer ? (
                <div style={{ color: "#8DBD40" }}>정답 !</div>
              ) : (
                <div style={{ color: "#C34747" }}>오답 !</div>
              )}
              <div>
                산호는 다양한 해양생물에게 안식처를 제공해주며 바다의
                열대우림이라고 불리고 있습니다. 건강한 산호초 생태계는 해양의
                생물다양성을 높여줄 수 있습니다
                <br />
                산호는 식물이 아닌 산호충의 군집으로, 동물입니다✨
                <br />
                산호의 색은 산호에 깃들어 사는 조류의 색입니다
                <br />
                산호는 환경만 좋으면 수백 년을 산다고 합니다🪸
              </div>
            </Solution>
          )}
        </div>
      </Container>
    </Fragment>
  );
};
