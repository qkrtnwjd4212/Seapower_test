import { Fragment, useState } from "react";
import Container from "../UI/Container";
import quizImg from "../assets/quiz8_10_img.png";
import "../index.css";
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
          <img src={quizImg} style={{ height: "25vh" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            다음에서 설명하는 해양오염 현상은 무엇입니까?
            <span style={{ color: "red" }}>
              물속에 질소나 인이 많아 플랑크톤의 영양분이 많아지는 현상
            </span>
          </div>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>자정작용</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 2 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>빈영양화</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>기름유출</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "green" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>부영양화</QuestionContents>
          </Question>
          {isSelect && <div>{isAnswer ? "정답 ! " : "오답 ! "}이거</div>}
        </div>
      </Container>
    </Fragment>
  );
};
