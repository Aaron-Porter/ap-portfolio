import Image from "next/image";
import Card from "components/atoms/Card";
import Icon from "components/atoms/Icon";
import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import LinkTo from "components/utilities/LinkTo";

const ProjectCard = ({
  image,
  title,
  description,
  dates,
  role,
  link,
  layoutId,
}) => (
  <Card direction="column" layoutId={layoutId}>
    <Box
      css={{
        padding: "$space200",
        backgroundColor: "$gray800",
        position: "absolute",
        top: "40px",
        right: "40px",
        borderRadius: "100%",
        color: "$gray000",
      }}
    >
      <Icon name="ArrowRightUp" css={{ width: "24px", height: "24px" }}></Icon>
    </Box>
    <LinkTo href={link}>
      {image}
      <Card.Content>
        <Text preset="largeHeading">{title}</Text>
        <Text preset="subHeading" css={{ maxWidth: "28ch", color: "$gray300" }}>
          {description}
        </Text>
        <Text
          preset="overline"
          css={{ color: "$gray400", paddingTop: "$space500" }}
        >
          {dates} · {role}
        </Text>
      </Card.Content>
    </LinkTo>
  </Card>
);

export default ProjectCard;
