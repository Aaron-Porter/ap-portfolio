import { stitchesToStyle } from "lib/style";

const Section = ({ className = "", css, style, children, ...props }) => (
  <section className={`py-8 md:py-16 ${className}`.trim()} style={{ ...stitchesToStyle(css), ...style }} {...props}>
    {children}
  </section>
);

export default Section;
