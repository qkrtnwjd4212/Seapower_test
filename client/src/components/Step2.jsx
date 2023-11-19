import { Fragment, useState } from "react";
import Quiz from "../UI/Quiz";
import Solution from "../UI/Solution";
import Container from "../UI/Container";
import quizImg from "../assets/quiz1_3_img.png";
import "../index.css";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step2 = ({
  totalScoreHandler,
  setIsSelect,
  isSelect,
  conservationScoreHandler,
  setEasy,
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
      conservationScoreHandler();
      setEasy(true);
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
          <Quiz>바다에서 가장 많이 버려지는 쓰레기는 무엇일까요?</Quiz>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>슬라임</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "green" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>담배꽁초</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 3 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>아이패드</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 4 ? "red" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>탕후루 나무꼬치</QuestionContents>
          </Question>
          {isSelect && (
            <Solution>
              {isAnswer ? (
                <div style={{ color: "green" }}>정답 !</div>
              ) : (
                <div style={{ color: "red" }}>오답 !</div>
              )}
              <div>
                {/* 바다에 가장 많이 버려지는 쓰레기는 담배꽁초입니다😵 */}
                환경운동연합이 20220년 7월 한 달 동안 전국 해양 쓰레기를 분석한
                결과 전체 3천8백여 점 중 담배꽁초가 가장 높았으며
                {/* 한국해양구조단에서 수거 활동을 진행한 결과에서도 전체의 21%를
                담배꽁초가 차지한다고 합니다😵 */}
                <br />
                심지어 담배꽁초의 필터는 90% 이상이 플라스틱으로 만들어져,
                바다로 흘러가면 미세플라스틱으로 분해되어 해양생태계를
                오염시킨답니다😵
              </div>
            </Solution>
          )}
        </div>
      </Container>
    </Fragment>
  );
};
