import { Fragment, useState } from "react";
import Quiz from "../UI/Quiz";
import Solution from "../UI/Solution";
import Container from "../UI/Container";
import quizImg from "../assets/quiz1_3_img.png";
import "../index.css";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step2 = ({
  totalScoreHandler,
  setIsSelect,
  isSelect,
  conservationScoreHandler,
  setEasy,
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
      conservationScoreHandler();
      setEasy(true);
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
          <Quiz>바다에서 가장 많이 버려지는 쓰레기는 무엇일까요?</Quiz>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>슬라임</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "green" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>담배꽁초</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>아이패드</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 4 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>탕후루 나무꼬치</QuestionContents>
          </Question>
          {isSelect && (
            <Solution>
              {isAnswer ? (
                <div style={{ color: "green" }}>정답 !</div>
              ) : (
                <div style={{ color: "red" }}>오답 !</div>
              )}
              <div>바다에 가장 많이 버려지는 쓰레기는 담배꽁초입니다😵</div>
            </Solution>
          )}
        </div>
      </Container>
    </Fragment>
  );
};
