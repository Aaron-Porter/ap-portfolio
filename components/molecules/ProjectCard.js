import Image from "next/image";
import Card from "components/atoms/Card";
import Icon from "components/atoms/Icon";
import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import LinkTo from "components/utilities/LinkTo";
import Flex from "components/atoms/Flex";

const ContentIcon = () => (
  <Card.Content css={{ position: "absolute", top: 0, right: 0, zIndex: 100 }}>
    <Box>
      <Box
        css={{
          padding: "$space200",
          backgroundColor: "$gray800",
          borderRadius: "100%",
          color: "$gray000",
        }}
        variants={{
          default: { opacity: 0, scale: 0.2 },
          hover: { opacity: 1, scale: 1 },
        }}
      >
        <Icon
          name="ArrowRightUp"
          css={{ width: "24px", height: "24px" }}
        ></Icon>
      </Box>
    </Box>
  </Card.Content>
);

const ProjectCard = ({
  image,
  imageAlt,
  title,
  description,
  dates,
  role,
  link,
  layoutId,
  fullWidthImage = true,
  css,
  openLinkInNewTab = true,
}) => (
  <Card
    direction="column"
    layoutId={layoutId}
    css={{ minHeight: "240px", ...css }}
    pressable
  >
    <LinkTo href={link} displayContents newTab={openLinkInNewTab}>
      <ContentIcon />
      {fullWidthImage && (
        <Box css={{ height: "200px", width: "100%", position: "relative" }}>
          <Image
            src={image}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
           
          />
        </Box>
      )}
      <Card.Content>
        <Flex direction="column" justify="between">
          {!fullWidthImage && <Box>{image}</Box>}
          <Box css={{ flexGrow: 0 }}>
            <Box>
              <Text preset="heading">{title}</Text>
            </Box>
            {description && (
              <Text
                preset="body"
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
              <Text
                preset="overline"
                css={{ color: "$gray300", paddingBottom: 0 }}
              >
                {dates} {role && `· ${role}`}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Card.Content>
    </LinkTo>
  </Card>
);

export default ProjectCard;
