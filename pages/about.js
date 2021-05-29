import Card from "components/atoms/Card";
import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Flex from "components/atoms/Flex";
import Page from "components/templates/Page";
import Image from "next/image";
import Box from "components/atoms/Box";
import LinkTo from "components/utilities/LinkTo";
import { styled } from "stitches.config";

const LinkText = styled("span", {
  color: "$accent",
});

const Link = ({ href, children }) => (
  <LinkTo href={href} displayContents>
    <LinkText>{children}</LinkText>
  </LinkTo>
);

export default function About() {
  return (
    <Page>
      <Section>
        <Content>
          <Flex gap align="start">
            <Card>
              <Image
                src="/images/Headshot.jpeg"
                alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                width={1200}
                height={1932}
                layout="intrinsic"
              />
            </Card>
            <Box css={{ marginLeft: "$space400" }}>
              <Text preset="heading" css={{ maxWidth: "105ch", width: "100%" }}>
                Aaron Porter is a designer & technologist based in Grand Rapids,
                Michigan. He currently leads design at{" "}
                <Link href="https://getcarefull.com">Carefull</Link>, and
                previously worked at{" "}
                <Link href="https://truetoform.design">TTF</Link> &{" "}
                <Link href="https://google.com">Google</Link>. <br />
                <br />
                His goal is to create products that are subservient to the
                individual, systems that empower human agency, and experiences
                that foster understanding.
              </Text>
            </Box>
          </Flex>
        </Content>
      </Section>
    </Page>
  );
}
