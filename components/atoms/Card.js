import Flex from "components/atoms/Flex";

const Card = ({ children, pressable = false, className = "", ...props }) => (
  <Flex
    className={`bg-gray-900 rounded-lg relative overflow-hidden [clip-path:border-box] [backface-visibility:hidden] [transform-style:preserve-3d] ${pressable ? "cursor-pointer" : ""} ${className}`.trim()}
    whileHover={pressable ? { transform: "translateY(0px) scale(1.03)" } : undefined}
    whileTap={pressable ? { transform: "translateY(0px) scale(0.97)" } : undefined}
    {...props}
  >
    {children}
  </Flex>
);

Card.Content = ({ children, className = "", ...props }) => (
  <Flex className={`relative p-6 lg:p-10 ${className}`.trim()} direction="column" {...props}>
    {children}
  </Flex>
);

export default Card;
