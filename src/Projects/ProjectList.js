import React from "react";
import NearMe from "./images/computer icon- near me.png";
import NearMeMobile from "./images/phone icon- near me.png";
import GameCollection from "./images/GameCollectionjpg.jpg";
import ShadowBot from "./images/shadowbot.png";
import MemegramPC from "./images/computer icon- memegram.png";
import MemegramMobile from "./images/phone icon- memegram.png";
import TagALogPc from "./images/computer icon- tagalog.png";
import TagALogMobile from "./images/phone icon- tagalog.png";

//Tech stack icon
import ReactJs from "./images/ReactJs.png";
import PostgreSQL from "./images/postgresql.png";
import Express from "./images/expressjs.png";
import Js6 from "./images/js6.png";
import node from "./images/nodejs.png";
import html5 from "./images/html5.png";
import jquery from "./images/jquery.png";
import css from "./images/css3.png";
import yelp from "./images/yelp.png";
import cplusplus from "./images/c++.png";
import unreal from "./images/unreal4.png";
import sfml from "./images/SFML.png";

export const ProjectList = {
  Experience: [
    {
      name: "OneView Commerce",
      title: "Software Development Engineer",
      link: "https://www.oneviewcommerce.com/",
      description: (
        <ul>
          <li>
            Developed client-facing features(Omni Channel POS, Inventory
            Management APP, CRM Dashboard)
          </li>
          <li>
            Designed, implemented, and optimized Serverless microservice API
            endpoints using RESTful architecture.
          </li>
          <li>
            Ensured 100% unit and integration test coverage using Jest, Enzyme,
            and SonarCloud to maintain code quality and system reliability.
          </li>
          <li>
            Led the database migration from Cloudant to Firebase/Firestore,
            ensuring data integrity and seamless transition.
          </li>
          <li>
            Provided developer support during deployments and releases,
            troubleshooting issues and ensuring smooth rollouts
          </li>
          <li>
            Contributed to workplace culture as part of the company's Culture
            Committee, fostering team engagement and collaboration.
          </li>
        </ul>
      ),
      date: "May 2021 - Feb 2025",
    },
    {
      name: "OnboardList",
      title: "Software Engineer",
      link: "https://www.onboardlist.com/",
      description: (
        <ul>
          <li>
            Improved application by encapsulating backend server configuration
            and protecting confidential keys and secrets by pursuing proper
            security standards.
          </li>
          <li>
            Refactored REST-API Endpoints to improve user/account management and
            secure stripe transactions.
          </li>
          <li>
            Handles the migration, management and queries of the project's
            PostgreSQL Database.
          </li>
          <li>
            Implemented "Checklist" core feature to allow users to create and
            manage their onboarding checklist.
          </li>
          <li>
            Improved "Checklist" widget to no longer rely on jQuery
            dependencies.
          </li>
          <li>
            Led the integration of 3rd party APIs to work in accordance to the
            project needs.
          </li>
        </ul>
      ),
      date: "July 2020 - May 2021",
    },
    {
      name: "Dananza",
      title: "Frontend Developer - Intern",
      link: "https://www.linkedin.com/company/dananza/posts/?feedView=all",
      description: (
        <ul>
          <li>
            Created new UI components and applied it in creating new campaign
            page series using React.js and Next.js.
          </li>
          <li>
            Mentor meetings and stand-ups to document and assign/discuss tasks
            in ClickUp/Microsoft Teams.
          </li>
        </ul>
      ),
      date: "March  2020 - April 2020",
    },
  ],

  "Web Project": [
    {
      name: "Tag-A-Log",
      imgPc: TagALogPc,
      imgMobile: TagALogMobile,
      link: "https://Tag-A-Log.now.sh/",
      client: "https://github.com/a1clark1a/Tag-A-Log-Client",
      server: "https://github.com/a1clark1a/Tag-A-Log-API-Server",
      stack: [PostgreSQL, Js6, Express, ReactJs, node],
      description: `An information, bookmarks and log manager that allows users to store urls,
       code snippets or articles notes with appropriate description and "tag" 
       them for categorization and fast searching for easier log management.`,
    },
    {
      name: "Memegram",
      imgPc: MemegramPC,
      imgMobile: MemegramMobile,
      link: "https://memegram.now.sh/",
      client: "https://github.com/a1clark1a/Memegram-Client",
      server: "https://github.com/a1clark1a/Memegram-Server",
      stack: [PostgreSQL, Js6, Express, ReactJs, node],
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
      client: "https://github.com/a1clark1a/NearMe",
      link: "https://a1clark1a.github.io/NearMe/",
      stack: [jquery, Js6, html5, css, yelp],
      description: `
        Quickly find restaurants, parks, and businesses around with you with a click of a button.
        `,
    },
  ],

  "Game Project": [
    {
      name: "GameCollectionProject",
      imgPc: GameCollection,
      link: "https://a1clark1a.itch.io/game-collection-prototype",
      client: "https://github.com/a1clark1a/GameCollectionProject",
      stack: [sfml, cplusplus],
      description: `A Solo project to house all of my past SFML projects which allows user to play all SFML games I've worked on. 
        I implemented multiple programming techniques such as Class structure hierarchy to showcase 
        Object-Oriented Programming principles, pointers for some Dynamic Memory Allocation,
         Enum States for AI behaviors and also some 2d Math in form of vectors and trigonometry.`,
    },
    {
      name: "ShadowBot",
      imgPc: ShadowBot,
      link: "https://a1clark1a.itch.io/shadowbot",
      stack: [unreal],
      description: `Shadowbot is a 2d-Sidescroller shooter game made in Unreal 4 using Blueprints.
       A solo project I made for a class which I continued to work on and improve.
        Shadowbot is still in its prototype stage and currently contains 1 level but 
        the game is playable with majority of the game mechanics and player functionality already implemented.`,
    },
  ],
};
