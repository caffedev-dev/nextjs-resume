export const personalData = [
    {
      title: "기본정보",
      transcription: "Personal Information",
      items: [
        {
          label: "이름",
          title: "박영진",
          subTitle: "Park Youngjin",
          description :"",
        },

        {
          label: "연락처",
          title: "010-4790-6650",
          subTitle: "",
          description :"",
        },
        {
          label: "이메일",
          title: "imdrone.site@gmail.com",
          subTitle: "",
          description :"",
        },

      ],
    },  
   

  ];
  
  export type Personal = {
    title: string;
    transcription: string;
    items: {
      label: string;
      title: string;
      subTitle: string;
      description:string;
    }[];
  };
  
  export type PersonalData = Personal[];
  