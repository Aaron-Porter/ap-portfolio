import Flex from "components/atoms/Flex";
import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Image from "next/image";
import Card from "components/atoms/Card";
import Landing from "components/molecules/Landing";

const ProjectIntro = ({ client, role, year, description, title, children }) => (
  <Landing>
    <Content>
      <Flex direction="column" css={{ marginBottom: "$space300" }}>
        <Text as="h2" preset="overline" css={{ color: "$gray500" }}>
          {`${client} · ${role} · ${year}`}
        </Text>
        <Text as="h1" preset="xLargeHeading" css={{ maxWidth: "28ch" }}>
          {title}
        </Text>
      </Flex>
      {children}
    </Content>
  </Landing>
);

export default ProjectIntro;
