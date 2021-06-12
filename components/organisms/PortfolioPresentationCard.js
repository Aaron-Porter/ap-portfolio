import Card from "components/atoms/Card";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Browser from "public/images/Browser.svg";
import Box from "components/atoms/Box";
import CopyToClipboardButton from "components/molecules/CopyToClipboardButton";

const PortfolioPresentationCard = () => (
  <Section id="PortfolioPresentation">
    <Content>
      <Card pressable={false}>
        <Card.Content>
          <Flex direction="column" align="start" justify="between">
            <Flex direction="column" css={{ marginBottom: "$space400" }}>
              <Text preset="largeHeading" css={{ maxWidth: "25ch" }}>
                Want a deeper dive on how I approached this project?
              </Text>
              <Text preset="body" css={{ color: "$gray400", maxWidth: "35ch" }}>
                Portfolio presentations are available upon request, drop me a
                line and I can guide you through how I work.
              </Text>
            </Flex>
            <CopyToClipboardButton value="hello@aaronporter.co">
              hello@aaronporter.co
            </CopyToClipboardButton>
          </Flex>
        </Card.Content>
        <Box
          css={{
            width: "50%",
            padding: "$space500 0",
            transform: "translateX(25%)",
            "@lessThanMedium": { display: "none" },
          }}
        >
          <Browser></Browser>
        </Box>
      </Card>
    </Content>
  </Section>
);

export default PortfolioPresentationCard;
