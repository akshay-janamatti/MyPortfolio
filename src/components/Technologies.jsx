import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaAws } from "react-icons/fa";

import {
  SiMongodb,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiGithub,
  SiNginx,
  SiGooglecloud,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";

// Safe animation durations to cycle through
const durations = [2, 3, 4, 5];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// All icons in one array
const icons = [
  <RiReactjsLine className="text-6xl text-cyan-400" />,
  <SiCplusplus className="text-6xl text-orange-600" />,
  <SiMongodb className="text-6xl text-green-500" />,
  <GrMysql className="text-6xl text-blue-500" />,
  <FaNodeJs className="text-6xl text-green-500" />,
  <SiHtml5 className="text-6xl text-orange-600" />,
  <SiCss3 className="text-6xl text-blue-600" />,
  <SiJavascript className="text-6xl text-yellow-400" />,
  <SiTailwindcss className="text-6xl text-sky-400" />,
  <SiBootstrap className="text-6xl text-purple-700" />,
  <SiPython className="text-6xl text-yellow-300" />,
  <SiGithub className="text-6xl text-white" />,
  <SiNginx className="text-6xl text-green-600" />,
  <FaAws className="text-6xl text-orange-400" />,
  <SiGooglecloud className="text-6xl text-blue-400" />,
  <SiVisualstudiocode className="text-6xl text-blue-500" />,
  <SiPostman className="text-6xl text-orange-500" />,
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            variants={iconVariants(durations[index % durations.length])}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {Icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
