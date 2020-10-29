const RESERVATION_DATA= {
  PEOPLE_OPTIONS : [
    { age: "성인", name: "adult" },
    { age: "소아", name: "child" },
    { age: "유아", name: "infant" }
  ],
  INPUT_INFO : [
    { title: "이름", name: "name" },
    { title: "연락처", name: "phoneNumber" },
    { title: "이메일", name: "email" }
  ],
  ADDITIONAL_OPTIONS : [
    { 
      img: "https://s3.ap-northeast-2.amazonaws.com/stayfolio.images/system/pictures/images/000/054/712/original/11ea6def0f1e5345244aad018d0e6e34e8540845.jpeg?1601347488",
      title: "조식",
      info: "(5,000원)",
      name: "optionBreakfast",
      desc: "조식은 '노르딕' 브런치 카페와의 협업으로 만든 샌드위치를 과일과 주스 또는 커피와 함께 제공해드립니다. 오전 9시~10시까지 스테이 내 카페에서 드실 수 있습니다."
    },
    { 
      img: "https://s3.ap-northeast-2.amazonaws.com/stayfolio.images/system/pictures/images/000/054/713/original/fd2526739bd97bff6f6fcb99fc2039cf57ba7e0d.jpeg?1601347539",
      title: "픽업 서비스",
      info: "(필수선택)",
      name: "optionPickUp",
      desc: "하루 2회 서울 시내권 픽업차량이 순회중이오니, 픽업서비스가 필요하신 게스트는 예약 시 미리 신청해주세요. (신청자가 없는 경우 차량을 운행하지 않으니 필요하실 경우 꼭 미리 선택해주세요)"
    }
  ]
};

export default RESERVATION_DATA;
  