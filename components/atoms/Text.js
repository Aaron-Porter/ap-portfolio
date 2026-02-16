import { stitchesToStyle } from "lib/style";

const presetClasses = {
  xLargeHeading:
    "font-normal text-[28px] leading-8 pt-3 pb-4 md:text-[40px] md:leading-[48px] lg:text-[52px] lg:leading-[60px] lg:pt-4 lg:pb-8",
  largeHeading:
    "font-normal text-2xl leading-7 pt-1 pb-1 lg:text-4xl lg:leading-[44px] lg:pt-2",
  heading: "font-normal text-xl leading-6 py-2 lg:text-[22px] lg:leading-7",
  subHeading:
    "font-normal text-lg leading-6 tracking-[0.01em] pt-1 pb-2 lg:text-xl lg:leading-7",
  body: "font-normal text-base leading-6 tracking-[0.015em] lg:text-lg",
  bodySmall: "font-normal text-sm leading-5",
  overline:
    "font-normal text-xs uppercase font-suisse-mono tracking-[0.075em] pb-1 lg:text-sm lg:pb-2",
};

const Text = ({ as: Component = "span", preset = "body", css, style, className = "", children, ...props }) => (
  <Component
    className={`inline-block m-0 text-gray-0 leading-[calc(1em+4px)] relative ${presetClasses[preset] ?? presetClasses.body} ${className}`.trim()}
    style={{ ...stitchesToStyle(css), ...style }}
    {...props}
  >
    {children}
  </Component>
);

export default Text;
