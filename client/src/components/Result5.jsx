import styled from "styled-components";
import Container from "../UI/Container";
import { Header } from "./Header";
import Bangge from "../assets/bangge.png";
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

export const Result5 = () => {
  const handleItemClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Wrapper>
      <Container>
        <Header />
        <TitleText>
          해양 환경 분야에 대한 많은 지식을 가진 당신, <br/> 다른 분야도 함께 알아봐요!
        </TitleText>
        <TitleBox>남방방게</TitleBox>
        <ResultImg src={Bangge} alt="bangge_img" />
        <DetailBox>
          해양 환경과 관련된 지식이 많은 당신, 갯벌의 청소부인 남방방게와 잘 어울리는군요! <br />
          남방방게는 23mm의 조그만 몸집을 가졌지만, 생태계에 끼치는 영향은 아주 크답니다. 갯벌 퇴적물 중에서 유기물을 흡수하거나 죽은 물고기의 사체를 섭취하여 갯벌을 깨끗하게 만드는 역할을 한다고 해요.  <br />하지만 햇볕에 노출되기를 꺼려 주로 밤에 활동하고, 한 번 서식굴에 들어가면 좀처럼 나오지 않는 특성을 가지고 있어요.  <br />귀여운 남방방게가 살아가고 있는 해역의 쓰레기 현황을 확인하러 가볼까요?

        </DetailBox>

        <TitleText>남방방게가 살고 있는 바다는 지금...</TitleText>
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
              FRIENDS: "저는 남방방게가 나왔어요!",
              THUMB: "https://ifh.cc/g/YJ95D9.png",
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