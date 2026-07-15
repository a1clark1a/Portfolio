import GameCollection from "./images/GameCollectionjpg.jpg";
import ShadowBot from "./images/shadowbot.png";
import TagALogV2Pc from "./images/desktop-TagALog_v2.png";
import TagALogV2Mobile from "./images/mobile-TagALog_v2.png";
import DailyVersePc from "./images/desktop-DailyVerse.png";
import DailyVerseMobile from "./images/mobile-DailyVerse.png";
import DiceTablePc from "./images/desktop-dice-table.png";
import DiceTableMobile from "./images/phone-dice-table.png";

//Local PNG icons (no Devicon equivalent)
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
          <b>Pick &amp; Pack:</b> shipped the order-fulfillment MVP to 50+
          Molton Brown stores, fully replacing legacy warehouse workflows — a
          complete serverless AWS Lambda REST API, IndexedDB offline sync layer,
          and optimistic locking with Firestore Transactions, all in TypeScript.
        </>,
        <>
          <b>Australia Post migration:</b> wrote the Node.js script to migrate
          1M+ IBM Cloudant documents to Firestore at 100% accuracy across live
          systems — atomic batch writes, fail-and-split retries, dead-letter
          queuing, exponential backoff, and checkpoint-based resumability.
        </>,
        <>
          <b>Alert Center:</b> integrated real-time Firestore order updates and
          badge dispatch notifications into a central order-management dashboard
          used by 100+ Kroger delivery drivers.
        </>,
        <>
          <b>POS Self-Checkout:</b> delivered a production-ready self-checkout
          MVP demoed to 1,000+ attendees at NRF (React, Redux, TypeScript,
          Material UI, Cordova).
        </>,
        <>
          <b>Quality:</b> maintained 100% unit &amp; integration coverage (Jest,
          Enzyme, SonarCloud) under a zero-lint-warning CI/CD policy.
        </>,
      ],
      tools:
        "React · Redux · TypeScript · AWS Lambda · Firestore · Node.js · IndexedDB · Jest",
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
          Built an embeddable onboarding checklist widget in pure vanilla
          JavaScript, syncing real-time progress over Pusher.
        </>,
        <>
          Built the React/Chakra CRM dashboard and refactored Node/Express +
          PostgreSQL (Knex) REST endpoints for account management and Stripe
          subscription billing; hardened secret management.
        </>,
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
          Built the new-user campaign page series in React.js and Next.js — a
          guided flow business owners use to launch a campaign and influencers
          use to discover and apply.
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
