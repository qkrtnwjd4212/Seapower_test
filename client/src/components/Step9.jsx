import { Fragment, useState } from "react";
import Container from "../UI/Container";
import Solution from "../UI/Solution";
import quizImg from "../assets/quiz8_10_img.png";
import "../index.css";
import Quiz from "../UI/Quiz";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step9 = ({
  totalScoreHandler,
  setIsSelect,
  isSelect,
  environmentScoreHandler,
}) => {
  const [isAnswer, setIsAnswer] = useState(false);
  const [selectedValue, setSectedValue] = useState(null);

  const answer = 4;

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
          <Quiz style={{ flexDirection: "column" }}>
            다음에서 설명하는 해양오염 현상은 무엇입니까?
            <div style={{ color: "#C34747" }}>
              물속에 질소나 인이 많아 플랑크톤의 영양분이 많아지는 현상
            </div>
          </Quiz>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>자정작용</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 2 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>빈영양화</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>기름유출</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "#8DBD40" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>부영양화</QuestionContents>
          </Question>
          {isSelect && (
            <Solution>
              {isAnswer ? (
                <div style={{ color: "#8DBD40" }}>정답 !</div>
              ) : (
                <div style={{ color: "#C34747" }}>오답 !</div>
              )}
              <div> 부영양화는 화학 비료나 오수의 유입 등으로 물에 인과 질소와 같은 영양분이 과잉 공급되어, 식물의 급속한 성장 또는 소멸을 유발하고 조류가 과도하게 번식하게 하여 산소를 빼앗아 생물을 죽게 하는 현상을 의미합니다. 🦠 </div>
            </Solution>
          )}
        </div>
      </Container>
    </Fragment>
  );
};
