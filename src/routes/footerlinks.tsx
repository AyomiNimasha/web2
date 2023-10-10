import {
  BiAddToQueue,
  BiSolidCart,
  BiSolidCategory,
  BiSolidHome,
} from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";

export const FooterLinks = [
  {
    id: 1,
    icon: <BiSolidCategory />,
    name: "Categories",
    path: "#",
  },
  {
    id: 2,
    icon: <BiAddToQueue />,
    name: "New-In",
    path: "#",
  },
  {
    id: 3,
    icon: <BiSolidHome />,
    name: "Home",
    path: "#",
  },
  {
    id: 4,
    icon: <BiSolidCart />,
    name: "Cart",
    path: "#",
  },
  {
    id: 5,
    icon: <BsPersonCircle />,
    name: "Profile",
    path: "#",
  },
];
