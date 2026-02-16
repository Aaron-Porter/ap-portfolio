import Box from "./Box";

const directionClasses = {
  row: "flex-col md:flex-row",
  column: "flex-col",
  rowReverse: "flex-row-reverse",
  columnReverse: "flex-col-reverse",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

const wrapClasses = {
  noWrap: "flex-nowrap",
  wrap: "flex-wrap",
  wrapReverse: "flex-wrap-reverse",
};

const Flex = ({
  direction = "row",
  align = "stretch",
  justify = "start",
  wrap = "noWrap",
  gap = false,
  className = "",
  children,
  ...props
}) => (
  <Box
    className={`flex flex-1 box-border ${directionClasses[direction]} ${alignClasses[align]} ${justifyClasses[justify]} ${wrapClasses[wrap]} ${gap ? "gap-4 lg:gap-6" : ""} ${className}`.trim()}
    {...props}
  >
    {children}
  </Box>
);

export default Flex;
