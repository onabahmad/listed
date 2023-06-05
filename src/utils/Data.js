// Sidebar imports

import { FiPieChart } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";

// Cards imports
import { IoWalletOutline } from "react-icons/io5";

import { AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

// Sidebar Data
export const NavbarData = [
  {
    icon: FiPieChart,
    heading: "Dashboard",
  },
  {
    icon: BsTags,
    heading: "Transactions",
  },
  {
    icon: TbCalendarTime,
    heading: "Schedules",
  },
  {
    icon: BiUserCircle,
    heading: "Users",
  },
  {
    icon: AiOutlineSetting,
    heading: "Settings",
  },
];
// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Revenues",
    color: {
      backGround: "#DDEFE0",
    },
    value: "$2,129,430",
    png: IoWalletOutline,
  },
  {
    title: "Total Transactions",
    color: {
      backGround: "#F4ECDD",
    },

    value: "1520",
    png: BsTags,
  },
  {
    title: "Total Likes",
    color: {
      backGround: "#EFDADA",
    },

    value: "9721",
    png: AiOutlineLike,
  },
  {
    title: "Total Users",
    color: {
      backGround: "#DEE0EF",
    },

    value: "892",
    png: FiUsers,
  },
];
