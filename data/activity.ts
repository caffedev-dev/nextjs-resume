export const activityData = [
    {
      title: "활동, 수상",
      transcription: "Activities & Awards",
      items: [
        {
          title: "화양연합청년회",
          subTitle: "사무국장",
          date:"2016 - ",
          description :"여수시민 대상 정기적 봉사활동으로 지역 시민의 복지향상에 기여",
        },

        {
          title: "(사)여수산단로타리클럽",
          subTitle: "공공이미지위원장",
          date : "2022 - ",
          description :"국제로타리클럽 3610지구",
        },
        {
          title: "여수시사이클연맹",
          subTitle: "이사",
          date:"2025 - ", 
          description :"",
        },
        {
            title: "여수시장 표창",
            subTitle: "",
            date:"2025", 
            description :"",
          },


      ],
    },  
   

  ];
  
  export type Activity = {
    title: string;
    transcription: string;
    items: {
      title: string;
      subTitle: string;
      date: string;
      description:string;
    }[];
  };
  
  export type ActivityData = Activity[];
  