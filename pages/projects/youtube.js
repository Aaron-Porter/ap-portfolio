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
import TextCard from "components/molecules/TextCard.js";
import Text from "components/atoms/Text";
import Section from "components/atoms/Section";
import Content from "components/atoms/Content";
import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import PortfolioPresentationCard from "components/organisms/PortfolioPresentationCard";
import List from "components/organisms/List";

export default function Carefull() {
  return (
    <Project>
      <ProjectIntro
        client="YouTube"
        role="UX Designer"
        year="2016-2018"
        title="Elevating the experience of premium content across YouTube."
      >
        <ConfidentialBanner css={{ marginBottom: "$space400" }} />
        <Card pressable={false} align="center" justify="center">
          <Image
            src="/projects/youtube/Youtube_Premium@2x.png"
            alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
            width={2256}
            height={1188}
          />
        </Card>
      </ProjectIntro>
      <ProjectHighlight label="About The Project">
        <List>
          <List.Item
            title="The Opportunity"
            text={
              <>
                YouTube is the center of the universe for video on the internet.
                But it’s optimized for one-off, medium length content. So when
                we began investing heavily in original episodic & long-form
                programming, the need to design for this experience became
                apparent.
              </>
            }
          />
          <List.Item
            title="Their Problems"
            text={
              <>
                Our hypothesis was that premium content deserved a catered,
                premium experience. So we dove into understanding exactly what
                where the journeys around this type of content and we
                researched, designed, and prototyped our way to some new
                solutions.
              </>
            }
          />
          <List.Item
            title="Constraints"
            text={
              <>
                Working inside of a large institution with a rich legacy of UX
                patterns is challenging enough, but when you purposelly seek to
                break those patterns to solve for a new use-case, you must move
                slowly & works in sync with every stakeholder.
              </>
            }
          />
          <List.Item
            title="My Role"
            text={
              <>
                As a User Experience Designer at Google, I was an Interaction
                Designer for all of the Premium Original Content surfaces across
                YouTube. I was responsible for identifying opportunities,
                designing solutions, and working with the broader team to bring
                them to fruition.
              </>
            }
          />
        </List>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            I guided interaction design for the evolution of our Premium
            offering
          </>
        }
      >
        <Carousel>
          <TextCard
            text={
              <>
                Worked with our research team to define critical user journeys
                for our product area. Product decisions were measured by their
                impact against these journeys — giving design & research metrics
                by which to inact change.
              </>
            }
            iconName="Chat"
          />
          <TextCard
            text={
              <>
                Lead a cross-functional sprint with stakeholders from across the
                product area. Utilizing the existing knowledge and
                organizational learnings of my peers to inform our new projects.
              </>
            }
            iconName="Chat"
          />
          <AssetCard
            columns={1}
            caption="We spent 2 weeks in Tokyo, Japan. Visiting YouTube users in their home — learning about their lifestyle, desires, & video consumption behaviors."
          >
            <Image
              src="/projects/youtube/YouTube_UI_1@2x.png"
              alt=""
              width={1104}
              height={1520}
            />
          </AssetCard>
          <AssetCard
            columns={1}
            caption="We spent 2 weeks in Tokyo, Japan. Visiting YouTube users in their home — learning about their lifestyle, desires, & video consumption behaviors."
          >
            <Image
              src="/projects/youtube/YouTube_UI_2@2x.png"
              alt=""
              width={1104}
              height={1520}
            />
          </AssetCard>
          <AssetCard caption="We spent 2 weeks in Tokyo, Japan. Visiting YouTube users in their home — learning about their lifestyle, desires, & video consumption behaviors.">
            <Image
              src="/projects/youtube/YouTube_UI_3@2x.png"
              alt=""
              width={2256}
              height={1256}
            />
          </AssetCard>
          <TextCard
            text={
              <>
                Built prototypes of conceptual features & quality of life
                improvements to improve our offering and our customers
                experience as a YouTube fan.
              </>
            }
            iconName="Chat"
          />
          <TextCard
            text={
              <>
                Worked with our research team to conduct an ethnographic
                research trip in Japan to uncover patterns specific to the
                market and test our prototypes with users.
              </>
            }
            iconName="Chat"
          />
          <AssetCard caption="We spent 2 weeks in Tokyo, Japan. Visiting YouTube users in their home — learning about their lifestyle, desires, & video consumption behaviors.">
            <Image
              src="/projects/youtube/Youtube_Japan_1.jpg"
              alt=""
              width={2000}
              height={1333}
            />
          </AssetCard>
        </Carousel>
      </ProjectHighlight>
      <ProjectHighlight
        heading={<>Helped to encourage success across the company.</>}
      >
        <Carousel>
          <TextCard
            text={
              <>
                I identified a gap in our asset creation workflow that created
                friction & excessive manual labor. So I built an internal tool
                to automate portions of the process. Giving autonomy to our
                counterparts.
              </>
            }
          />
          <TextCard
            text={
              <>
                I worked with our growth team to reduce churn by implementing a
                post-cancelation recovery flow. The insights gathered went on to
                motivate retargeting and re-engagement initiatives{" "}
              </>
            }
          />
          <TextCard
            text={
              <>
                Helped to organize an internal conference that was attended by
                individuals from across Google products, offices, & countries.
              </>
            }
          />
        </Carousel>
      </ProjectHighlight>

      <PortfolioPresentationCard />
    </Project>
  );
}
