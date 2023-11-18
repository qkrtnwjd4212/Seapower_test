import React, {useEffect} from "react";

const { kakao } = window;

function Kakao() {
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	        level: 3 //지도의 레벨(확대, 축소 정도)
        }
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    }, []);
    
    return (
        <div id="map" style={{
            width: '500px',
            height: '500px'
        }}></div>
    )
}

export default Kakao;