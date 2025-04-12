export const certificateData = [
    {
      title: "보유기술",
      transcription: "Technical Skills",
      items: [
        {
          title: "드론측량",
          subTitle: "건설, 토목, 토지, 임야, 해양, 맵핑, 모델링",
          level:"",
          description :"",
        },
        {
          title: "드론 관제시스템",
          subTitle: "산불감시, 안전관제, 시설점검",
          level:"",
          description :"",
        },
        {
          title: "항공촬영",
          subTitle: "모니터링, 공정관리, 행사촬영",
          level:"",
          description :"",
        },
        {
          title: "스마트 농업",
          subTitle: "드론 방제, 식생관리, 산림관리",
          level:"",
          description :"",
        },
        {
          title: "드론 콘텐츠",
          subTitle: "드론 라이트쇼, 드론 체험 프로그램",
          level:"",
          description :"",
        },

        {
          title: "파이썬 개발",
          subTitle: "",
          level:"",
          description :"",
        },
        {
          title: "모바일 앱 개발",
          subTitle: "Flutter, Dart",
          level:"",
          description :"",
        },
        {
          title: "영상제작",
          subTitle: "",
          level:"",
          description :"Davinci Resolve, Final Cut Pro X",
        },


      ],
    },  
    {
      title: "자격사항",
      transcription: "License & Certificate",
      items: [
        {
          title: "초경량비행장지 지도조종자 자격",
          subTitle: "한국교통안전공단",
          level:"",
          description :"교관과정 수료",
        },

        {
          title: "초경량비행장치 조종자 자격",
          subTitle: "한국교통안전공단",
          level : "1종",
          description :"",
        },
        {
          title: "정보처리기사",
          subTitle: "한국산업인력공단",
          level:"1급", 
          description :"",
        },
        {
          title: "드론교육지도사",
          subTitle: "",
          level:"2급",
          description :"",
        },
        {
          title: "드론정비사",
          subTitle: "",
          level:"2급",
          description :"",
        },
      ],
    },  
   

  ];
  
  export type Certificate = {
    title: string;
    transcription: string;
    items: {
      title: string;
      subTitle: string;
      level: string;
      description:string;
    }[];
  };
  
  export type CertificateData = Certificate[];
  