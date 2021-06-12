import React from "react";
import Box from "components/atoms/Box";

// Icons
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

const iconTypes = {
  ArrowRightUp: ArrowRightUp,
  EyeSlash: EyeSlash,
  ArrowDown: ArrowDown,
  Chat: Chat,
  Notebook: Notebook,
  PieChart: PieChart,
  StickyNote: StickyNote,
  Copy: Copy,
  ArrowsClockwise: ArrowsClockwise,
  TreeStructure: TreeStructure,
  Info: Info,
  Moon: Moon,
  Sun: Sun,
  ArrowLeft: ArrowLeft,
  Smiley: Smiley,
  CircleWavyCheck: CircleWavyCheck,
  FolderNotchOpen: FolderNotchOpen,
  Code: Code,
};

const Icon = ({ name, css, ...props }) => {
  let _Icon = iconTypes[name];
  return (
    <Box css={css}>
      <_Icon {...props} style={{ height: "100%", width: "100%" }} />
    </Box>
  );
};

export default Icon;
