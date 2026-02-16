import Box from "./Box";

export const contentWidth = "1128px";
export const contentGutter = "16px";

export const Content = ({ children, className = "", style, ...props }) => (
  <Box
    className={`mx-auto w-[calc(100%-32px)] lg:w-[calc(100%-80px)] ${className}`.trim()}
    style={{ maxWidth: contentWidth, ...style }}
    {...props}
  >
    {children}
  </Box>
);

export default Content;
