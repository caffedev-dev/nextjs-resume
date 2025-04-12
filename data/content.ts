export const contentData = [

  {
    title: "경력사항",
    transcription: "Work Experience",
    items: [
      {
        title: "드론운영 및 유지보슈 용역",
        subTitle: "전남보건환경연구원 동부지원",
        date: "2025 - ",
        description: "",
      },
      {
        title: "다중드론 제어기술을 활용한 교량점검 실증",
        subTitle: "전남테크노파크",
        date: "2024",
        description: "",
      },
      {
        title: "광양드론페스티벌 운영 용역",
        subTitle: "광양시청",
        date: "2024",
        description: "",
      },
      {
        title: "별바다 치유문화 청소년 플랫폼 드론라이트쇼 용역",
        subTitle: "완도군청",
        date: "2024",
        description: "",
      },
      {
        title: "드론스포츠대회 드론라이트쇼 용역",
        subTitle: "담양군청",
        date: "2024",
        description: "",
      },
      {
        title: "군집비행 활용 실습 강의",
        subTitle: "전남도립대학교",
        date: "2024",
        description: "",
      },
      {
        title: "드론운영 및 유지보수 용역",
        subTitle: "전남보건환경연구원 동부지원",
        date: "2024",
        description: "",
      },
      {
        title: "포스코 SNNC 공장 항공촬영",
        subTitle: "포스코",
        date: "2024",
        description: "",
      },
      {
        title: "담양 메타뮤직페스티벌 드론라이트쇼 용역",
        subTitle: "담양군청",
        date: "2023",
        description: "",
      },
      {
        title: "장기 미사용 대형 건축물 안전점검",
        subTitle: "순천시청",
        date: "2023",
        description: "",
      },
      {
        title: "다중드론 제어기술을 활용한 교량점검 실증",
        subTitle: "전남테크노파크",
        date: "2023",
        description: "",
      },
      {
        title: "낙동강 구포나루축제 드론 라이트쇼 용역",
        subTitle: "부산광역시 북구",
        date: "2023",
        description: "",
      },
      {
        title: "자율주행을 통한 드론안전관제시스템 시제품 개발",
        subTitle: "전남테크노파크",
        date: "2023",
        description: "",
      },
      {
        title: "대한민국 안전대전환 집중안전점검 드론시설점검 용역",
        subTitle: "순천시청",
        date: "2023",
        description: "",
      },
      {
        title: "2023 순천만 국제정원박람회 드론안전관제시스템 구축 및 운영",
        subTitle: "순천만 국가정원",
        date: "2023",
        description: "",
      },
      {
        title: "광양만권 HRD센터 VR웹 제작",
        subTitle: "광양만권 HRD센터",
        date: "2023",
        description: "",
      },
      {
        title: "고인돌 축제 드론라이트쇼 용역",
        subTitle: "고창군청",
        date: "2023",
        description: "",
      },
      {
        title: "태백 드론 스포츠대회 드론라이트쇼 용역",
        subTitle: "태백시청",
        date: "2023",
        description: "",
      },
      {
        title: "2023 목포 노을드론 라이트쇼 행사 용역",
        subTitle: "목포시청",
        date: "2023",
        description: "",
      },
      {
        title: "드론 활용 시설물 안전점검",
        subTitle: "해남군청",
        date: "2023",
        description: "",
      },
      {
        title: "율촌 리튬클러스터 항공촬영",
        subTitle: "포스코 홀딩스",
        date: "2023",
        description: "",
      },
      {
        title: "드론을 이용한 유해조수 퇴치 및 포획 실증",
        subTitle: "고흥군청",
        date: "2023",
        description: "",
      },
      {
        title: "율촌공장 공사기록용 지상 및 항공촬영 용역",
        subTitle: "포스코필바라",
        date: "2022",
        description: "",
      },
      {
        title: "드론을 활용한 비탈면 및 도로포장 관리 효율화 기술개발 자문",
        subTitle: "국토교통과학기술진흥원",
        date: "2022",
        description: "",
      },
    ],
  },

  //   @NOTE: You can add more sections here
  //   {
  //     title: "Projects",
  //     items: [
  //       {
  //         title: "Project 1",
  //         subTitle: "Sub Title",
  //         date: "2015 - 2016",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  //       },
  //     ],
  //   },
];

export type Content = {
  title: string;
  transcription: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
