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
      top: 0,
      right: 0,
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
  <Card
    direction="column"
    layoutId={layoutId}
    css={{ minHeight: "240px", ...css }}
    pressable
  >
    <LinkTo href={link} displayContents>
      <Card.Content>
        <Flex direction="column" justify="between">
          <Arrow />
          <Box>{image}</Box>
          <Box css={{ flexGrow: 0 }}>
            <Box>
              <Text preset="largeHeading">{title}</Text>
            </Box>
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
            <Box>
              <Text preset="overline" css={{ color: "$gray400" }}>
                {dates} · {role}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Card.Content>
    </LinkTo>
  </Card>
);

export default ProjectCard;
