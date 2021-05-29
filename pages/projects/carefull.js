import Image from "next/image";
import ProjectCard from "components/molecules/ProjectCard";
import Page from "components/templates/Page";
import { styled } from "stitches.config";
import Carousel from "components/molecules/Carousel";
import List from "components/molecules/List";
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

export default function Carefull() {
  return (
    <Project>
      <ProjectIntro
        client="Carefull"
        role="Lead Designer"
        year="2020-Present"
        title="Evolved a product & brand from inception to product-market fit."
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
        <ConfidentialBanner />
      </ProjectIntro>
      <ProjectHighlight
        heading={
          <>
            I used research to build a deep understanding of our customers &
            inform product decisions.
          </>
        }
      >
        <List columns={2}>
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
        </List>
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
          <AssetCard caption="Crafted a symbol that feels mature & institutional whileconnecting to larger motifs.">
            <Image
              src="/projects/carefull/carefull_image_1@2x.png"
              alt="Picture of a mother and son embracing eachother.A purple ring surrounds them showing protection."
              width={552}
              height={549}
            />
          </AssetCard>

          <AssetCard
            columns={1}
            caption="Crafted a symbol that feels mature & institutional while connecting to larger motifs."
          >
            <Image
              src="/projects/carefull/carefull_image_1@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={552}
              height={549}
            />
          </AssetCard>

          <AssetCard
            columns={1}
            caption={
              <>
                Created a visual motif that bring together ideas of family,
                generations, and the things that connect them. Utilizing a
                mixture of modern & archival photos, we built a look that evokes
                ideas of the family photo album.
              </>
            }
          >
            <Image
              src="/projects/carefull/carefull_image_1@2x.png"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={552}
              height={549}
            />
          </AssetCard>
        </Carousel>
      </ProjectHighlight>
    </Project>
  );
}
