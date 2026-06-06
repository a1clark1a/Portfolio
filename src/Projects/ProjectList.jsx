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
import DiceTablePc from "./images/desktop-dice-table.png";
import DiceTableMobile from "./images/phone-dice-table.png";

//Local PNG icons (no Devicon equivalent)
import yelp from "./images/yelp.png";
import sfml from "./images/SFML.png";
import ChakraUIv3 from "./images/chakra-ui.png";

// TODO: Download and add these local PNGs for non-Devicon icons
// import Expo from "./images/expo.png";
// import EASBuild from "./images/eas-build.png";
// import ReactNativePaper from "./images/react-native-paper.png";
// import TenTap from "./images/tentap.png";
// import ManifestV3 from "./images/manifest-v3.png";
// import RevenueCat from "./images/revenuecat.png";
// import YjCRDT from "./images/yjs-crdt.png";
// import ClaudeVision from "./images/claude-vision.png";
// import Recharts from "./images/recharts.png";

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
      subtitle:
        "Enterprise SaaS retail platform — Omni-Channel POS, Order Fulfillment & CRM for global brands",
      date: "May 2021 – Feb 2025",
      bullets: [
        <>
          <b>Pick &amp; Pack:</b> shipped the order-fulfillment MVP to 50+ Molton
          Brown stores, replacing legacy warehouse workflows — full serverless
          AWS Lambda API, IndexedDB offline sync, and Firestore optimistic
          locking with versioned documents.
        </>,
        <>
          <b>Australia Post migration:</b> led solo migration of 1M+ Cloudant
          documents to Firestore at 100% accuracy — atomic batch writes,
          fail-and-split retries, dead-letter queuing, exponential backoff, and
          checkpoint resumability.
        </>,
        <>
          <b>Alert Center:</b> built a real-time order dashboard for 100+ Kroger
          delivery drivers with live Firestore updates and dispatch
          notifications.
        </>,
        <>
          <b>POS Self-Checkout:</b> delivered a production-ready MVP demoed to
          1,000+ attendees at NRF (React, Redux, TypeScript, Cordova).
        </>,
        <>
          <b>Quality:</b> maintained 100% unit &amp; integration coverage (Jest,
          Enzyme, SonarCloud) under a zero-lint-warning CI/CD policy.
        </>,
      ],
      tools:
        "React · Redux · TypeScript · AWS Lambda · Firestore · IndexedDB · Jest",
    },
    {
      name: "Onboardlist",
      title: "Software Engineer",
      link: "https://www.onboardlist.com/",
      subtitle:
        "Early-stage startup building onboarding workflow tools for SMBs",
      date: "July 2020 – May 2021",
      bullets: [
        <>
          Refactored REST API endpoints for user/account management and secure
          Stripe payments, hardening backend security configuration.
        </>,
        <>
          Built core features — a CRM dashboard and interactive checklist widget
          — and led third-party API integrations.
        </>,
        <>Managed migrations and query optimization for the PostgreSQL database.</>,
      ],
      tools: "Node.js · Express · PostgreSQL · React · Stripe",
    },
    {
      name: "Dananza",
      title: "Frontend Developer — Intern",
      link: "https://www.linkedin.com/company/dananza/posts/?feedView=all",
      subtitle:
        "Startup connecting local businesses with food influencers for marketing campaigns",
      date: "March 2020 – April 2020",
      bullets: [
        <>
          Created new UI components and built a new campaign page series with
          React.js and Next.js.
        </>,
        <>
          Participated in mentor meetings and stand-ups, documenting and
          assigning tasks in ClickUp / Microsoft Teams.
        </>,
      ],
      tools: "React · Next.js · ClickUp · Microsoft Teams",
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
        "Cross-platform offline-first personal log app (Expo, React Native, React 19, TypeScript, Firebase) for Android, iOS & Web from a single codebase — tag-first organization, a ProseMirror rich-text editor, a Manifest V3 browser extension, and a bidirectional SQLite↔Firestore sync engine.",
    },
    {
      name: "DiceTable",
      imgPc: DiceTablePc,
      imgMobile: DiceTableMobile,
      link: "https://dice-table.app/",
      client: "https://github.com/a1clark1a/diceTable",
      openSource: true,
      stack: [
        devicon("devicon-react-original colored", "React"),
        devicon("devicon-typescript-plain colored", "TypeScript"),
        devicon("devicon-vitejs-plain colored", "Vite"),
        img(ChakraUIv3, "Chakra UI"),
        // TODO: Uncomment after downloading local PNG
        // img(Recharts, "Recharts"),
      ],
      description:
        "A probability tool for tabletop gaming — define named rolls and see exact stats with a PMF/CDF overlay, powered by a pure, dependency-free TypeScript engine and Chakra UI v3.",
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
        img(ChakraUIv3, "Chakra UI"),
      ],
      description:
        "A Next.js 15 app that generates shareable Bible-verse cards on demand — a Firebase Cloud Functions pipeline composites each card server-side, with 7 translations, a daily Unsplash banner, and IP-based rate limiting.",
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
      description:
        "An information, bookmark, and log manager — store URLs, code snippets, and notes, then tag them for fast categorization and search.",
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
      description:
        "A meme-browsing community app — browse, upload, title, and comment on memes, backed by an Express + PostgreSQL API.",
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
      description:
        "Quickly find restaurants, parks, and businesses around you with one click, powered by the Yelp API.",
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
      description:
        "A C++/SFML capstone housing my past SFML games — OOP class hierarchies, dynamic memory, enum-state AI, and 2D vector math.",
    },
    {
      name: "ShadowBot",
      imgPc: ShadowBot,
      link: "https://a1clark1a.itch.io/shadowbot",
      stack: [devicon("devicon-unrealengine-original", "Unreal Engine")],
      description:
        "A 2D side-scroller shooter built in Unreal Engine 4 with Blueprints — a playable prototype with most mechanics implemented.",
    },
  ],
};
