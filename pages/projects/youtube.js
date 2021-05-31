import Image from "next/image";
import ProjectCard from "components/molecules/ProjectCard";
import Page from "components/templates/Page";
import { styled } from "stitches.config";
import Carousel from "components/molecules/Carousel";
import Grid from "components/atoms/Grid.js";
import Project from "components/templates/Project";
import AssetCard from "components/molecules/AssetCard";
import ProjectHighlight from "components/organisms/ProjectHighlight";
import ProjectIntro from "components/organisms/ProjectIntro";
import Card from "components/atoms/Card";
import ConfidentialBanner from "components/molecules/ConfidentialBanner";
import LinkTo from "components/utilities/LinkTo";
import React from "react";
import ListCard from "components/molecules/ListCard";
import Text from "components/atoms/Text";
import Section from "components/atoms/Section";
import Content from "components/atoms/Content";
import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import PortfolioPresentationCard from "components/organisms/PortfolioPresentationCard";

export default function Carefull() {
  return (
    <Project>
      <ProjectIntro
        client="YouTube"
        role="Interaction Designer"
        year="2020-Present"
        title="Evolving the experience of premium content across the YouTube ecosystem"
        description={
          <>
            I helped to evolve the experience of premium content across the
            YouTube ecosystem. Informed by the needs of our users & the
            importance of a distinct experience, the patterns our team developed
            while building YouTube Premium were adopted across product verticals
            and contributed towards a more concrete standard for.
          </>
        }
      >
        <Card pressable={false} align="center" justify="center">
          <Image
            src="/projects/carefull/carefull_image_1@2x.png"
            alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
            width={552}
            height={549}
          />
        </Card>
      </ProjectIntro>
      <ProjectHighlight
        heading={
          <>
            I guided interaction design for the evolution of our Premium
            offering
          </>
        }
      >
        <Content>
          <Grid columns={2}>
            <ListCard
              text={
                <>
                  Worked with our research team to uncover past research
                  learning to define critical user journeys. Which we used to
                  measure the current success of the product and guideline to
                  measure future releases against. Giving design quantifiable
                  measurements by which to inact change
                </>
              }
              iconName="Chat"
            />
            <ListCard
              text={
                <>
                  Lead a cross-functional sprint to quickly explore a broad set
                  of concepts
                </>
              }
              iconName="Chat"
            />
          </Grid>
        </Content>
      </ProjectHighlight>

      <PortfolioPresentationCard />
    </Project>
  );
}
