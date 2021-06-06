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
        client="Wayfair"
        role="UX Design Lead"
        year="2018-2019"
        title="Building the future of how Wayfair Partners process millions of orders per week."
      >
        <ConfidentialBanner css={{ marginBottom: "$space400" }} />
        <Card pressable={false} align="center" justify="center">
          <Image
            src="/projects/wayfair/Wayfair_Image_1@2x.png"
            alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
            width={2256}
            height={1188}
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
                further and further away from the real needs of partners, and as
                the company scaled, the friction became measurable.
              </>
            }
          />
          <List.Item
            title="The Opportunity"
            text={
              <>
                The disconnect between user needs and the tools materialized in
                direct impact to the efficency, and bottom line, of the
                business. Our task was to help develop a deep understanding of
                their partner's day-to-day processes, environments, and needs.
                Then use those learnings to help inform a system designed to
                help partners be successful.
              </>
            }
          />
          <List.Item
            title="Constraints"
            text={
              <>
                Working on a complicated enterpise tool as an outside consultant
                isn’t for the faint of heart. No interface can solve experience
                problems that extend far outside the realm of digital
                interaction. A system with dependencies intertwined across the
                organization — this was an excerise of untangling business
                processes, socializing design decisions, and finding compromise.
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
                research reports, untangled & evolved convoluted corporate
                processes, and designed and lead development of interface
                prototypes.
              </>
            }
          />
        </List>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            Built a deep understanding of our users through research &
            disseminate learnings across the organization.
          </>
        }
      >
        <Content>
          <Grid columns={2}>
            <TextCard
              text={
                <>
                  Visit dozens of partners across the US & the UK to conduct
                  on-site contextual research sessions. Allowing for a deep
                  understanding of their working environment & daily
                  responsibilities.
                </>
              }
              iconName="Chat"
            />
            <TextCard
              text={
                <>
                  Documented, cataloged, & organzied our research into a robust
                  research library. This allowed any stakeholder to browse the
                  complete archive and find examples of user feedback relevant
                  to their product area.
                </>
              }
              iconName="Chat"
            />
            <AssetCard
              columns={2}
              caption="We spent 2 weeks in Tokyo, Japan. Visiting wayfair users in their home — learning about their lifestyle, desires, & video consumption behaviors."
            >
              <Image
                src="/projects/wayfair/Wayfair_Image_2@2x.png"
                alt=""
                width={2256}
                height={1188}
              />
            </AssetCard>
            <TextCard
              text={
                <>
                  Synthesized research data into reports & presentations to make
                  user insights actionable and digestable for all stakeholders.
                </>
              }
              iconName="Chat"
            />
            <TextCard
              text={
                <>
                  Helped to facilitate workshops with internal teams to
                  encourage UX research practices.
                </>
              }
              iconName="Chat"
            />
          </Grid>
        </Content>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            Designed, developed, & tested a vision for how to evolve the toolset
            for partners.
          </>
        }
      >
        <Content>
          <Grid columns={2}>
            <TextCard
              text={
                <>
                  Audited the toolset & worked with stakeholders across the
                  organization to create an accurate map of the various business
                  processes and logistical dependencies.
                </>
              }
            />
            <TextCard
              text={
                <>
                  Utilized our research finding to redesign functionality by
                  functionality, addressing problems from users & reorganzing
                  against how they truly approach tehir tasks.
                </>
              }
            />
            <TextCard
              text={
                <>
                  Built prototypes up and down the fidelity chain, from card
                  sorting, to click-throughs, to a fully functioning coded
                  front-end to test the more complicated stateful flows.
                </>
              }
            />
            <TextCard
              text={
                <>
                  Took our prototypes on the road and had users test them in
                  their workplace. Getting feedback on how this new toolset
                  would fit into their job.
                </>
              }
            />
          </Grid>
        </Content>
      </ProjectHighlight>

      <PortfolioPresentationCard />
    </Project>
  );
}
