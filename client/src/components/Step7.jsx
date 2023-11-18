import { Fragment, useState } from "react";
import Container from "../UI/Container";
import quizImg from "../assets/gangchiquiz.png";
import "../index.css";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step7 = ({ totalScoreHandler, setIsSelect, isSelect }) => {
  const [isAnswer, setIsAnswer] = useState(false);
  const [selectedValue, setSectedValue] = useState(null);

  const answer = 3;

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
            다음 사진은 어떤 생물 종을 나타내고 있을까요?
          </div>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>물범</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>물개</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "green" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>바다사자(강치)</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 4 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>바다코끼리</QuestionContents>
          </Question>
          {isSelect && <div>{isAnswer ? "정답 ! " : "오답 ! "}이거</div>}
        </div>
      </Container>
    </Fragment>
  );
};
