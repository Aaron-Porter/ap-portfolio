import Image from "next/image";
import Page from "components/templates/Page";
import Carousel from "components/molecules/Carousel";
import AssetCard from "components/molecules/AssetCard";
import ProjectHighlight from "components/organisms/ProjectHighlight";
import ProjectIntro from "components/organisms/ProjectIntro";
import Card from "components/atoms/Card";
import ConfidentialBanner from "components/molecules/ConfidentialBanner";
import React from "react";
import TextCard from "components/molecules/TextCard";
import PortfolioPresentationCard from "components/organisms/PortfolioPresentationCard";
import List from "components/organisms/List";

const image1 = "/projects/youtube/Youtube_Premium@2x.png";
const image2 = "/projects/youtube/Youtube_Japan_1.jpg";
const image3 = "/projects/youtube/Youtube_UI_1@2x.png";
const image4 = "/projects/youtube/Youtube_UI_2@2x.png";
const image5 = "/projects/youtube/Youtube_UI_3@2x.png";

export default function Carefull() {
  return (
    <Page
      title="YouTube"
      description="Elevating the experience of premium content across YouTube."
    >
      <ProjectIntro
        client="YouTube"
        role="UX Designer"
        year="2016-2018"
        title="Elevating the experience of premium content across YouTube."
      >
        <ConfidentialBanner css={{ marginBottom: "$space400" }} />
        <Card pressable={false} align="center" justify="center">
          <Image
            src={image1}
            alt="YouTube Premium logo"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Card>
      </ProjectIntro>
      <ProjectHighlight label="About The Project">
        <List>
          <List.Item
            title="The Problem"
            text={
              <>
                YouTube is the center of the universe for video on the internet.
                But from the beginning, its been optimized for one-off medium
                length content. So when we began investing heavily in original
                episodic & long-form programming, we needed to intentionally
                design for the experience of consuming that type of content.
              </>
            }
          />
          <List.Item
            title="The Opportunity"
            text={
              <>
                Our hypothesis was that premium content deserved to be
                encompanied by a premium experience. And by creating a distinct
                experience for our subscribers, we could make our offering more
                desirable & useful.
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
                slowly & ensure you works in-sync with every stakeholder.
              </>
            }
          />
          <List.Item
            title="My Role"
            text={
              <>
                As a User Experience Designer at Google, I led interaction
                design for all of the Premium Original Content surfaces across
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
                for our product area. Product decisions were then measured by
                their impact against these journeys — giving design & research
                metrics by which to enact change.
              </>
            }
            iconName="TreeStructure"
          />
          <TextCard
            text={
              <>
                Worked with our research team to conduct an ethnographic
                research trip in Japan to uncover patterns specific to the
                market and test prototypes with users.
              </>
            }
            iconName="Chat"
          />
          <AssetCard
            caption="We spent 2 weeks in Tokyo, Japan. Visiting YouTube users in their home — learning about their lifestyle, desires, & video consumption behaviors."
            imageAlt="A crosswalk in Shibuya Japan"
            image={image2}
          />
          <TextCard
            text={
              <>
                Built prototypes of conceptual features & quality of life
                improvements for our Premium Subscribers. Aiming to improve the
                experience as a die-hard YouTube fan.
              </>
            }
            iconName="Chat"
          />
          <TextCard
            text={
              <>
                Lead a cross-functional sprint with stakeholders from across the
                product area. Utilizing the existing knowledge and
                organizational learnings of my peers to inform our projects.
              </>
            }
            iconName="StickyNote"
          />
          <AssetCard
            columns={1}
            caption="Contributed to the evolution of our Premium Content surfaces. Creating visual patterns that were distinct from traditional YouTube content."
            imageAlt="A phone with the YouTube app open browsing movies & shows"
            image={image3}
          />
          <AssetCard
            columns={1}
            caption="Lead interaction design on a new detail page for Premium show & movies. Creating patterns that allowed a user to resume from where they left off, track their progress on episodic content, and view related content like trailers & extras."
            imageAlt="A detail page inside the YouTube app for the show 'Furze World Wonders'"
            image={image4}
          />
          <AssetCard
            caption="Design by the YouTube Gaming Team. The patterns we helped to establish for our detail pages were adopted & evolved by other team across the organization"
            imageAlt="The YouTube website on a page dedicated to the game Fortnite"
            image={image5}
          />
        </Carousel>
      </ProjectHighlight>
      <ProjectHighlight heading={<>Made an impact across the company.</>}>
        <Carousel>
          <TextCard
            text={
              <>
                Identified a gap in our asset creation workflow that created
                friction & excessive manual labor. So I built an internal tool
                to automate portions of the process. Giving autonomy to our
                counterparts.
              </>
            }
            iconName="Code"
          />
          <TextCard
            text={
              <>
                Worked with our growth team to reduce churn by implementing a
                post-cancellation recovery flow. The insights gathered went on
                to motivate retargeting and re-engagement initiatives
              </>
            }
            iconName="PieChart"
          />
          <TextCard
            text={
              <>
                Helped to organize an internal conference that was attended by
                individuals from across Google products, offices, & countries.
              </>
            }
            iconName="Chat"
          />
        </Carousel>
      </ProjectHighlight>

      <PortfolioPresentationCard />
    </Page>
  );
}
