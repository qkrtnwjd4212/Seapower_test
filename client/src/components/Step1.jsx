import { Fragment, useState } from "react";
import styled from "styled-components";
import Container from "../UI/Container";
import quizImg from "../assets/quiz1_3_img.png";
import "../index.css";

const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px;
  padding: 4px;
  border: 1px black solid;
  margin: 10;
  width: 85vw;
  height: 5vh;
  @media (min-width: 800px) {
    width: 30vw;
  }
  @media (max-width: 250px) {
    width: 100vw;
  }
`;
const QuestionContents = styled.div`
  font-family: "Black Han Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Step1 = ({ totalScoreHandler, setIsSelect, isSelect }) => {
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
            gap: 20,
            height: 300,
          }}
        >
          <img src={quizImg} style={{ height: "30vh" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            1번. 내일 점심!!
          </div>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>짜장면</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "green" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>부대찌개ㅔ</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>돼지국밥</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 4 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>콘푸로스트</QuestionContents>
          </Question>
          {isSelect && <div>{isAnswer ? "정답 ! " : "오답 ! "}이거</div>}
        </div>
      </Container>
    </Fragment>
  );
};
