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
            placeholder="blur"
            src="/projects/carefull/carefull_image_1@2x.png"
            alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
            width={552}
            height={552}
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
                shifting power dynamic in their parental relationship.
              </>
            }
          />
          <List.Item
            title="Constraints"
            text={
              <>
                I joined Carefull at the very beginning of its life (employee
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
        <Carousel>
          <TextCard
            text="I used research to build a deep understanding of our customers & inform product decisions.
            Conducted 1:1 qualitative research sessions with financial caregivers to create a ground truth by which to guide product decisions."
            iconName="Chat"
          />
          <TextCard
            text="Aided our head of growth in the formulation of quantitative studies to better understand our market and larger customer trends."
            iconName="PieChart"
          />
          <TextCard
            text="Built foundational artifacts to give our team insight into the experiences, responsibilities, and needs of our customers."
            iconName="Notebook"
          />
          <TextCard
            text="Ran workshops with our founding team to shape our company & product thinking."
            iconName="StickyNote"
          />
          <TextCard
            text="Conducted synchronous & asynchronous usability tests on our interface touchpoints."
            iconName="CircleWavyCheck"
          />
          <TextCard
            text="Met with users to understand how our product fit into their life & guide iterations of our offering."
            iconName="Smiley"
          />
        </Carousel>
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
            caption="Our wordmark needed to feel mature & institutional, like a bank, while retaining a sense of approachability and warmth."
          >
            <Image
              src="/projects/carefull/Carefull_Logo@2x.png"
              alt="Carefull"
              width={1104}
              height={1104}
              placeholder="blur"
            />
          </AssetCard>

          <AssetCard
            columns={1}
            caption="Our symbol conveys the idea of independent parts of a family coming together to create a larger whole."
          >
            <Image
              src="/projects/carefull/Carefull_Icon@2x.png"
              alt="An icon that contains 8 dots arranged in a circle on a purple background."
              width={1104}
              height={1104}
              placeholder="blur"
            />
          </AssetCard>
          <AssetCard
            columns={2}
            caption={
              <>
                Inspired by the feeling of sorting through the family photo
                album, we utilized a mixture of modern & archival photos to
                create a visual motif that evokes ideas of family, generations,
                and the things that connect them.
              </>
            }
          >
            <Image
              src="/projects/carefull/Carefull_Collage@2x.png"
              alt="An image of a modern mother with a baby and a retro family portrait. Connected with a line to show a family bond.  "
              width={2256}
              height={1306}
              placeholder="blur"
            />
          </AssetCard>
          <AssetCard
            columns={1}
            caption="Built supporting material to extend our barnd off the screen."
          >
            <Image
              src="/projects/carefull/Carefull_Print_1@2x.png"
              alt="A stack of print material"
              width={1104}
              height={1104}
            />
          </AssetCard>
          <AssetCard
            columns={1}
            caption="Helped guide the creation of educational content."
          >
            <Image
              src="/projects/carefull/Carefull_Print_2@2x.png"
              alt="A book with the title 'The Financial Caregiving Roadmap'"
              width={1104}
              height={1104}
            />
          </AssetCard>
          <AssetCard caption="I designed & built a website to highlight our product & convey our brand values to potential customers.">
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              playsInline="playsinline"
              controls={false}
              style={{ width: "100%", pointerEvents: "none" }}
            >
              <source
                src="/projects/carefull/Carefull_Website_Home.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
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
          <AssetCard
            columns={2}
            caption="Designed & contributed to the development of an app experience that gives children increased insight into the financial life of their parent."
          >
            <Image
              src="/projects/carefull/Carefull_UX_1@2x.png"
              alt="Multiple images of an app experience"
              width={2256}
              height={1422}
            />
          </AssetCard>
          <AssetCard
            columns={1}
            caption="Users receive timely alerts so that they can worry less and insure things are going smoothly."
          >
            <Image
              src="/projects/carefull/Carefull_UX_2@2x.png"
              alt="An iphone lockscreen with an alert that says 'Mom's bill State Famr for $89.87 is due tomorrow. You pay via autopay.'"
              width={1104}
              height={1374}
            />
          </AssetCard>
          <AssetCard
            columns={1}
            caption="The app provides a set of intelligent alerts that look for patterns in their financial behavior and calls out when there may be an issue."
          >
            <Image
              src="/projects/carefull/Carefull_UX_3@2x.png"
              alt="An alert that says 'Duplicate Transactions' with two similar transactions from Walgreens"
              width={1104}
              height={1374}
            />
          </AssetCard>
          <AssetCard
            columns={2}
            caption="Designed email template to keep our messaging with users on brand and effective."
          >
            <Image
              src="/projects/carefull/Carefull_UX_4@2x.png"
              alt="Three emails that display various pieces of information relevant to signing up for an app."
              width={2256}
              height={1422}
            />
          </AssetCard>
          <AssetCard
            columns={2}
            caption="Built and managed our design component system to insure consistency and easy iteration."
          >
            <Image
              src="/projects/carefull/Carefull_UX_5@2x.png"
              alt="A bunch of interface elements that would appear in an app"
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
