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
        client="Carefull"
        role="Lead Designer"
        year="2020-Present"
        title="Empowering financial caregivers with simplicity, safety, and transparency."
        description={
          <>
            An estimated 45 million Americans are financial caregivers — adult
            children responsible for the financial well-being of their aging
            parents. They pay bills, haggle with utilities, plan for their
            future, and pay for things they need — all while managing their own
            financial and family life. <br /> <br />
            An audience under-served by large banking institutions, Carefull was
            established to seek to solve the unique problems that face these
            individuals. I joined Carefull at the very beginning of it’s life,
            with nothing but a problem space identified and a hunch that
            intentional technology could enable new solutions.
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
      <ProjectHighlight label="About The Project">
        <Content>
          <Grid columns={2} css={{ marginBottom: "$space500" }}>
            <Box>
              <Text preset="subHeading">Context</Text>
              <Text css={{ color: "$gray300" }}>
                I joined Carefull at the very beginning of it’s life, employee
                two. Velocity was the life-blood of the business, we needed
                high-conviction design answers every single day. Our mantra was
                to understand quickly, ship needed functionality, and iterate
                relentlessly.
              </Text>
            </Box>
            <Box>
              <Text preset="subHeading">My Role</Text>
              <Text css={{ color: "$gray300" }}>
                As the lead designer (and only designer), my responsibilities
                were broad and intertwined in every portion of our operations. I
                served as researcher, brand designer, UX designer, & front-end
                developer.
              </Text>
            </Box>
          </Grid>
          <ConfidentialBanner />
        </Content>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            I used research to build a deep understanding of our customers &
            inform product decisions.
          </>
        }
      >
        <Content>
          <Grid columns={2}>
            <ListCard
              text="I conducted 1:1 qualitiative research sessions with financial
            caregivers & eventually users."
              iconName="Chat"
            />
            <ListCard
              text="I aided our head of growth in the formulation of quantitative studies to better understand our market and larger customer trends."
              iconName="PieChart"
            />
            <ListCard
              text="I built foundational artifacts that document the experiences, responsibilities, and needs of our customers."
              iconName="Notebook"
            />
            <ListCard
              text="I ran a series of workshops with our founding team to shape our product thinking."
              iconName="StickyNote"
            />
          </Grid>
        </Content>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            I crafted a brand that communicates trust, understanding, and a
            focus on generational bonds.
          </>
        }
      >
        <Carousel>
          <AssetCard columns={1} caption="">
            <Image
              src="/projects/carefull/Carefull_Logo@2x.png"
              alt="Picture of a mother and son embracing eachother.A purple ring surrounds them showing protection."
              width={1104}
              height={1104}
            />
          </AssetCard>

          <AssetCard columns={1} caption="">
            <Image
              src="/projects/carefull/Carefull_Icon@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={1104}
              height={1104}
            />
          </AssetCard>
          <AssetCard columns={2} caption="">
            <Image
              src="/projects/carefull/Carefull_Collage@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={2256}
              height={1306}
            />
          </AssetCard>
          <AssetCard columns={1} caption="">
            <Image
              src="/projects/carefull/Carefull_Print_1@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={1104}
              height={1104}
            />
          </AssetCard>
          <AssetCard columns={1} caption="">
            <Image
              src="/projects/carefull/Carefull_Print_2@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={1104}
              height={1104}
            />
          </AssetCard>
        </Carousel>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            Designed every experience touchpoint across the service in lock-step
            with engineering, business, & growth.
          </>
        }
      >
        <Carousel>
          <ListCard
            text="Uncovered user journeys, mapped flows, built wireframes, and constructed prototypes to shape our product."
            iconName="TreeStructure"
          />
          <ListCard
            text="Used quantitative & qualitative data from our customers to iterate and ship constant UX improvements."
            iconName="ArrowsClockwise"
          />
          <AssetCard columns={2} caption="">
            <Image
              src="/projects/carefull/Carefull_UX_1@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={2256}
              height={1422}
            />
          </AssetCard>
          <AssetCard columns={1} caption="">
            <Image
              src="/projects/carefull/Carefull_UX_2@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={1104}
              height={1374}
            />
          </AssetCard>
          <AssetCard columns={1} caption="">
            <Image
              src="/projects/carefull/Carefull_UX_3@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={1104}
              height={1374}
            />
          </AssetCard>
          <AssetCard columns={2} caption="">
            <Image
              src="/projects/carefull/Carefull_UX_4@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={2256}
              height={1422}
            />
          </AssetCard>
          <AssetCard columns={2} caption="">
            <Image
              src="/projects/carefull/Carefull_UX_5@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={2256}
              height={1778}
            />
          </AssetCard>
        </Carousel>
      </ProjectHighlight>
      <PortfolioPresentationCard />
    </Project>
  );
}
