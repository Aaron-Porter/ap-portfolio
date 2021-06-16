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

import image1 from "../../public/projects/wayfair/Wayfair_Image_1@2x.png";
import image2 from "../../public/projects/wayfair/Wayfair_Image_2@2x.png";

export default function Carefull() {
  return (
    <Project>
      <ProjectIntro
        client="Wayfair"
        role="UX Design Lead"
        year="2018-2019"
        title="Building the future of how Wayfair Partners process millions of orders per week."
      >
        <ConfidentialBanner css={{ marginBottom: "$space400" }} />
        <Card pressable={false} align="center" justify="center">
          <Image
            src={image1}
            alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
            placeholder="blur"
          />
        </Card>
      </ProjectIntro>
      <ProjectHighlight label="About The Project">
        <List>
          <List.Item
            title="The Brief"
            text={
              <>
                Wayfair partnered with TTF at the end of 2018. We were tasked
                with embedding our team inside Wayfair to help revitalize &
                redesign aspects of Partner Home, the system they provide to
                fulfillment partners. Over the years, this system had drifted
                further and further away from the real needs of users, and as
                the company scaled, the friction became measurable.
              </>
            }
          />
          <List.Item
            title="The Opportunity"
            text={
              <>
                The disconnect between user needs and the provided tools
                materialized in direct impact on the efficiency, and bottom
                line, of the business. We were tasked with a ground-up redesign
                of their order management system. But to deliver on this goal,
                we needed to develop a deep understanding of their partner's
                day-to-day processes, environments, and bottlenecks. We would
                then use those learnings to help inform a system designed to
                help partners be successful.
              </>
            }
          />
          <List.Item
            title="Constraints"
            text={
              <>
                Working on a complicated enterprise tool as an outside
                consultant isn’t for the faint of heart. No interface alone can
                solve experience problems that extend far outside the realm of
                digital interaction. A system with dependencies intertwined
                across the organization — this was an exercise of untangling
                business processes, socializing design decisions, and creating a
                shared language of understanding.
              </>
            }
          />
          <List.Item
            title="My Role"
            text={
              <>
                As UX Design Lead, my responsibilities were critical to the
                success of the project. I conducted on-site & remote research
                sessions, created alignment across many product teams via
                research reports, documented & helped evolve the internal
                processes behind the interface, and designed and led development
                of interface prototypes.
              </>
            }
          />
        </List>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            Built a deep understanding of our users through research &
            democratized access to learnings across the organization.
          </>
        }
      >
        <Carousel>
          <TextCard
            text={
              <>
                Visited dozens of partners across the US & the UK to conduct
                on-site contextual research sessions. This allowed us to create
                a comprehensive picture of their working environment, internal
                processes, and more personally understand the humans that
                interact with the system on a daily basis.
              </>
            }
            iconName="Chat"
          />
          <TextCard
            text={
              <>
                Documented, cataloged, & organized our research into a robust
                library. This allowed any stakeholder to browse the complete
                archive of our research. With full transcipts & video
                recordings, any team member could easily uncover examples of
                user feedback relevant to their product area.
              </>
            }
            iconName="FolderNotchOpen"
          />
          <AssetCard
            columns={2}
            caption="Behind the scenes of one our warehouse visits. This is my team members, Phil & Matthew, discussing a partner's process for handling fulfillment."
            image={image2}
            imageAlt="Two individuals standing with safety vests on in a warehouse."
          />
          <TextCard
            text={
              <>
                Synthesized research data into reports & presentations to make
                user insights actionable and digestible for all stakeholders.
              </>
            }
            iconName="Notebook"
          />
          <TextCard
            text={
              <>
                Helped to facilitate workshops with internal teams to encourage
                & identify opportunities for UX research practices.
              </>
            }
            iconName="StickyNote"
          />
        </Carousel>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            Designed, developed, & tested a vision for how to evolve the toolset
            for partners.
          </>
        }
      >
        <Carousel>
          <TextCard
            text={
              <>
                Audited the current toolset & worked with stakeholders across
                the organization to create an accurate map of the many
                intertwined business processes and logistical dependencies.
              </>
            }
            iconName="TreeStructure"
          />
          <TextCard
            text={
              <>
                Utilized our research finding to redesign the toolset from first
                principles, addressing sources of friction & reorganizing the
                system to align with how they truly approach their tasks.
              </>
            }
            iconName="ArrowsClockwise"
          />
          <TextCard
            text={
              <>
                Built prototypes up and down the fidelity chain, from card
                sorting, to click-throughs, to a fully functioning coded
                front-end to test the more complicated stateful flows.
              </>
            }
            iconName="Code"
          />
          <TextCard
            text={
              <>
                Took our prototypes on the road and had users test them in their
                workplace. Getting feedback on how this new toolset would fit
                into their job.
              </>
            }
            iconName="Smiley"
          />
        </Carousel>
      </ProjectHighlight>

      <PortfolioPresentationCard />
    </Project>
  );
}
