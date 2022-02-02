import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Image from "next/image";
import Card from "components/atoms/Card";
import Icon from "components/atoms/Icon";
import FeaturedProjectCard from "components/molecules/FeaturedProjectCard";
import ProjectCard from "components/molecules/ProjectCard";
import Page from "components/templates/Page";
import Grid from "components/atoms/Grid";
import Landing from "components/molecules/Landing";

import image1 from "../public/projects/carefull/carefull_image_1@2x.png";
import image2 from "../public/projects/stories/stories_thumbnail@2x.png";
import image3 from "../public/projects/2016-portfolio/portfolio_thumbnail.jpg";
import image4 from "../public/projects/2001-space/2001_thumbnail.png";
import image5 from "../public/projects/beach/beach_thumbnail.jpg";
import image6 from "../public/projects/brandsupplies/BrandSupplies@2x.png";

export default function Home() {
  return (
    <Page description="Aaron Porter designs products & systems to empower human agency. Via qualitative research, UX methods, visual design, & engineering — he builds software interfaces for human interaction.">
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
            css={{ color: "$gray300", marginBottom: "$space300" }}
          >
            Featured Projects
          </Text>
          <Grid columns={2}>
            <FeaturedProjectCard
              title="Carefull"
              description="A service to enable the 45 million Americans that are financial caregivers."
              dates="2020-Present"
              role="Design Lead"
              link="/projects/carefull"
              image={
                <Image
                  src={image1}
                  alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                  layout="responsive"
                  priority
                  placeholder="blur"
                />
              }
            />
            <Flex direction="column" jus gap>
              <FeaturedProjectCard
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
                    priority
                  />
                }
              />
              <FeaturedProjectCard
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
                    priority
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
            css={{ color: "$gray300", marginBottom: "$space300" }}
          >
            Other projects
          </Text>
          <Grid columns={2}>
            <ProjectCard
              title="Brand Supplies"
              description="Stop rummaging the web for accurate brand assets. Brand Supplies curates accurate vector assets for every brand."
              dates="2022"
              link="https://www.brand.supplies"
              fullWidthImage
              openLinkInNewTab
              image={image6}
              imageAlt="A collection of brand logos arranged in a grid."
            />
            <ProjectCard
              title="Stories"
              description="Art direction & mini-site to tell the stories of financial caregivers."
              dates="2020"
              link="https://www.getcarefull.com/stories"
              fullWidthImage
              openLinkInNewTab
              image={image2}
              imageAlt="A collage of images. The focal point is a face aligned with the face on a dollar bill."
            />
            <ProjectCard
              title="Personal Website"
              description="Featured on Awwwards, Siteinspire, Mindsparkle, & many more."
              dates="2016"
              link="http://2016.aaronporter.co"
              imageAlt="Man sitting on a stool with the text 'Aaron.' on top of the image"
              image={image3}
            />
            <ProjectCard
              title="2001: A VR Space Odyssey"
              description="Built a recreation of an iconic scene using Unity & C4D."
              dates="2016"
              link="https://vimeo.com/209768060?ref=tw-share"
              imageAlt="A virtual reality scene of the inside of a futuristic centrifuge."
              image={image4}
            />
            <ProjectCard
              title="Beach"
              description="Art Direction & Video Production for an album campaign."
              dates="2015"
              link="https://www.behance.net/gallery/30857527/Beach"
              imageAlt="A person's head sticking out of a body of water looking at the sunset."
              image={image5}
            />
          </Grid>
        </Content>
      </Section>
    </Page>
  );
}
