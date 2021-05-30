import Image from "next/image";
import Card from "components/atoms/Card";
import Icon from "components/atoms/Icon";
import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import LinkTo from "components/utilities/LinkTo";
import Flex from "components/atoms/Flex";

const Arrow = () => (
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
);

const ProjectCard = ({
  image,
  title,
  description,
  dates,
  role,
  link,
  layoutId,
  fullWidthImage = false,
  css,
}) => (
  <Card direction="column" layoutId={layoutId} css={css} pressable>
    <Arrow />
    <LinkTo href={link} displayContents>
      {fullWidthImage && <Box>{image}</Box>}
      <Card.Content justify="between">
        {!fullWidthImage && <Box>{image}</Box>}
        <Flex direction="column" css={{ flexGrow: 0 }}>
          <Text preset="largeHeading">{title}</Text>
          {description && (
            <Text
              preset="subHeading"
              css={{
                maxWidth: "28ch",
                color: "$gray300",
                paddingBottom: "$space400",
              }}
            >
              {description}
            </Text>
          )}
          <Text
            preset="overline"
            css={{ color: "$gray400", paddingTop: "$space100" }}
          >
            {dates} · {role}
          </Text>
        </Flex>
      </Card.Content>
    </LinkTo>
  </Card>
);

export default ProjectCard;
