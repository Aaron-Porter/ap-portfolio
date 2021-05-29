import Card from "components/atoms/Card";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import Box from "components/atoms/Box";
import Icon from "components/atoms/Icon";
import React from "react";

const ListCard = ({ text, iconName = "ArrowRightUp" }) => (
  <Card direction="column" pressable={false}>
    <Card.Content justify="between">
      <Flex direction="column" align="start" css={{ flexGrow: 0 }}>
        <Box
          css={{
            padding: "$space200",
            backgroundColor: "$gray800",
            borderRadius: "100%",
            color: "$gray000",
            marginBottom: "$space300",
          }}
        >
          <Icon name={iconName} css={{ width: "24px", height: "24px" }}></Icon>
        </Box>
        <Text
          preset="subHeading"
          css={{
            maxWidth: "35ch",
            color: "$gray000",
          }}
        >
          {text}
        </Text>
      </Flex>
    </Card.Content>
  </Card>
);

export default ListCard;
