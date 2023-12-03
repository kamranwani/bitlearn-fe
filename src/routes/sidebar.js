import {
  FiGrid,
  FiUsers,
  FiUser,
  FiCompass,
  FiSettings,
  FiSlack,
  FiGlobe,
  FiTarget,
} from "react-icons/fi";
import { FaRegPlayCircle, FaBookOpen, FaWallet } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GiJigsawPiece } from "react-icons/gi";

import { MdMessage } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { MdOutlineManageAccounts } from "react-icons/md";

/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const sidebar = [
  // {
  //   // path: "/ecommerce-dashboard", // the url
  //   icon: FiGrid, // icon
  //   name: "Ecommerce Dashboard", // name that appear in Sidebar
  // },

  {
    icon: FiSlack,
    name: "Ecommerce Dashboard",
    path: "/ecommerce-dashboard",
    routes: [
      {
        path: "/mycourse",
        name: "My Course",
        icon: <FaRegPlayCircle fontSize={26} />,
      },
      {
        path: "/calender",
        name: "Calender",
        icon: <SlCalender fontSize={26} />,
      },
      {
        path: "/resource",
        name: "Resource",
        icon: <FaBookOpen fontSize={26} />,
      },
      {
        path: "/quiz",
        name: "Quiz",
        icon: <GiJigsawPiece fontSize={26} />,
      },
      {
        path: "/message",
        name: "Message",
        icon: <MdMessage fontSize={26} />,
      },
      {
        path: "/mystatus",
        name: "My Status",
        icon: <SlGraph fontSize={26} />,
      },
      {
        path: "/wallet",
        name: "Wallet",
        icon: <FaWallet fontSize={26} />,
      },
      {
        path: "/myaccount",
        name: "My Account",
        icon: <MdOutlineManageAccounts fontSize={26} />,
      },
    ],
  },

  // {
  //   path: "/customers",
  //   icon: FiUsers,
  //   name: "Customers",
  // },
  // {
  //   path: "/orders",
  //   icon: FiCompass,
  //   name: "Orders",
  // },

  // {
  //   path: "/our-staff",
  //   icon: FiUser,
  //   name: "OurStaff",
  // },

  // {
  //   path: "/settings",
  //   icon: FiSettings,
  //   name: "StoreSetting",
  // },
  // {
  //   icon: FiSettings,
  //   name: "Elearning Dahboard",
  // },
  {
    // path: "/elearning-dashboard", // the url
    icon: FiGrid, // icon
    name: "E-learning Dashboard",
    path: "/elearning-dashboard",
    // name that appear in Sidebar
    routes: [
      {
        path: "/mycourse",
        name: "My Course",
        icon: <FaRegPlayCircle fontSize={26} />,
      },
      {
        path: "/calender",
        name: "Calender",
        icon: <SlCalender fontSize={26} />,
      },
      {
        path: "/resource",
        name: "Resource",
        icon: <FaBookOpen fontSize={26} />,
      },
      {
        path: "/quiz",
        name: "Quiz",
        icon: <GiJigsawPiece fontSize={26} />,
      },
      {
        path: "/message",
        name: "Message",
        icon: <MdMessage fontSize={26} />,
      },
      {
        path: "/mystatus",
        name: "My Status",
        icon: <SlGraph fontSize={26} />,
      },
      {
        path: "/wallet",
        name: "Wallet",
        icon: <FaWallet fontSize={26} />,
      },
      {
        path: "/myaccount",
        name: "My Account",
        icon: <MdOutlineManageAccounts fontSize={26} />,
      },
    ],
  },
  {
    icon: FiSlack,
    name: "Engagement Dashboard",
    path: "/engagement-dashboard",
    routes: [
      {
        path: "/mycourse",
        name: "My Course",
        icon: <FaRegPlayCircle fontSize={26} />,
      },
      {
        path: "/calender",
        name: "Calender",
        icon: <SlCalender fontSize={26} />,
      },
      {
        path: "/resource",
        name: "Resource",
        icon: <FaBookOpen fontSize={26} />,
      },
      {
        path: "/quiz",
        name: "Quiz",
        icon: <GiJigsawPiece fontSize={26} />,
      },
      {
        path: "/message",
        name: "Message",
        icon: <MdMessage fontSize={26} />,
      },
      {
        path: "/mystatus",
        name: "My Status",
        icon: <SlGraph fontSize={26} />,
      },
      {
        path: "/wallet",
        name: "Wallet",
        icon: <FaWallet fontSize={26} />,
      },
      {
        path: "/myaccount",
        name: "My Account",
        icon: <MdOutlineManageAccounts fontSize={26} />,
      },
    ],
  },
  // {
  //   path: "/elearning-dashboard",
  //   icon: FiSettings,
  //   name: "Engagement Dashboard",
  // },
  // {
  //   path: "/superadmin-dashboard",
  //   icon: FiSettings,
  //   name: "Super Admin Dashboard",
  // },
  {
    // path: "/elearning-dashboard", // the url
    icon: FiGrid, // icon
    name: "Super Admin Dashboard",
    path: "/superadmin-dashboard",
    // name that appear in Sidebar
    routes: [
      {
        path: "/menu1",
        name: "Menu 1",
      },
      {
        path: "/menu2",
        name: "Menu 2",
      },
      {
        name: "Menu 3",
        routes: [
          {
            path: "/submenua",
            name: "Sub Menu A",
          },
          {
            path: "/submenub",
            name: "Sub Menu B",
          },
        ],
      },
    ],
  },
  // {
  //   icon: FiGlobe,
  //   name: "International",
  //   routes: [
  //     {
  //       path: "/languages",
  //       name: "Languages",
  //     },
  //     {
  //       path: "/currencies",
  //       name: "Currencies",
  //     },
  //   ],
  // },
  // {
  //   icon: FiTarget,
  //   name: "ViewStore",
  //   path: "http://localhost:3000",
  //   outside: "store",
  // },

  // {
  //   icon: FiSlack,
  //   name: "Pages",
  //   routes: [
  //     // submenu

  //     {
  //       path: "/404",
  //       name: "404",
  //     },
  //     {
  //       path: "/coming-soon",
  //       name: "Coming Soon",
  //     },
  //   ],
  // },
];

export default sidebar;
