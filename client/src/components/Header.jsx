import styled from "styled-components";
const HeaderCss = styled.div`
  margin-top: 0;
  display: flex;
  height: 9vh;
  width: 100vw;
  background-color: #184e77;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Song Myung";
  font-size: 3.5vh;
  color: white;

  @media (min-width: 800px) {
    width: 350px;
  }
`;

export const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "0" }}>
      <HeaderCss>문해(海)력 테스트</HeaderCss>
    </div>
  );
};
