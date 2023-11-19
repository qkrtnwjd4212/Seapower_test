import { Fragment, useState } from "react";
import Quiz from "../UI/Quiz";
import Solution from "../UI/Solution";
import Container from "../UI/Container";
import quizImg from "../assets/quiz1_3_img.png";
import "../index.css";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step3 = ({
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
            선크림에 들어있는 옥시벤존, 옥티녹세이트는 산호의 ____을 일으켜 해양
            생태계에 악영향을 끼칩니다. 산호가 수온의 급격한 변화로 하얗게
            죽어가는 이러한 현상을 무엇이라고 할까요?
          </Quiz>
          <Question
            style={{
              backgroundColor: isSelect ? "green" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>백화현상</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 2 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>흑화현상</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>적화현상</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 4 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>녹화현상</QuestionContents>
          </Question>
          {isSelect && (
            <Solution>
              {isAnswer ? (
                <div style={{ color: "green" }}>정답 !</div>
              ) : (
                <div style={{ color: "red" }}>오답 !</div>
              )}
              <div>산호🪸가 하얗게 변하는 백화현상입니다</div>
            </Solution>
          )}
        </div>
      </Container>
    </Fragment>
  );
};
