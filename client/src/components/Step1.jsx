import { Fragment, useState } from "react";
import styled from "styled-components";
import Container from "../UI/Container";
import "../index.css";

const Question = styled.div`
  color: white;
  border-radius: 10px;
  padding: 4px;
  border: 1px black solid;
  margin-left: 5vw;
  margin-right: 5vw;
  margin: 10;
  width: 85vw;
  height: 5vh;
`;
const QuestionContents = styled.div`
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
            gap: 20,
            height: 300,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            1번문제
          </div>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>
              저는 백경이와 친구들 팀입니다 저ㅇ희는 완전 짱잉요 ㅎㅎㅎㅎ
            </QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "green" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>2번</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>3번</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 4 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>4번</QuestionContents>
          </Question>
          {isSelect && <div>{isAnswer ? "정답 ! " : "오답 ! "}이거</div>}
        </div>
      </Container>
    </Fragment>
  );
};
