import styled from "styled-components";
import Container from "../UI/Container";
import { Header } from "./Header";
import Malmijal from "../assets/malmijal.png";
import React, { useEffect } from "react";
import Caresea from "../assets/caresea.png";
import Oceancloud from "../assets/oceancloud.png";
import { useHistory } from 'react-router-dom';

const { kakao } = window;

function Kakao() {
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 5 //지도의 레벨(확대, 축소 정도)
        }
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    }, []);

    return (
        <div id="map" style={{
            width: '300px',
            height: '300px',
            marginTop: '10px',
            marginBottom: '30px'
        }}></div>
    )
}


export const Result1 = () => {
    const handleItemClick = (url) => {
        window.open(url, '_blank');
      };

    return (
        <>
            <Header />
            <Container>
                <TitleText>아직은 바다와 친하지 않은 당신, 더 공부가 필요해요!</TitleText>
                <TitleBox>유사벌레붙이말미잘</TitleBox>
                <ResultImg
                    src={Malmijal}
                    alt="malmijal_img"
                />
                <DetailBox>
                    결과결과어쩌구어쩌구
                </DetailBox>

                <TitleText>유사벌레붙이말미잘이 살고 있는 바다는 지금...</TitleText>
                <Kakao />
                <TrashDetail>
                    플라스틱 : 플라스틱 부표, 그물, 통발 등
                </TrashDetail>

                <TitleText>바다 캠페인 참여하기</TitleText>
                <ActivityContainer>
                    <Item onClick={() => handleItemClick('https://www.caresea.or.kr/web/main.do')}>
                        <ActivityImg src={Caresea} />
                        <ActivityText>바다가꿈 참여하기</ActivityText>
                    </Item >
                    <Item onClick={() => handleItemClick('https://cloud.oceanknights.net/')}>
                        <ActivityImg src={Oceancloud} />
                        <ActivityText>바다기사단 참여하기</ActivityText>
                    </Item>
                </ActivityContainer>

                <ShareBtn>공유하기</ShareBtn>

            </Container>
        </>
    );
};

const TitleText = styled.div`
margin-top: 30px;
text-align: center;
`;

const TitleBox = styled.div`
    padding: 10px 100px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: none;
    background: var(--light_sand, #FFEED9);
    display: flex;
    font-size: large;
    margin: 10px 0 10px 0;
    font-weight: 400;
`;

const ResultImg = styled.img`
  width: 80%;
  height: 80%;
  margin-top: 50px;
`;

const DetailBox = styled.div`
border-radius: 10px;
border: 1px solid #000;
background: var(--light_sand, #FFEED9);
width: 320px;
height: 500px;
margin: 50px 10px 50px 10px;
border: none;
padding: 20px;
text-align: center;
`;

const TrashDetail = styled.div`
border-radius: 10px;
border: 1px solid #000;
background: var(--light_sand, #FFEED9);
width: 300px;
height: 200px;
margin: 0 10px 50px 10px;
border: none;
padding: 20px;
text-align: center; 
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
    height: 100px
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
    background: var(--light_sand, #FFEED9);
    display: flex;
    font-size: large;
    margin: 10px 0 10px 0;
    font-weight: 400;
`;