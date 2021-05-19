import { styled } from "../stitches.config";
import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Image from "next/image";

const Card = ({ children, css, padding = "40px" }) => {
  return (
    <Flex
      css={{
        backgroundColor: "$gray900",
        borderRadius: "8px",
        ...css,
      }}
    >
      <Box css={{ padding: padding }}>{children}</Box>
    </Flex>
  );
};

export default function Home() {
  return (
    <>
      <Section css={{ padding: "$xXLarge 0" }}>
        <Content>
          <Box>
            <Text preset="XLTitle" css={{ maxWidth: "28ch" }}>
              Aaron Porter designs products & systems to empower human agency.
            </Text>
          </Box>
        </Content>
      </Section>
      <Section css={{ padding: "$xXLarge 0" }}>
        <Content>
          <Flex direction="row" gap>
            <Card direction="column">
              <Image
                src="/projects/carefull/carefull_image_1@2x.png"
                alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                width={552}
                height={549}
                layout="responsive"
              />
              <Text preset="title">Carefull</Text>
              <Text preset="body">
                A service to enable the 45 million Americans that are financial
                caregivers.
              </Text>
            </Card>
            <Flex direction="column" align="stretch" gap>
              <Card></Card>
              <Card></Card>
            </Flex>
          </Flex>
        </Content>
      </Section>
    </>
  );
}
