import { motion } from "framer-motion";
import { stitchesToStyle } from "lib/style";

const Box = ({ className = "", css, style, children, ...props }) => (
  <motion.div
    className={`box-border relative ${className}`.trim()}
    style={{ ...stitchesToStyle(css), ...style }}
    {...props}
  >
    {children}
  </motion.div>
);

export default Box;
