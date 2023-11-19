import styled from "styled-components";
import Container from "../UI/Container";
import { Header } from "./Header";
import Haema from "../assets/haema.png";
import Boat from "../assets/boat.png";
import React, { useEffect, Fragment } from "react";
import Caresea from "../assets/caresea.png";
import Oceancloud from "../assets/oceancloud.png";
import { handleKaKaoShareBtn } from "../utils/kakaoShare";
import { south_data } from "../data/south";
import Plastic from "../assets/plastic.png";
import Wood from "../assets/wood.png";
import Glass from "../assets/glass.png";
import Metal from "../assets/metal.png";

const { kakao } = window;

function Kakao() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.300701, 128.570667), //지도의 중심좌표.
      level: 12, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    const imageSrc = Plastic, imageSize = new kakao.maps.Size(40,40);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    south_data.forEach((el) => {
      // 마커 이미지 선택
      let markerImage;
      if (el.종류 == "PL") {
          markerImage = new kakao.maps.MarkerImage(Plastic, new kakao.maps.Size(35,35));
      } else if (el.종류 == "WD") {
          markerImage = new kakao.maps.MarkerImage(Wood, new kakao.maps.Size(35,35));
      } else if (el.종류 == "AU") {
          markerImage = new kakao.maps.MarkerImage(Metal, new kakao.maps.Size(35,35));
      } else if (el.종류 == "GL") {
          markerImage = new kakao.maps.MarkerImage(Glass, new kakao.maps.Size(35,35));
      }

      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.STR_LA, el.STR_LO),
        //마커에 hover시 나타날 title
        title: el.INVS_AREA_NM,
        image: markerImage
      });
    });
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

export const Result3 = () => {
  const handleItemClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Wrapper>
      <Container>
        <Header />
        <TitleText>
          분야별로 고른 지식을 가진 당신, 다른 분야도 함께 알아봐요!
        </TitleText>
        <TitleBox>해마</TitleBox>
        <ResultImg src={Haema} alt="haema_img" />
        <DetailBox>
          해양 분야별로 고른 지식을 가지고 있는 당신, 해마처럼 독특한 성격의 보유자시군요! <br />
          해마는 암컷이 수컷의 배에 있는 보육낭에 알을 넣어 수정한다는 사실, 알고 계신가요? 수컷이 알을 품고 새끼를 낳는 해마의 번식습성은 지구상에 존재하는 동물 중 해마류만이 갖고 있는 독특한 습성입니다. 게다가 말을 닮은 외모와 달리, 수 미터를 이동하는 데 이틀이 걸릴 정도로 어류 중 이동 속도가 가장 느리다고 해요. <br /> 유니크한 당신을 닮은 해마가 살아가는 해역의 쓰레기 현황을 확인해볼까요?

        </DetailBox>

        <TitleText>해마가 살고 있는 바다는 지금...</TitleText>
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
              FRIENDS: "저는 해마가 나왔어요!",
              THUMB: "https://ifh.cc/g/T1zoAr.png",
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
  background: linear-gradient(to bottom, #ffffff 300px, #00b4d8 600px);
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
