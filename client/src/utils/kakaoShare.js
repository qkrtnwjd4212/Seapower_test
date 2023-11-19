const { Kakao } = window;

export const handleKaKaoShareBtn = ({
    FRIENDS,
    THUMB,
  }) => {
    if (!window.Kakao.isInitialized()) {
      Kakao.init("93ffeba012fe9e7301a5575bbdcbd5ed");
    }
  
    Kakao.Share.sendCustom({
        templateId: 100945,
        templateArgs: {
          THUMB: THUMB,
          FRIENDS: FRIENDS
        },
      });
  };