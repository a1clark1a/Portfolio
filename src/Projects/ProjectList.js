import googleBooks from "./images/googleBooksimg.png";
import quizApp from "./images/quizApp.png";
import NearMe from "./images/NearMe.png";
import GameCollection from "./images/GameCollectionjpg.jpg";
import ShadowBot from "./images/shadowbot.png";

export const ProjectList = [
  {
    "Web Project": [
      {
        name: "GoogleBooks",
        img: { googleBooks },
        link: "https://github.com/a1clark1a/googlebooks",
        description: `React.js, Javascript(ES6, JSx), CSS3, HTML5
        A web app that allows users to look up books by entering either the name of the book or the author. 
        Allow users to filter the search results by print type or book type.
        `
      },
      {
        name: "NearMe App",
        img: { NearMe },
        link: "https://github.com/a1clark1a/NearMe",
        description: `jQuery 3.4.1, Javascript(ES6), HTML5, CSS3, Yelp API
        Quickly find restaurants, parks, and businesses around with you with a click of a button.
        `
      },
      {
        name: "QuizApp",
        img: { quizApp },
        link: "https://github.com/a1clark1a/QuizApp",
        description: `jQuery 3.4.1, Javascript(ES6), HTML5, CSS3
        Users are quizzed on their knowledge of video game characters.
        `
      }
    ]
  },
  {
    "Game Project": [
      {
        name: "GameCollectionProject",
        img: { GameCollection },
        link: "https://github.com/a1clark1a/GameCollectionProject",
        description: ""
      },
      {
        name: "ShadowBot",
        img: { ShadowBot },
        link: "https://a1clark1a.itch.io/shadowbot",
        description: ""
      }
    ]
  }
];
