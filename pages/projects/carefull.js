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
import TextCard from "components/molecules/ListCard";
import Section from "components/atoms/Section";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import PortfolioPresentationCard from "components/organisms/PortfolioPresentationCard";
import List from "../../components/organisms/List";

export default function Carefull() {
  return (
    <Project>
      <ProjectIntro
        client="Carefull"
        role="Design Lead"
        year="2020-Present"
        title="Empowering financial caregivers with simplicity, safety, and transparency."
      >
        <ConfidentialBanner css={{ marginBottom: "$space400" }} />
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
        <List>
          <List.Item
            title="Our Customers"
            text={
              <>
                An estimated 45 million Americans are financial caregivers —
                adult children responsible for the financial well-being of their
                aging parents. They pay bills, haggle with utilities, plan for
                their future, and pay for things they need — all while managing
                their own financial and family life.
              </>
            }
          />
          <List.Item
            title="Their Problems"
            text={
              <>
                Confusing forms, unsustainable spending behavior, inscrutable
                legal processes, fraud, abuse — caregivers face a broad set of
                issues, only compounded by the emotional complexity of a
                shifting power dynamic in a parental relationship.
              </>
            }
          />
          <List.Item
            title="Constraints"
            text={
              <>
                I joined Carefull at the very beginning of it’s life (employee
                2). Velocity was the life-blood of the business, we needed
                high-conviction design answers every single day. Our mantra was
                to understand quickly, ship needed functionality, and iterate
                relentlessly.
              </>
            }
          />
          <List.Item
            title="My Role"
            text={
              <>
                As the lead designer (and only designer), my responsibilities
                were broad and intertwined in every portion of our operations. I
                served as researcher, brand designer, UX designer, UI designer,
                & front-end developer.
              </>
            }
          />
        </List>
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
            <TextCard
              text="I conducted 1:1 qualitiative research sessions with financial
            caregivers & eventually users."
              iconName="Chat"
            />
            <TextCard
              text="I aided our head of growth in the formulation of quantitative studies to better understand our market and larger customer trends."
              iconName="PieChart"
            />
            <TextCard
              text="I built foundational artifacts that document the experiences, responsibilities, and needs of our customers."
              iconName="Notebook"
            />
            <TextCard
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
          <AssetCard
            columns={1}
            caption="Our wordmark needed to feel mature & institutional, like a bank, while feeling approachable and warm."
          >
            <Image
              src="/projects/carefull/Carefull_Logo@2x.png"
              alt="Picture of a mother and son embracing eachother.A purple ring surrounds them showing protection."
              width={1104}
              height={1104}
            />
          </AssetCard>

          <AssetCard
            columns={1}
            caption="We constructed a symbol that represents units of a family coming together to a create larger whole."
          >
            <Image
              src="/projects/carefull/Carefull_Icon@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={1104}
              height={1104}
            />
          </AssetCard>
          <AssetCard
            columns={2}
            caption="Created a visual motif that bring together ideas of family, generations, and the things that connect them. Utilizing a mixture of modern & archival photos, we built a look that evokes the feeling of sorting through the family photo album."
          >
            <Image
              src="/projects/carefull/Carefull_Collage@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={2256}
              height={1306}
            />
          </AssetCard>
          <AssetCard
            columns={1}
            caption="Built supporting material to flesh out our off-screen presence."
          >
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
          <TextCard
            text="Uncovered user journeys, mapped flows, built wireframes, and constructed prototypes to shape our product."
            iconName="TreeStructure"
          />
          <TextCard
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
