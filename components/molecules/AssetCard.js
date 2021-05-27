import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import Card from "components/atoms/Card";

const AssetCard = ({ columns = 2, children, caption }) => (
  <Box css={{ gridColumn: `span ${columns}` }}>
    <Card pressable={false}>{children}</Card>
    {caption && (
      <Text
        preset="body"
        css={{ padding: "$space300 0", maxWidth: "35ch", color: "$gray400" }}
      >
        {caption}
      </Text>
    )}
  </Box>
);

export default AssetCard;
