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
import { styled } from "stitches.config";
import Carousel from "components/molecules/Carousel";
import Project from "components/templates/Project";

const ProjectIntro = () => (
  <Section css={{ paddingTop: "$space700" }}>
    <Content>
      <Flex direction="column">
        <Text as="h1" preset="overline" css={{ color: "$gray500" }}>
          Carefull
        </Text>
        <Text as="h2" preset="xLargeHeading" css={{ maxWidth: "28ch" }}>
          Evolved a product & brand from inception to product-market fit.
        </Text>
        <Text
          preset="body"
          css={{
            columnCount: "2",
            columnGap: "$space600",
            color: "$gray300",
          }}
        >
          An estimated 45 million Americans are financial caregivers — adult
          children responsible for the financial well-being of their aging
          parents. They pay bills, haggle with utilities, plan for their future,
          and pay for things they need — all while managing their own financial
          and family life. <br /> <br />
          An audience under-served by large banking institutions, Carefull was
          established to seek to solve the unique problems that face these
          individuals. I joined Carefull at the very beginning of it’s life,
          with nothing but a problem space identified and a hunch that
          intentional technology could enable new solutions.
        </Text>
      </Flex>

      <Card
        pressable={false}
        align="center"
        justify="center"
        css={{ marginTop: "$space500" }}
      >
        <Image
          src="/projects/carefull/carefull_image_1@2x.png"
          alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
          width={552}
          height={549}
        />
      </Card>
    </Content>
  </Section>
);

const ProjectSummary = () => (
  <Section>
    <Content>
      <Flex direction="column" css={{ paddingBottom: "$space500" }}>
        <Text preset="overline" css={{ color: "$gray500" }}>
          What I Did
        </Text>
        <Text preset="largeHeading" css={{ maxWidth: "40ch" }}>
          Used research to build understanding of our potential customers.
          Developed a brand to communicate trust. Evolved product design from
          zero to market fit.
        </Text>
      </Flex>
      <Flex
        direction="row"
        align="start"
        justify="start"
        css={{ paddingTop: "$space500" }}
      >
        <Flex direction="column">
          <Text preset="overline" css={{ color: "$gray500" }}>
            My Role
          </Text>
          <Text preset="subHeading" css={{ maxWidth: "40ch" }}>
            Lead Designer
          </Text>
        </Flex>
        <Flex direction="column">
          <Text preset="overline" css={{ color: "$gray500" }}>
            Discplines Used
          </Text>
          <Text preset="subHeading" css={{ maxWidth: "40ch" }}>
            Research, UX, UI, Design, & Engineering
          </Text>
        </Flex>
      </Flex>
    </Content>
  </Section>
);

const ProjectHighlight = ({ children }) => (
  <Section>
    <Content>
      <Flex direction="column" css={{ paddingBottom: "$space500" }}>
        <Text preset="overline" css={{ color: "$gray500" }}>
          Highlight
        </Text>
        <Text preset="heading" css={{ maxWidth: "40ch" }}>
          Helped to inform a deep understanding of our potentional customers.
        </Text>
      </Flex>
    </Content>
    {children}
  </Section>
);

export default function Carefull() {
  return (
    <Project>
      <ProjectIntro />
      <ProjectSummary />
      <ProjectHighlight>
        <Carousel>
          <Card>
            <Image
              src="/projects/carefull/carefull_image_1@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={552}
              height={549}
            />
          </Card>
          <Card>
            <Image
              src="/projects/carefull/carefull_image_1@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={552}
              height={549}
            />
          </Card>
          <Card>
            <Image
              src="/projects/carefull/carefull_image_1@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={552}
              height={549}
            />
          </Card>
          <Card>
            <Image
              src="/projects/carefull/carefull_image_1@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={552}
              height={549}
            />
          </Card>
        </Carousel>
      </ProjectHighlight>
    </Project>
  );
}
