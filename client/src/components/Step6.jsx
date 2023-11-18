import { Fragment, useState } from "react";
import Container from "../UI/Container";
import quizImg from "../assets/quiz4_7_img.png";
import "../index.css";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step6 = ({ totalScoreHandler, setIsSelect, isSelect }) => {
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
            맷돌 같은 피부를 가지고 있고 항생 물질로 다른 물고기의 상처를
            치료해주는 물고기는 무엇일까요?
          </div>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>피라냐</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>연어</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>닥터피쉬</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 4 ? "green" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>개복치</QuestionContents>
          </Question>
          {isSelect && <div>{isAnswer ? "정답 ! " : "오답 ! "}이거</div>}
        </div>
      </Container>
    </Fragment>
  );
};
