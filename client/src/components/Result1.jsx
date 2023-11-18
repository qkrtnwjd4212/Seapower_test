import styled from "styled-components";
import Container from "../UI/Container";
import { Header } from "./Header";
import Malmijal from "../assets/malmijal.png";

export const Result1 = () => {

    return (
        <>
            <Header />
            <Container>

                <TitleBox>유사벌레붙이말미잘</TitleBox>
                <ResultImg
                    src={Malmijal}
                    alt="malmijal_img"
                />
            </Container>
        </>
    );
};



const TitleBox = styled.div`
    padding: 10px 100px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: none;
    background: var(--light_sand, #FFEED9);
    display: flex;
    font-size: medium;
    margin: 20px 0 10px 0;
`;

const ResultImg = styled.img`
  width: 80%;
  height: 80%;
  margin-top: 50px;

`;