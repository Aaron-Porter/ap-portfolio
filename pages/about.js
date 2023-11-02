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
import Landing from "components/molecules/Landing";
import Grid from "components/atoms/Grid";
import AssetCard from "components/molecules/AssetCard";
import CopyToClipboardButton from "components/molecules/CopyToClipboardButton";

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
    <Page
      title="About Me"
      description="Tamara is a PhD student and UC Berkeley graduate."
    >
      <Landing>
        <Content>
          <Box css={{ marginBottom: "$space500" }}>
            <Text
              preset="xLargeHeading"
              css={{ maxWidth: "30ch", width: "100%" }}
            >
              Tamara is a researcher & bioinformatics scienist. Previously at{" "}
              <Link href="https://www.atlasxomics.com/?gclid=CjwKCAjwkY2qBhBDEiwAoQXK5WmaAoGsQWqzpOwtbGJYfyJ6lrmzX3ChxHal3ajbA-LQ0_DKSTpM5BoCKmQQAvD_BwE">AtlasXomics</Link>,{" "}
              <Link href="https://medicine.yale.edu/lab/ynn/">Yale</Link>, &{" "}
              <Link href="https://google.com">Berkeley</Link>.
              <br />
              Now computational neuroscience PhD student at USC.
              <br />
            </Text>
          </Box>
          <Box>
            <Text preset="subHeading">A bit about me</Text>
            <Grid columns={2} gapSize="large">
              <Text css={{ color: "$gray300" }}>
                Building biotech community at Nucleate.{" "}
                <br />
                <br />
                Tamara is a first-year PhD student in the University of Southern 
                California’s Neuroscience Graduate program. She graduated from Cal 
                in 2021 with degrees in Public Health and Integrative Biology. 
                After graduating she pursued translational and computational research 
                as a Postgraduate Fellow at Yale’s Clinical Neuroscience Neuroanalytics 
                Laboratory. Afterwards she worked as a bioinformatics scientist at a 
                spatial genomics startup. Join the conversation where Tamara hopes to
                answer questions and share insights about public health major at 
                Berkeley and exploring your interdisciplinary interests.
              </Text>
              <Text css={{ color: "$gray300" }}>
                When I’m not in the lab, you can find me obsessively reading,
                teaching, or designing. <br />
                <br />
                I’m based in Los Angeles, California. 
              </Text>
            </Grid>
          </Box>
          <Section>
            <Text
              preset="overline"
              css={{ color: "$gray300", paddingBottom: "$space400" }}
            >
              A bunch of photos of me, you’re welcome
            </Text>
            <Flex gap align="start">
              <Flex direction="column" gap>
                <AssetCard caption="This what I look like roughly. Less serious most of the time.">
                  <Image
                    src="/images/aaronporter_about_1@2x.jpg"
                    alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                    width={1104}
                    height={1544}
                  />
                </AssetCard>
                <AssetCard caption="Always looking to capture an authentic moment.">
                  <Image
                    src="/images/aaronporter_about_3@2x.jpg"
                    alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                    width={1104}
                    height={1508}
                  />
                </AssetCard>
                <AssetCard caption="I go outside sometimes!">
                  <Image
                    src="/images/aaronporter_about_5@2x.jpg"
                    alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                    width={1104}
                    height={1508}
                  />
                </AssetCard>
              </Flex>
              <Flex direction="column" gap>
                <AssetCard caption="Fitting in a bit of work in Acadia National Park. I'm really great at work life balance!">
                  <Image
                    src="/images/aaronporter_about_2@2x.jpg"
                    alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                    width={1104}
                    height={1396}
                  />
                </AssetCard>
                <AssetCard caption="Married up.">
                  <Image
                    src="/images/aaronporter_about_4@2x.jpg"
                    alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                    width={1104}
                    height={1526}
                  />
                </AssetCard>

                <AssetCard caption="Always wear your protect gear.">
                  <Image
                    src="/images/aaronporter_about_6@2x.jpg"
                    alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                    width={1104}
                    height={1352}
                  />
                </AssetCard>
              </Flex>
            </Flex>
          </Section>
          <Section>
            <Box css={{ margin: "0 auto", textAlign: "center" }}>
              <Text preset="largeHeading">
                That's all. Hire me or something.
              </Text>
              <Box css={{ marginTop: "$space400" }}>
                <CopyToClipboardButton value="hello@aaronporter.co">
                  hello@aaronporter.co
                </CopyToClipboardButton>
              </Box>
            </Box>
          </Section>
        </Content>
      </Landing>
    </Page>
  );
}
