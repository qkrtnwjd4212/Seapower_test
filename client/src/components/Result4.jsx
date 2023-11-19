import styled from "styled-components";
import Container from "../UI/Container";
import { Header } from "./Header";
import Haepari from "../assets/haepari.png";
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
import { Link } from "react-router-dom";
import southsea from "../assets/southsea.png";

const { kakao } = window;

function Kakao() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.300701, 128.370667), //지도의 중심좌표.
      level: 12, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    const imageSrc = Plastic,
      imageSize = new kakao.maps.Size(40, 40);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    south_data.forEach((el) => {
      // 마커 이미지 선택
      let markerImage;
      if (el.종류 == "PL") {
        markerImage = new kakao.maps.MarkerImage(
          Plastic,
          new kakao.maps.Size(35, 35)
        );
      } else if (el.종류 == "WD") {
        markerImage = new kakao.maps.MarkerImage(
          Wood,
          new kakao.maps.Size(35, 35)
        );
      } else if (el.종류 == "AU") {
        markerImage = new kakao.maps.MarkerImage(
          Metal,
          new kakao.maps.Size(35, 35)
        );
      } else if (el.종류 == "GL") {
        markerImage = new kakao.maps.MarkerImage(
          Glass,
          new kakao.maps.Size(35, 35)
        );
      }

      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.STR_LA, el.STR_LO),
        //마커에 hover시 나타날 title
        title: el.INVS_AREA_NM,
        image: markerImage,
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

export const Result4 = () => {
  const handleItemClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Wrapper>
      <Container>
        <Header />
        <TitleText>
          해양 보전 분야에 대한 많은 지식을 가진 당신, <br /> 다른 분야도 함께
          알아봐요!
        </TitleText>
        <TitleBox>보름달물해파리</TitleBox>
        <ResultImg src={Haepari} alt="haepari_img" />
        <DetailBox>
          해양 보전과 관련된 지식이 많은 당신, 빈산소수괴나 용존산소 등의 현상과
          관계가 깊은 보름달물해파리와 어울려요! <br />
          보름달물해파리는 우리나라 연안에서 출현하는 해파리류 중 가장 흔히
          발견되는 해파리입니다. 우리나라뿐만 아니라 전 세계 연안과 대양
          지역에서도 가장 쉽게 발견된다고 해요. <br />
          집단으로 서식하며 바다를 자유롭게 유영하는, 보름달물해파리가 살아가는
          해역의 쓰레기 현황을 확인해볼까요?
        </DetailBox>

        <TitleText>보름달물해파리가 살고 있는 바다는 지금...</TitleText>
        <Kakao />
        <TrashDetail>보름달물해파리가 살고 있는 남해안에는 현재 플라스틱 쓰레기 34712개, 목재 쓰레기 1083개, 금속 쓰레기 1389개, 유리 쓰레기 1202개가 존재합니다.</TrashDetail>

        <TrashImg src={southsea} />
        <TrashDetail>
        남해안의 쓰레기 중 34%가 육상에서 기인된 쓰레기며 33%는 해상에서 기인된 쓰레기, 26%는 어업에서 기인된 쓰레기입니다. <br /><br />
          해안에 쌓인 쓰레기는 해양 생물의 서식지를 파괴합니다.

          쓰레기가 집중적으로 쌓이면 생물의 서식지를 덮어버릴 수 있고, 쓰레기와 그물에 덮여버린 산호초는 더 이상 알과 치어를 보호해주지 못해 해양생물들이 생존할 수 없습니다. <br /><br />
          해양 쓰레기와 폐기물은 바다생물을 죽이기까지 합니다.

          바다동물의 몸에 낚싯줄, 밧줄, 그물 등이 걸려 죽는 문제도 심각합니다. UNEP에 따르면, 매년 바다새가 100만 마리, 고래나 바다표범, 바다소 등 보호해야 할 해양포유동물이 10만 마리나 해양폐기물에 걸려 죽어가는 것으로 알려져 있습니다. 폐기물은 위장에 쌓여 포만감을 주기 때문에 바다생물들을 서서히 죽어가게 만들기도 합니다.

        </TrashDetail>

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
              FRIENDS: "저는 해파리가 나왔어요!",
              THUMB: "https://ifh.cc/g/pj9FhS.png",
            })
          }
        >
          내 결과 공유하기
        </ShareBtn>
        <GoHome>
          <HomeLink to="/">문제 다시 풀기</HomeLink>
        </GoHome>
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
  background: linear-gradient(to bottom, #ffffff 300px, #00b4d8 600px);
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
  margin-bottom: 3vh;
  border: none;
  padding: 4vw;
  text-align: left;
  line-height: 1.6;
  font-size: 16px;
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
  //margin-top: 1vh;
  border: none;
  padding: 4vw;
  text-align: left;
  line-height: 1.6;
  font-size: 16px;
`;

const BoatImg = styled.img`
  width: 80%;
  height: 7%;
  margin-right: 10%;
`;

const TrashImg = styled.img`
  width: 80vw;
  @media (min-width: 800px) {
    width: 300px;
  }
  margin-top: 50px;
  margin-bottom: 20px;
  background-image: contain; // 이미지의 가로세로 비율을 유지하면서, 이미지가 잘리지 않을 때까지만 채운다.
  max-width: 500px;
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
  cursor: pointer;
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
  margin: 20px 0 20px 0;
  font-weight: 400;
  cursor: pointer;

  width: 270px;
`;

const GoHome = styled.button`
  padding: 7px 70px;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  border-radius: 10px;
  border: none;
  background: var(--light_sand, #ffeed9);
  display: flex;
  font-size: large;
  margin: 0 0 30px 0;
  font-weight: 400;
  cursor: pointer;

  width: 270px;
`;

const HomeLink = styled(Link)`
  text-decoration-line: none;
  color: black;
`;
