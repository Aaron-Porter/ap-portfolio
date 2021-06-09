import { styled } from "../../stitches.config";
import Section from "components/atoms/Section";

const Landing = styled(Section, {
  paddingBottom: 0,
  paddingTop: "$space700",
  "@large": {
    paddingTop: "$space800",
  },
});

export default Landing;
