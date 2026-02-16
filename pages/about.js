import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Flex from "components/atoms/Flex";
import Page from "components/templates/Page";
import Image from "next/image";
import Box from "components/atoms/Box";
import LinkTo from "components/utilities/LinkTo";
import Landing from "components/molecules/Landing";
import Grid from "components/atoms/Grid";
import AssetCard from "components/molecules/AssetCard";
import CopyToClipboardButton from "components/molecules/CopyToClipboardButton";

const Link = ({ href, children }) => (
  <LinkTo href={href} displayContents>
    <span className="text-accent">{children}</span>
  </LinkTo>
);

export default function About() {
  return (
    <Page
      title="About Me"
      description="Aaron Porter is an independent designer & technologist. Previously at Carefull, TTF, & Google."
    >
      <Landing>
        <Content>
          <Box className="mb-8">
            <Text preset="xLargeHeading" className="max-w-[30ch] w-full">
              Aaron Porter is a designer & technologist. Previously at <Link href="https://getcarefull.com">Carefull</Link>, <Link href="https://truetoform.design">TTF</Link>, & <Link href="https://google.com">Google</Link>.
              <br />
              Now independent.
              <br />
            </Text>
          </Box>
          <Box>
            <Text preset="subHeading">A bit about me</Text>
            <Grid columns={2} gapSize="large">
              <Text className="text-gray-300">
                I started designing at 13. Living in a rural area with a limited internet connection, I lugged our family’s iMac to a friend’s house to download a (totally legal) copy of adobe illustrator. <br />
                <br />
                I’ve approached my career since then with a similar amount of vigour. Always seeking to learn, understand, and evolve. I find joy in the process of piecing together small parts of the built world. Guided by the hope that my work can help to create products that are subservient to the individual, systems that empower human agency, and experiences that foster understanding.
              </Text>
              <Text className="text-gray-300">
                When I’m not designing, you can find me obsessively reading, spreadsheeting, or annoying my wife about my obsession of the month. Past episodes have included: optimization of tax-advantage investment accounts, the perfect t-shirt, correcting my broken body due to 10+ years of sitting at a computer, & much more. Feel free to ask and I’ll fill you into the featured selection. <br />
                <br />
                I’m currently based in Grand Rapids, Michigan. The city I went to college, met my wife, and a place that seems to consistently pull me back.
              </Text>
            </Grid>
          </Box>
          <Section>
            <Text preset="overline" className="text-gray-300 pb-6">
              A bunch of photos of me, you’re welcome
            </Text>
            <Flex gap align="start">
              <Flex direction="column" gap>
                <AssetCard caption="This what I look like roughly. Less serious most of the time.">
                  <Image src="/images/aaronporter_about_1@2x.jpg" alt="Portrait" width={1104} height={1544} />
                </AssetCard>
                <AssetCard caption="Always looking to capture an authentic moment.">
                  <Image src="/images/aaronporter_about_3@2x.jpg" alt="Portrait" width={1104} height={1508} />
                </AssetCard>
                <AssetCard caption="I go outside sometimes!">
                  <Image src="/images/aaronporter_about_5@2x.jpg" alt="Portrait" width={1104} height={1508} />
                </AssetCard>
              </Flex>
              <Flex direction="column" gap>
                <AssetCard caption="Fitting in a bit of work in Acadia National Park. I'm really great at work life balance!">
                  <Image src="/images/aaronporter_about_2@2x.jpg" alt="Portrait" width={1104} height={1396} />
                </AssetCard>
                <AssetCard caption="Married up.">
                  <Image src="/images/aaronporter_about_4@2x.jpg" alt="Portrait" width={1104} height={1526} />
                </AssetCard>

                <AssetCard caption="Always wear your protect gear.">
                  <Image src="/images/aaronporter_about_6@2x.jpg" alt="Portrait" width={1104} height={1352} />
                </AssetCard>
              </Flex>
            </Flex>
          </Section>
          <Section>
            <Box className="mx-auto text-center">
              <Text preset="largeHeading">That's all. Hire me or something.</Text>
              <Box className="mt-6">
                <CopyToClipboardButton value="hello@aaronporter.co">hello@aaronporter.co</CopyToClipboardButton>
              </Box>
            </Box>
          </Section>
        </Content>
      </Landing>
    </Page>
  );
}
