import Card from "components/atoms/Card";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import Box from "components/atoms/Box";
import Icon from "components/atoms/Icon";
import React from "react";

const TextCard = ({ text, iconName = "ArrowRightUp" }) => (
  <Card pressable={false}>
    <Card.Content justify="start" direction="column" align="start">
      <Box
        css={{
          padding: "$space200",
          backgroundColor: "$gray800",
          borderRadius: "100%",
          color: "$gray000",
          marginBottom: "$space400",
        }}
      >
        <Icon name={iconName} css={{ width: "24px", height: "24px" }}></Icon>
      </Box>
      <Text
        preset="subHeading"
        css={{
          maxWidth: "35ch",
          color: "$gray000",
          paddingBottom: 0,
        }}
      >
        {text}
      </Text>
    </Card.Content>
  </Card>
);

export default TextCard;
