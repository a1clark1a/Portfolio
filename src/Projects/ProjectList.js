import NearMe from "./images/NearMe.png";
import GameCollection from "./images/GameCollectionjpg.jpg";
import ShadowBot from "./images/shadowbot.png";
import Memegram from "./images/Memegram.jpg";
import Noteful from "./images/Noteful.PNG";

export const ProjectList = [
  {
    "Web Project": [
      {
        name: "NearMe App",
        img: { NearMe },
        link: "https://github.com/a1clark1a/NearMe",
        description: `jQuery 3.4.1, Javascript(ES6), HTML5, CSS3, Yelp API
        Quickly find restaurants, parks, and businesses around with you with a click of a button.
        `
      },
      {
        name: "Memegram",
        img: { Memegram },
        link: "https://memegram.now.sh/",
        description: `PERN(PostgreSQL, Express, ReactJs, Node.js) Stack
        Image(Memes) Browsing and uploading sight`
      },
      {
        name: "Noteful",
        img: { Noteful },
        link: "https://a1clark1a-noteful-client.now.sh/",
        description: `PERN(PostgreSQL, Express, ReactJs, Node.js) Stack
        Note taking app`
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
