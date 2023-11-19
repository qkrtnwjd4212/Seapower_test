import { Fragment, useState } from "react";
import Quiz from "../UI/Quiz";
import Solution from "../UI/Solution";
import Container from "../UI/Container";
import quizImg from "../assets/gangchiquiz.png";
import "../index.css";
import Question from "../UI/Question";
import QuestionContents from "../UI/QuestionContents";

export const Step7 = ({
  totalScoreHandler,
  setIsSelect,
  isSelect,
  ecologyScoreHandler,
  setBonus,
}) => {
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
      ecologyScoreHandler();
      setBonus(true);
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
          <Quiz>다음 사진은 어떤 생물 종을 나타내고 있을까요?</Quiz>
          <Question
            style={{
              backgroundColor:
                selectedValue === 1 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(1)}
          >
            <QuestionContents>물범</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 2 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(2)}
          >
            <QuestionContents>물개</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor: isSelect ? "#8DBD40" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(3)}
          >
            <QuestionContents>바다사자(강치)</QuestionContents>
          </Question>
          <Question
            style={{
              backgroundColor:
                selectedValue === 4 ? "#C34747" : "var(--bright-blue)",
            }}
            onClick={isSelect ? nonEvent : () => onClick(4)}
          >
            <QuestionContents>바다코끼리</QuestionContents>
          </Question>
          {isSelect && (
            <Solution>
              {isAnswer ? (
                <div style={{ color: "#8DBD40" }}>정답 !</div>
              ) : (
                <div style={{ color: "#C34747" }}>오답 !</div>
              )}
              <div>사진의 생물은 독도에서 서식하던 우리나라의 토종 바다사자, 강치입니다!🦭 <br/> 환경부에 따르면, 19세기까지만 해도 독도를 강치의 옛말인 가지도로 부를 정도로 독도에 강치가 많이 서식했다고 해요. <br/> 하지만 무분별한 포획으로 1975년 이후 멸종한 것으로 추정되고 있습니다.  </div>
            </Solution>
          )}
        </div>
      </Container>
    </Fragment>
  );
};
