import Image from "next/image";
import Carousel from "components/molecules/Carousel";
import Page from "components/templates/Page";
import AssetCard from "components/molecules/AssetCard";
import ProjectHighlight from "components/organisms/ProjectHighlight";
import ProjectIntro from "components/organisms/ProjectIntro";
import Card from "components/atoms/Card";
import ConfidentialBanner from "components/molecules/ConfidentialBanner";
import React from "react";
import TextCard from "components/molecules/TextCard";
import PortfolioPresentationCard from "components/organisms/PortfolioPresentationCard";
import List from "../../components/organisms/List";

import image1 from "../../public/projects/carefull/carefull_image_1@2x.png";
import image2 from "../../public/projects/carefull/Carefull_Logo@2x.png";
import image3 from "../../public/projects/carefull/Carefull_Icon@2x.png";
import image4 from "../../public/projects/carefull/Carefull_Collage@2x.png";
import image5 from "../../public/projects/carefull/Carefull_Print_1@2x.png";
import image6 from "../../public/projects/carefull/Carefull_Print_2@2x.png";
import image7 from "../../public/projects/carefull/Carefull_UX_1@2x.png";
import image8 from "../../public/projects/carefull/Carefull_UX_2@2x.png";
import image9 from "../../public/projects/carefull/Carefull_UX_3@2x.png";
import image10 from "../../public/projects/carefull/Carefull_UX_4@2x.png";
import image11 from "../../public/projects/carefull/Carefull_UX_5@2x.png";

export default function Carefull() {
  return (
    <Page>
      <ProjectIntro
        client="Carefull"
        role="Design Lead"
        year="2020-Present"
        title="Empowering financial caregivers with simplicity, safety, and transparency."
      >
        <ConfidentialBanner css={{ marginBottom: "$space400" }} />
        <Card pressable={false} align="center" justify="center">
          <Image
            src={image1}
            alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
            placeholder="blur"
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
                high-conviction design artifacts produced every single day. Our
                mantra was to understand quickly, ship needed functionality, and
                iterate relentlessly.
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
            text="Conducted 1:1 qualitative research sessions with financial caregivers to create a ground truth by which to guide product decisions."
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
            text="Conducted synchronous & asynchronous usability tests on our interface touchpoints."
            iconName="CircleWavyCheck"
          />
          <TextCard
            text="Met with users to understand how our product fit into their life & guide iterations of our offering."
            iconName="Smiley"
          />
          <TextCard
            text="Ran workshops with our founding team to shape our company & product thinking."
            iconName="StickyNote"
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
            image={image2}
            imageAlt="Carefull"
          />

          <AssetCard
            columns={1}
            caption="Our symbol conveys the idea of independent parts of a family coming together to create a larger whole."
            image={image3}
            imageAlt="An icon that contains 8 dots arranged in a circle on a purple background."
          />
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
            image={image4}
            imageAlt="An image of a modern mother with a baby and a retro family portrait. Connected with a line to show a family bond.  "
          />
          <AssetCard
            columns={1}
            caption="Built supporting material to extend our brand off the screen."
            image={image5}
            imageAlt="A stack of print material"
          />
          <AssetCard
            columns={1}
            caption="Helped guide the creation of educational content."
            image={image6}
            imageAlt="A book with the title 'The Financial Caregiving Roadmap'"
          />
          <AssetCard caption="Designed & built all aspects of our website. I assembled templates & styles in Webflow to enable our marketing team to independently test & evolve our communication efforts over time.">
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
            caption="Designed every screen & state of the Carefull App. An experience that gives children increased insight into the financial life of their parent."
            imageAlt="Multiple images of an app experience"
            image={image7}
          />
          <AssetCard
            columns={1}
            caption="Users receive timely alerts so that they can worry less and insure things are going smoothly."
            imageAlt="An iphone lockscreen with an alert that says 'Mom's bill State Famr for $89.87 is due tomorrow. You pay via autopay.'"
            image={image8}
          />
          <AssetCard
            columns={1}
            caption="The app provides a set of intelligent alerts that look for patterns in their financial behavior and calls out when there may be an issue."
            imageAlt="An alert that says 'Duplicate Transactions' with two similar transactions from Walgreens"
            image={image9}
          />
          <AssetCard
            columns={2}
            caption="Designed email template to keep our messaging with users on brand and effective."
            imageAlt="Three emails that display various pieces of information relevant to signing up for an app."
            image={image10}
          />
          <AssetCard
            columns={2}
            caption="Built and managed our design component system to insure consistency and easy iteration. Worked closely with engineers & contributed directly to our React Native codebase."
            imageAlt="A bunch of interface elements that would appear in an app"
            image={image11}
          />
        </Carousel>
      </ProjectHighlight>
      <PortfolioPresentationCard />
    </Page>
  );
}
