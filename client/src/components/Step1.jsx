import { Fragment, useState } from "react";
import styled from "styled-components";
import Container from "../UI/Container";

const Question = styled.div`
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
  justifycontent: center;
  alignitems: center;
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
              backgroundColor: selectedValue === 1 ? "red" : "#0096c7",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            1번
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "green" : "#0096c7",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            2번
          </Question>
          <Question
            style={{
              backgroundColor: selectedValue === 3 ? "red" : "#0096c7",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            3번
          </Question>
          <Question
            style={{
              backgroundColor: selectedValue === 4 ? "red" : "#0096c7",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            4번
          </Question>
          {isSelect && <div>{isAnswer ? "정답 ! " : "오답 ! "}이거</div>}
        </div>
      </Container>
    </Fragment>
  );
};
