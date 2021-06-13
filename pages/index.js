import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Image from "next/image";
import Card from "components/atoms/Card";
import Icon from "components/atoms/Icon";
import ProjectCard from "components/molecules/ProjectCard";
import Page from "components/templates/Page";
import Grid from "components/atoms/Grid";
import Landing from "components/molecules/Landing";

export default function Home() {
  return (
    <Page>
      <Landing>
        <Content>
          <Box>
            <Text preset="xLargeHeading" css={{ maxWidth: "28ch" }}>
              Aaron Porter designs products & systems to empower human agency.
            </Text>
          </Box>
        </Content>
      </Landing>
      <Section css={{ paddingTop: "$space400" }}>
        <Content>
          <Text
            preset="overline"
            css={{ color: "$gray500", marginBottom: "$space300" }}
          >
            Featured Projects
          </Text>
          <Grid columns={2}>
            <ProjectCard
              title="Carefull"
              description="A service to enable the 45 million Americans that are financial caregivers."
              dates="2020-Present"
              role="Design Lead"
              link="/projects/carefull"
              image={
                <Image
                  src="/projects/carefull/carefull_image_1@2x.png"
                  alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                  width={552}
                  height={552}
                  layout="responsive"
                />
              }
            />
            <Flex direction="column" jus gap>
              <ProjectCard
                title="Wayfair"
                dates="2018-2019"
                role="UX Consultant"
                link="/projects/wayfair"
                image={
                  <Image
                    src="/projects/wayfair/wayfair_logo@2x.png"
                    alt="Logo for Wayfair"
                    width={48}
                    height={48}
                    layout="intrinsic"
                  />
                }
              />
              <ProjectCard
                title="YouTube"
                dates="2016-2018"
                role="UX Designer"
                link="/projects/youtube"
                image={
                  <Image
                    src="/projects/youtube/youtube_logo@2x.png"
                    alt="Logo for YouTube"
                    width={69}
                    height={48}
                    layout="intrinsic"
                  />
                }
              />
            </Flex>
          </Grid>
        </Content>
      </Section>
      <Section>
        <Content>
          <Text
            preset="overline"
            css={{ color: "$gray500", marginBottom: "$space300" }}
          >
            Old, small, or exploratory projects
          </Text>
          <Grid columns={2}>
            <ProjectCard
              title="Stories"
              description="Art direction & mini-site to tell the stories of financial caregivers."
              dates="2020"
              link="https://www.getcarefull.com/stories"
              fullWidthImage
              openLinkInNewTab
              image={
                <Image
                  src="/projects/stories/stories_thumbnail@2x.png"
                  alt="A collage of images. The focal point is a face aligned with the face on a dollar bill."
                  layout="fill"
                  objectFit="cover"
                />
              }
            />
            <ProjectCard
              title="Personal Website"
              description="Featured on Awwwards, Siteinspire, Mindsparkle, & many more."
              dates="2016"
              link="http://2016.aaronporter.co"
              fullWidthImage
              openLinkInNewTab
              image={
                <Image
                  src="/projects/2016-portfolio/portfolio_thumbnail.jpg"
                  alt="Man sitting on a stool with the text 'Aaron.' on top of the image"
                  layout="fill"
                  objectFit="cover"
                />
              }
            />
            <ProjectCard
              title="2001: A VR Space Odyssey"
              description="Built a recreation of an iconic scene using Unity & C4D."
              dates="2016"
              link="https://vimeo.com/209768060?ref=tw-share"
              fullWidthImage
              openLinkInNewTab
              image={
                <Image
                  src="/projects/2001-space/2001_thumbnail.png"
                  alt="A virtual reality scene of the inside of a futuristic centrifuge."
                  layout="fill"
                  objectFit="cover"
                />
              }
            />
            <ProjectCard
              title="Beach"
              description="Art Direction & Video Production for an album campaign."
              dates="2015"
              link="https://www.behance.net/gallery/30857527/Beach"
              fullWidthImage
              openLinkInNewTab
              image={
                <Image
                  src="/projects/beach/beach_thumbnail.jpg"
                  alt="A person's head sticking out of a body of water looking at the sunset."
                  layout="fill"
                  objectFit="cover"
                />
              }
            />
          </Grid>
        </Content>
      </Section>
    </Page>
  );
}
