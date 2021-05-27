import { styled } from "stitches.config";
import Text from "components/atoms/Text";
import Icon from "components/atoms/Icon";

const _Button = styled("button", {
  // Reset
  appearance: "none",
  boxSizing: "border-box",
  display: "inline-flex",
  justifyContent: "center",
  lineHeight: "1",
  margin: "0",
  outline: "none",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  border: "none",
  verticalAlign: "middle",

  // Local Tokens
  $$primaryColor: "$colors$gray800",
  $$contrastColor: "$colors$gray000",

  // Base Styles
  borderRadius: "99999px",
  backgroundColor: "$$primaryColor",
  color: "$$contrastColor",
  padding: "12px 16px",
  fontSize: "16px",
  transition: "$default",
  cursor: "pointer",

  "&:hover": {
    $$primaryColor: "$colors$gray700",
  },
});

const Button = ({ children, iconName }) => (
  <_Button>
    {iconName && (
      <Icon
        name={iconName}
        css={{
          width: "24px",
          marginRight: "$space100",
        }}
      />
    )}
    <Text preset="body" css={{ paddingRight: iconName && "$space100" }}>
      {children}
    </Text>
  </_Button>
);

export default Button;
