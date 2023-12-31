import { Fragment, useState } from "react";
import Container from "../UI/Container";
import Solution from "../UI/Solution";
import quizImg from "../assets/quiz4_7_img.png";
import Quiz from "../UI/Quiz";
import "../index.css";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step6 = ({
  totalScoreHandler,
  setIsSelect,
  isSelect,
  ecologyScoreHandler,
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
      ecologyScoreHandler();
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
            맷돌 같은 피부를 가지고 있고 항생 물질로 다른 물고기의 상처를
            치료해주는 물고기는 무엇일까요?
          </Quiz>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>피라냐</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 2 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>연어</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>닥터피쉬</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "#8DBD40" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>개복치</QuestionContents>
          </Question>
          {isSelect && (
            <Solution>
              {isAnswer ? (
                <div style={{ color: "#8DBD40" }}>정답 !</div>
              ) : (
                <div style={{ color: "#C34747" }}>오답 !</div>
              )}
              <div>
                닥터피시를 선택하신 분 있으신가요? 닥터피시는 피부를 핥아 각질과 죽은 세포를 먹고 새 살만 남겨 피부병 중 하나인 마름거짐을 치료해준다고 알려져있죠. <br/>
                맷돌 같은 피부를 가졌고 항생 물질로 다른 물고기의 상처를 치료해주는 물고기는 개복치입니다🐟
              </div>
            </Solution>
          )}
        </div>
      </Container>
    </Fragment>
  );
};
