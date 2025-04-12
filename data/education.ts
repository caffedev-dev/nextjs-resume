export const educationData = [
    {
      title: "학력사항",
      transcription: "Education",
      items: [
        {
          title: "인하대학교",
          subTitle: "컴퓨터공학부",
          date: "1997 - 2004",
          description: "인천광역시",
        },
        {
          title: "여수화양고등학교",
          subTitle: "",
          date: "1994 - 1996",
          description: "전남 여수시",
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
  
  export type Education = {
    title: string;
    transcription: string;
    items: {
      title: string;
      subTitle: string;
      date: string;
      description: string;
    }[];
  };
  
  export type EducationData = Education[];
  