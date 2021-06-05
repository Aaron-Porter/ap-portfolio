import Grid from "components/atoms/Grid.js";
import React from "react";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";
import Box from "components/atoms/Box";

const List = ({ children }) => (
  <Content>
    <Grid columns={2}>{children}</Grid>
  </Content>
);

List.Item = ({ title, text }) => (
  <Box>
    <Text preset="subHeading">{title}</Text>
    <Text css={{ color: "$gray300" }}>{text}</Text>
  </Box>
);

export default List;
