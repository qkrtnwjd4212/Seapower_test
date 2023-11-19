import styled from "styled-components";
import Container from "../UI/Container";
import { Header } from "./Header";
import Gangchi from "../assets/gangchi.png";
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

export const Result8 = () => {
  const handleItemClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Wrapper>
      <Container>
        <Header />
        <TitleText>
          가장 고난이도의 문제를 맞추신 당신, <br/> 
          해양 잘알이시군요!
        </TitleText>
        <TitleBox>강치</TitleBox>
        <ResultImg src={Gangchi} alt="gangchi_img" />
        <DetailBox>
          바다와 친한 당신, 우리 바다의 멸종생물인 강치에 대해서도 잘 알고 있군요! <br /> 강치는 독도에 서식했던 바다사자를 말합니다. 원래 독도는 바다사자인 강치의 옛말을 따 가지도라 불릴 정도로 강치가 많았다고 해요. 안타깝게도 남획으로 강치는 1970년 이후 더 이상 발견되지 않고 있어요. <br /> 강치가 서식하던 해역의 쓰레기 현황을 확인해볼까요?

        </DetailBox>

        <TitleText>강치가 살고 있는 바다는 지금...</TitleText>
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
              FRIENDS: "저는 강치가 나왔어요!",
              THUMB: "https://ifh.cc/g/l2VTzo.png",
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
    width: 400px;
  }
  background: linear-gradient(to bottom, #ffffff 370px, #00b4d8 600px);
  max-width: 800px;
`;

const TitleText = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const TitleBox = styled.div`
  padding: 10px;
  width: 300px;
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
  width: 350px;
  margin-top: 50px;
  background-image: contain; // 이미지의 가로세로 비율을 유지하면서, 이미지가 잘리지 않을 때까지만 채운다.
  max-width: 500px;
`;

const DetailBox = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  background: var(--light_sand, #ffeed9);
  width: 320px;
  //height: 500px;
  margin: 50px 10px 50px 10px;
  border: none;
  padding: 30px 20px 30px 20px;
  text-align: left;
  line-height: 1.6;
  font-size: 18px;
`;

const TrashDetail = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  background: var(--light_sand, #ffeed9);
  width: 300px;
  height: 150px;
  margin: 0 10px 50px 10px;
  border: none;
  padding: 20px;
  text-align: center;
`;

const BoatImg = styled.img`
width: 80%;
height: 7%;
margin-right: 10%;
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
  cursor: pointer;
`;
