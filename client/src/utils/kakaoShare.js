const { Kakao } = window;

// export const handleKaKaoShareBtn = ({
//     description,
//     imageUrl,
//   }) => {
//     if (!window.Kakao.isInitialized()) {
//       Kakao.init("93ffeba012fe9e7301a5575bbdcbd5ed");
//     }
  
//     Kakao.Share.sendCustom({
//         templateId: ${YOUR_TEMPLATE_ID},
//         templateArgs: {
//           title: '제목 영역입니다.',
//           description: '설명 영역입니다.',
//         },
//       });
//   };