import Section from "components/atoms/Section";

const Landing = ({ children, className = "", ...props }) => (
  <Section className={`pt-16 lg:pt-24 pb-0 ${className}`.trim()} {...props}>
    {children}
  </Section>
);

export default Landing;
