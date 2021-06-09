import Grid from "components/atoms/Grid.js";
import React from "react";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";

const List = ({ children }) => (
  <Content>
    <Grid columns={2} gapSize="large">
      {children}
    </Grid>
  </Content>
);

List.Item = ({ title, text }) => (
  <Flex direction="column">
    <Text preset="heading">{title}</Text>
    <Text css={{ color: "$gray300", maxWidth: "45ch" }}>{text}</Text>
  </Flex>
);

export default List;
