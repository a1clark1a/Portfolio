import NearMe from "./images/computer icon- near me.png";
import NearMeMobile from "./images/phone icon- near me.png";
import GameCollection from "./images/GameCollectionjpg.jpg";
import ShadowBot from "./images/shadowbot.png";
import MemegramPC from "./images/computer icon- memegram.png";
import MemegramMobile from "./images/phone icon- memegram.png";
import TagALogPc from "./images/computer icon- tagalog.png";
import TagALogMobile from "./images/phone icon- tagalog.png";

export const ProjectList = {
  "Web Project": [
    {
      name: "Tag-A-Log",
      imgPc: TagALogPc,
      imgMobile: TagALogMobile,
      link: "https://Tag-A-Log.now.sh/",
      stack: [`PostgreSQL`, `Javascript(ES6)`, `Express`, `ReactJs`, `Node.js`],
      description: `An information, bookmarks and log manager that allows users to store urls,
       code snippets or articles notes with appropriate description and "tag" 
       them for categorization and fast searching for easier log management.`,
    },
    {
      name: "Memegram",
      imgPc: MemegramPC,
      imgMobile: MemegramMobile,
      link: "https://memegram.now.sh/",
      stack: [`PostgreSQL`, `Javascript(ES6)`, `Express`, `ReactJs`, `Node.js`],
      description: `An Image(Memes) browsing app where you can browse memes to your 
      hearts content and be filled with giggles! Or be a contributor
       and create an account and upload memes yourself whether 
       it be something you found online or something wipped up yourself, 
       you can then give it some funny title or witty description to add to its "memeness". 
       Do you find a particular meme extremely funny? is it boring or weak? Leave a comment and let the poster know!`,
    },
    {
      name: "NearMe App",
      imgPc: NearMe,
      imgMobile: NearMeMobile,
      link: "https://github.com/a1clark1a/NearMe",
      stack: [`jQuery 3.4.1`, `Javascript(ES6)`, `HTML5`, `CSS3`, `Yelp API`],
      description: `
        Quickly find restaurants, parks, and businesses around with you with a click of a button.
        `,
    },
  ],

  "Game Project": [
    {
      name: "GameCollectionProject",
      imgPc: GameCollection,
      link: "https://github.com/a1clark1a/GameCollectionProject",
      stack: [],
      description: "",
    },
    {
      name: "ShadowBot",
      imgPc: ShadowBot,
      link: "https://a1clark1a.itch.io/shadowbot",
      stack: [],
      description: "",
    },
  ],
};
