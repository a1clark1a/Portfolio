import React from "react";
import NearMe from "./images/desktop-NearMeApp.png";
import NearMeMobile from "./images/mobile-NearMeApp_mobile.png";
import GameCollection from "./images/GameCollectionjpg.jpg";
import ShadowBot from "./images/shadowbot.png";
import MemegramPC from "./images/desktop-Memegram.png";
import MemegramMobile from "./images/mobile-Memegram_mobile.png";
import TagALogPc from "./images/desktop-TagALog.png";
import TagALogMobile from "./images/mobile-TagALog.png";
import TagALogV2Pc from "./images/desktop-TagALog_v2.png";
import TagALogV2Mobile from "./images/mobile-TagALog_v2.png";
import DailyVersePc from "./images/desktop-DailyVerse.png";
import DailyVerseMobile from "./images/mobile-DailyVerse.png";

//Local PNG icons (no Devicon equivalent)
import yelp from "./images/yelp.png";
import sfml from "./images/SFML.png";

// TODO: Download and add these local PNGs for non-Devicon icons
// import ChakraUIv3 from "./images/chakra-ui.png";
// import Expo from "./images/expo.png";
// import EASBuild from "./images/eas-build.png";
// import ReactNativePaper from "./images/react-native-paper.png";
// import TenTap from "./images/tentap.png";
// import ManifestV3 from "./images/manifest-v3.png";
// import RevenueCat from "./images/revenuecat.png";
// import YjCRDT from "./images/yjs-crdt.png";
// import ClaudeVision from "./images/claude-vision.png";

const devicon = (className, name) => ({
  type: "devicon",
  class: className,
  name,
});
const img = (src, name) => ({ type: "img", src, name });

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
      name: "Tag-A-Log V2",
      imgPc: TagALogV2Pc,
      imgMobile: TagALogV2Mobile,
      link: "",
      googlePlay: "",
      appleStore: "",
      stack: [
        devicon("devicon-react-original colored", "React Native"),
        devicon("devicon-typescript-plain colored", "TypeScript"),
        devicon("devicon-firebase-plain colored", "Firebase"),
        devicon("devicon-sqlite-plain", "SQLite"),
        devicon("devicon-vitejs-plain colored", "Vite"),
        // TODO: Uncomment after downloading local PNGs
        // img(Expo, "Expo"),
        // img(EASBuild, "EAS Build"),
        // img(ReactNativePaper, "React Native Paper"),
        // img(TenTap, "TenTap"),
        // img(ManifestV3, "Manifest V3"),
        // img(RevenueCat, "RevenueCat"),
        // img(YjCRDT, "Yjs CRDT"),
        // img(ClaudeVision, "Claude Vision"),
      ],
      description:
        "Tag-A-Log is an offline-first journaling app for Android, iOS, and Web that enables users to create, organize, and tag rich text journals with mood tracking, templates, and a browser extension for quick web clipping with AI page summarization on Chrome, Firefox, Safari, and more. Tag-A-Log offers bidirectional syncing with Firebase for seamless cross-platform access with features such as guest access, soft delete trash, import and export, and future premium features such as PIN/biometric-locked tags, an AI auto-writer, photo journaling with AI analysis, and real-time collaborative live sharing with friends powered by Yjs CRDT. With its local-first SQLite implementation and RevenueCat-supported subscription model, Tag-A-Log is built to scale from personal daily journaling to collaborative journaling with friends.",
    },
    {
      name: "Daily-Verse-Generator",
      imgPc: DailyVersePc,
      imgMobile: DailyVerseMobile,
      link: "https://daily-verse-generator.vercel.app/",
      client: "https://github.com/a1clark1a/daily-verse-generator",
      stack: [
        devicon("devicon-nextjs-plain", "Next.js"),
        devicon("devicon-typescript-plain colored", "TypeScript"),
        devicon("devicon-firebase-plain colored", "Firebase"),
        devicon("devicon-react-original colored", "React"),
        // TODO: Uncomment after downloading local PNG
        // img(ChakraUIv3, "Chakra UI"),
      ],
      description:
        "A Next.js web application that can generate shareable Bible verse images with beautiful dark gradient backgrounds, custom typography, and icons. Users can choose from various Bible translations, randomly generate Bible verses rendered as downloadable/shareable cards, and view a daily rotating Unsplash banner image. The application utilizes Firebase Cloud Functions with Sharp for image compositing, Firestore for global verse counts, and rate limiting.",
    },
    {
      name: "Tag-A-Log",
      imgPc: TagALogPc,
      imgMobile: TagALogMobile,
      link: "https://Tag-A-Log.now.sh/",
      client: "https://github.com/a1clark1a/Tag-A-Log-Client",
      server: "https://github.com/a1clark1a/Tag-A-Log-API-Server",
      stack: [
        devicon("devicon-postgresql-plain colored", "PostgreSQL"),
        devicon("devicon-javascript-plain colored", "JavaScript"),
        devicon("devicon-express-original", "Express"),
        devicon("devicon-react-original colored", "React"),
        devicon("devicon-nodejs-plain colored", "Node.js"),
      ],
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
      stack: [
        devicon("devicon-postgresql-plain colored", "PostgreSQL"),
        devicon("devicon-javascript-plain colored", "JavaScript"),
        devicon("devicon-express-original", "Express"),
        devicon("devicon-react-original colored", "React"),
        devicon("devicon-nodejs-plain colored", "Node.js"),
      ],
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
      stack: [
        devicon("devicon-jquery-plain colored", "jQuery"),
        devicon("devicon-javascript-plain colored", "JavaScript"),
        devicon("devicon-html5-plain colored", "HTML5"),
        devicon("devicon-css3-plain colored", "CSS3"),
        img(yelp, "Yelp API"),
      ],
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
      stack: [
        img(sfml, "SFML"),
        devicon("devicon-cplusplus-plain colored", "C++"),
      ],
      description: `A Solo project to house all of my past SFML projects which allows user to play all SFML games I've worked on.
        I implemented multiple programming techniques such as Class structure hierarchy to showcase
        Object-Oriented Programming principles, pointers for some Dynamic Memory Allocation,
         Enum States for AI behaviors and also some 2d Math in form of vectors and trigonometry.`,
    },
    {
      name: "ShadowBot",
      imgPc: ShadowBot,
      link: "https://a1clark1a.itch.io/shadowbot",
      stack: [devicon("devicon-unrealengine-original", "Unreal Engine")],
      description: `Shadowbot is a 2d-Sidescroller shooter game made in Unreal 4 using Blueprints.
       A solo project I made for a class which I continued to work on and improve.
        Shadowbot is still in its prototype stage and currently contains 1 level but
        the game is playable with majority of the game mechanics and player functionality already implemented.`,
    },
  ],
};
