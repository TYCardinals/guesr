//***************************************************** */
// Anything commented out has been added via Postman
// - T
//***************************************************** */


const questionData = [
  //   {
  //   id:0,
  //   category: "gossip",
  //   photo: "beyonce.png",
  //   title: "Was Beyoncé to blame for Chloe Bailey's poor album sales?",
  //   rewardRates: [4.06, 21.73],
  //   totalGuesses: [2, 6643],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },

  // {
  //   id:1,
  //   category: "politics",
  //   title: "Jeb Bush wins the US presidential election.",
  //   photo: "jebbush.png",
  //   rewardRates: [3.75, 1.75],
  //   totalGuesses: [213, 456],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  // {
  //   id:2,
  //   category: "tech",
  //   photo: "ai.png",
  //   title: "Will AI and machine learning transform the healthcare industry?",
  //   rewardRates: [1.25, 2.75],
  //   totalGuesses: [123, 75],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  // {
  //   id:3,
  //   category: "economy",
  //   photo: "economy.png",
  //   title: "USD/CAD exchange ratio reaches 1.45.",
  //   rewardRates: [3.05, 1.75],
  //   totalGuesses: [512, 235],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
//   {
//    id:4,
//    category: "tech",
//    title: "Counter Strike 2 gets announced.",
//    photo: "gamer.png",
//    rewardRates: [1.01, 1.25],
//    totalGuesses: [5321, 754],
//    openDate: new Date("2022-01-15"),
//    closeDate: new Date("2023-01-15"),
//  },
  // {
  //   id:5,
  //   category: "gossip",
  //   title: "Will Adele get married to her boyfriend?",
  //   photo: "adele.png",
  //   rewardRates: [3.05, 12.75],
  //   totalGuesses: [123, 457],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  // {
  //   id:6,
  //   category: "politics",
  //   photo: "trudeau.png",
  //   title: "Marking 10 years as Liberal leader, is it time for Trudeau to step down?",
  //   rewardRates: [0.85, 14.25],
  //   totalGuesses: [985152, 1],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  // {
  //   id:7,
  //   category: "gossip",
  //   photo: "ladygaga.png",
  //   title: "Will Lady Gaga make a good Harley Quinn in Joker: Folie à Deux",
  //   rewardRates: [41.05, 1.01],
  //   totalGuesses: [123, 532],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  //  {
  //   id:8,
  //   category: "economy",
  //   photo: "ecocity.png",
  //   title: "UK economy avoid recession despite no growth in February?",
  //   rewardRates: [4.30, 26.50],
  //   totalGuesses: [32, 304],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  // {
  //   id:9,
  //   category: "tech",
  //   photo: "macbook.png",
  //   title: "Apple’s long-rumored 15-inch MacBook Air to arrive by summer 2023?",
  //   rewardRates: [1.05, 3.75],
  //   totalGuesses: [51, 24],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  // {
  //   id:10,
  //   category: "politics",
  //   photo: "biden.png",
  //   title: "Biden to announce run for re-election?",
  //   rewardRates: [54.07, 2.40],
  //   totalGuesses: [5230, 633],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },

  
  //   {
  //   id:11,
  //   category: "gossip",
  //   title: "Elon Musk tweets about Dogecoin.",
  //   photo: "elon.png",
  //   rewardRates: [1.05, 2.75],
  //   totalGuesses: [11, 654],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  
  // {
  //   id:12,
  //   category: "politics",
  //   photo: "trump.png",
  //   title: "Did the Trump campaign see a spike in donations after indictment?",
  //   rewardRates: [20.01, 7.75],
  //   totalGuesses: [510, 223],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  // {
  //   id:13,
  //   category: "economy",
  //   photo: "ecoworld.png",
  //   title: "Consumer stocks' earnings to offer clues on U.S. economy’s resilience?",
  //   rewardRates: [42.05, 2.75],
  //   totalGuesses: [50, 643],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  // {
  //   id:14,
  //   category: "tech",
  //   photo: "3dtech.png",
  //   title: "Are game engines the future of 3D art?",
  //   rewardRates: [12.03, .75],
  //   totalGuesses: [98, 73],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  
  // {
  //   id:15,
  //   category: "tech",
  //   photo: "macbook.png",
  //   title: "",
  //   rewardRates: [1.05, 3.75],
  //   totalGuesses: [51, 24],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  // {
  //   id:16,
  //   category: "politics",
  //   photo: "biden.png",
  //   title: "",
  //   rewardRates: [54.07, 2.40],
  //   totalGuesses: [5230, 633],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  // {
  //   id:17,
  //   category: "gossip",
  //   photo: "shawnmendez.png",
  //   title: "Shawn Mendes and Camila Cabello Spotted Kissing at Coachella. Are they back together?",
  //   rewardRates: [5.16, 1.33],
  //   totalGuesses: [210, 162],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  {
    id:18,
    category: "politics",
    photo: "trump.png",
    title: "",
    rewardRates: [20.01, 7.75],
    totalGuesses: [510, 223],
    openDate: new Date("2022-01-15"),
    closeDate: new Date("2023-01-15"),
  },
  // {
  //   id:19,
  //   category: "economy",
  //   photo: "ecohousing.png",
  //   title: "Is the housing crisis worsening in the Halifax Regional Municipality?",
  //   rewardRates: [1.02, 12.70],
  //   totalGuesses: [5210, 0],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  // {
  //   id:20,
  //   category: "tech",
  //   photo: "3dtech.png",
  //   title: "",
  //   rewardRates: [12.03, .75],
  //   totalGuesses: [98, 73],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  //  {
  //   id:21,
  //   category: "economy",
  //   photo: "ecostock.png",
  //   title: "5% interest rates to derail the stock market?",
  //   rewardRates: [9.09, 3.15],
  //   totalGuesses: [51, 24],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  {
    id:22,
    category: "politics",
    photo: "biden.png",
    title: "",
    rewardRates: [54.07, 2.40],
    totalGuesses: [5230, 633],
    openDate: new Date("2022-01-15"),
    closeDate: new Date("2023-01-15"),
  },
  // {
  //   id:23,
  //   category: "gossip",
  //   photo: "rihanna.png",
  //   title: "Rihanna and her partner, rapper A$AP Rocky, to have another boy?",
  //   rewardRates: [17.02, 11.83],
  //   totalGuesses: [961, 2343],
  //   openDate: new Date("2022-01-15"),
  //   closeDate: new Date("2023-01-15"),
  // },
  
]
;

export default questionData;