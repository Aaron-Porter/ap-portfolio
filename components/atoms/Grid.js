import Box from "components/atoms/Box";

const Grid = ({ columns = 1, gapSize = "default", className = "", children, ...props }) => (
  <Box
    className={`grid w-full p-0 m-0 ${columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} ${gapSize === "large" ? "gap-8 lg:gap-10" : "gap-4 lg:gap-6"} ${className}`.trim()}
    {...props}
  >
    {children}
  </Box>
);

export default Grid;
