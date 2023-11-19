import styled from "styled-components";
import Container from "../UI/Container";
import { Header } from "./Header";
import Malmijal from "../assets/malmijal.png";
import Boat from "../assets/boat.png";
import React, { useEffect, Fragment } from "react";
import Caresea from "../assets/caresea.png";
import Oceancloud from "../assets/oceancloud.png";
import { handleKaKaoShareBtn } from "../utils/kakaoShare";

const { kakao } = window;

function Kakao() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 5, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "300px",
        height: "300px",
        marginTop: "10px",
        marginBottom: "30px",
      }}
    ></div>
  );
}

export const Result1 = () => {
  const handleItemClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Wrapper>
      <Container>
        <Header />
        <TitleText>
          아직은 바다와 친하지 않은 당신, 더 공부가 필요해요!
        </TitleText>
        <TitleBox>유사벌레붙이말미잘</TitleBox>
        <ResultImg src={Malmijal} alt="malmijal_img" />
        <DetailBox>
          바다와 친하지 않은 당신, 유사벌레붙이말미잘과 친해져 보는 것은
          어떨까요? <br /> 유사벌레붙이말미잘은 30년 만에 인천 바다에서 확인된
          종입니다. 긴 원통형의 몸체와 촉수다발을 가지고 있습니다. 조간대의 모래
          진흙 갯벌에 몸체를 박고 살아갑니다.
          <br /> 한국 해역에서 처음으로 보고된 종입니다. 한반도 고유종으로 개체
          수가 많지 않은 종이에요.
          <br /> 유사벌레붙이 말미잘이 살아가는 해역의 쓰레기 현황을
          확인해볼까요?
        </DetailBox>

        <TitleText>유사벌레붙이말미잘이 살고 있는 바다는 지금...</TitleText>
        <Kakao />
        <TrashDetail>플라스틱 : 플라스틱 부표, 그물, 통발 등</TrashDetail>

        <TitleText>바다 캠페인 참여하기</TitleText>
        <ActivityContainer>
          <Item
            onClick={() =>
              handleItemClick("https://www.caresea.or.kr/web/main.do")
            }
          >
            <ActivityImg src={Caresea} />
            <ActivityText>바다가꿈 참여하기</ActivityText>
          </Item>
          <Item
            onClick={() => handleItemClick("https://cloud.oceanknights.net/")}
          >
            <ActivityImg src={Oceancloud} />
            <ActivityText>바다기사단 참여하기</ActivityText>
          </Item>
        </ActivityContainer>

        <BoatImg src={Boat} />

        <ShareBtn
          onClick={() =>
            handleKaKaoShareBtn({
              FRIENDS: "저는 유사벌레붙이말미잘이 나왔어요!",
              THUMB: "https://ifh.cc/g/1jt2Dm.png",
            })
          }
        >
          내 결과 공유하기
        </ShareBtn>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  @media (min-width: 800px) {
    width: 350px;
  }
  background: linear-gradient(to bottom, #ffffff 370px, #00b4d8 600px);
  max-width: 800px;
`;

const TitleText = styled.div`
  margin-top: 6vh;
  text-align: center;
`;

const TitleBox = styled.div`
  padding: 10px;

  width: 90vw;
  @media (min-width: 800px) {
    width: 200px;
  }
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background: var(--light_sand, #ffeed9);
  display: flex;
  font-size: 20px;
  margin: 10px 0 10px 0;
  font-weight: 600;
`;

const ResultImg = styled.img`
  width: 90vw;
  @media (min-width: 800px) {
    width: 350px;
  }
  margin-top: 50px;
  background-image: contain; // 이미지의 가로세로 비율을 유지하면서, 이미지가 잘리지 않을 때까지만 채운다.
  max-width: 500px;
`;

const DetailBox = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  background: var(--light_sand, #ffeed9);
  width: 85vw;
  margin-top: 4vh;
  border: none;
  padding: 4vw;
  text-align: left;
  line-height: 1.6;
  font-size: 18px;
  @media (min-width: 800px) {
    width: 250px;
  }
`;

const TrashDetail = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  background: var(--light_sand, #ffeed9);

  width: 85vw;
  @media (min-width: 800px) {
    width: 250px;
  }
  height: 150px;
  margin-top: 4vh;
  border: none;
  padding: 4vw;
  text-align: center;
`;

const BoatImg = styled.img`
  width: 85%;
  height: 150px;
  filter: blur(0.5px);
`;

const ActivityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
`;
const Item = styled.div`
  width: 45%; /* 또는 다른 적절한 너비 값 */
  margin-bottom: 20px;
  margin-top: 10px;
`;
const ActivityImg = styled.img`
  width: 150px;
  height: 100px;
`;
const ActivityText = styled.div`
  text-align: center;
`;

const ShareBtn = styled.button`
  padding: 7px 70px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background: var(--light_sand, #ffeed9);
  display: flex;
  font-size: large;
  margin: 20px 0 30px 0;
  font-weight: 400;
`;
