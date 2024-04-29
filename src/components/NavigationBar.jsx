import Logo from "../assets/Logo.png";
import { MdDashboard } from "react-icons/md";
import { SiActivitypub } from "react-icons/si";
import { IoAnalytics } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { FaHandsHelping } from "react-icons/fa";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const navLinks = [
  {
    index: 0,
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    index: 1,
    name: "Activity",
    icon: <SiActivitypub />,
  },
  {
    index: 2,
    name: "Analytics",
    icon: <IoAnalytics />,
  },
  {
    index: 3,
    name: "Transactions",
    icon: <GoArrowSwitch />,
  },
  {
    index: 4,
    name: "Help",
    icon: <FaHandsHelping />,
  },
];

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "5%" },
};

const NavigationBar = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={`py-12 flex flex-col border border-r-1 w-1/5 h-screen relative ${
        isExpanded ? "px-10" : "px-4"
      }`}
    >
      <div className="logo-div flex space-x-3 items-center">
        <img src={Logo} />
        {isExpanded && <span>Money Tracker</span>}
      </div>

      <div className="w-5 h-5 bg-[#FF8C8C] rounded-full absolute -right-2.5 top-14 flex items-center justify-center text-lg text-white cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <MdKeyboardArrowRight />
      </div>

      <div className="mt-9 flex flex-col space-y-8">
        {navLinks.map((item) => (
          <div
            key={item.index}
            className={`flex space-x-3 px-2 ${
              activeNav === item.name
                ? "bg-[#FF8C8C] text-white font-semibold py-2 rounded-2xl"
                : ""
            }`}
            onClick={() => setActiveNav(item.name)}
          >
            <span className="text-xl">{item.icon}</span>
            {isExpanded && <span>{item.name}</span>}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavigationBar;
