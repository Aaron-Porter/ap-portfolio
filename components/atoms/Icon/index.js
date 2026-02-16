import React from "react";
import Box from "components/atoms/Box";

import ArrowRightUp from "./icons/ArrowRightUp.svg";
import EyeSlash from "./icons/EyeSlash.svg";
import ArrowDown from "./icons/ArrowDown.svg";
import Chat from "./icons/Chat.svg";
import Notebook from "./icons/Notebook.svg";
import PieChart from "./icons/PieChart.svg";
import StickyNote from "./icons/StickyNote.svg";
import Copy from "./icons/Copy.svg";
import ArrowsClockwise from "./icons/ArrowsClockWise.svg";
import TreeStructure from "./icons/TreeStructure.svg";
import Info from "./icons/Info.svg";
import Moon from "./icons/Moon.svg";
import Sun from "./icons/Sun.svg";
import ArrowLeft from "./icons/ArrowLeft.svg";
import Smiley from "./icons/Smiley.svg";
import CircleWavyCheck from "./icons/CircleWavyCheck.svg";
import FolderNotchOpen from "./icons/FolderNotchOpen.svg";
import Code from "./icons/Code.svg";
import Github from "./icons/Github.svg";
import NewspaperClipping from "./icons/NewspaperClipping.svg";

const iconTypes = {
  ArrowRightUp,
  EyeSlash,
  ArrowDown,
  Chat,
  Notebook,
  PieChart,
  StickyNote,
  Copy,
  ArrowsClockwise,
  TreeStructure,
  Info,
  Moon,
  Sun,
  ArrowLeft,
  Smiley,
  CircleWavyCheck,
  FolderNotchOpen,
  Code,
  Github,
  NewspaperClipping,
};

const Icon = ({ name, css, className = "", ...props }) => {
  const SvgIcon = iconTypes[name];

  if (!SvgIcon) {
    return null;
  }

  return (
    <Box css={css} className={className}>
      <SvgIcon {...props} style={{ height: "100%", width: "100%" }} />
    </Box>
  );
};

export default Icon;
