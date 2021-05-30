import Icon from "components/atoms/Icon";
import Card from "components/atoms/Card";
import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import Flex from "components/atoms/Flex";
import Button from "components/atoms/Button";

const ConfidentialBanner = () => (
  <Card
    pressable={false}
    align="center"
    justify="between"
    css={{ padding: "$space400" }}
  >
    <Flex css={{ marginRight: "$space400" }}>
      <Box
        css={{
          padding: "$space200",
          backgroundColor: "$gray800",
          borderRadius: "100%",
          color: "$gray000",
          marginRight: "$space300",
        }}
      >
        <Icon name="EyeSlash" css={{ width: "24px", height: "24px" }}></Icon>
      </Box>
      <Text css={{ color: "$gray300", maxWidth: "55ch" }}>
        Aspects of this project are confidential & can’t be displayed publicly.
        If you’d like to know more about my process, schedule a portfolio
        presentation.
      </Text>
    </Flex>
    <Button iconName="ArrowDown" href="#PortfolioPresentation">
      Schedule
    </Button>
  </Card>
);

export default ConfidentialBanner;
