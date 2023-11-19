import { Fragment, useState } from "react";
import Container from "../UI/Container";
import Solution from "../UI/Solution";
import quizImg from "../assets/quiz8_10_img.png";
import "../index.css";
import Quiz from "../UI/Quiz";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step8 = ({
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
            육상 생태계의 먹이 사슬은 식물과 초식 동물, 포식 동물의 세 단계가
            기본적으로 굉장히 단순합니다. 해양 생태계의 먹이 사슬도 육상 생태계와 동일할까요?
          </Quiz>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>O</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "green" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>X</QuestionContents>
          </Question>
          {isSelect && (
            <Solution>
              {isAnswer ? (
                <div style={{ color: "green" }}>정답 !</div>
              ) : (
                <div style={{ color: "red" }}>오답 !</div>
              )}
              <div>
                해양 생태계의 먹이사슬 구조는 지역이나 바다의 환경에 따라 달라지고, 육상 생태계보다 훨씬 복잡합니다! <br/> 생산자 역할의 식물성 플랑크톤을 시작으로, 식물성 플랑크톤을 먹고 살아가는 동물성 플랑크톤, 그걸 먹고 생활하는 작은 물고기들과 또 더 큰 물고기들... <br/>바다는 생물 다양성이 매우 풍부하여, 먹이 사슬이 기본적으로 4~5단계 정도에 해당해요 🦐🦈
              </div>
            </Solution>
          )}
        </div>
      </Container>
    </Fragment>
  );
};
