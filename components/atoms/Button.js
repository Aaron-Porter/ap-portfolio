import { styled } from "stitches.config";
import Text from "components/atoms/Text";
import Icon from "components/atoms/Icon";
import LinkTo from "components/utilities/LinkTo";
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

  variants: {
    variant: {
      ghost: {
        backgroundColor: "transparent",
        "&:hover": {
          $$primaryColor: "$colors$gray700",
          backgroundColor: "$$primaryColor",
        },
      },
    },
  },
});

const Button = (props) => {
  const { children, iconName, href = false, ...rest } = props;
  const ButtonElement = () => (
    <_Button {...rest}>
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
  if (href) {
    return (
      <LinkTo href={href}>
        <ButtonElement />
      </LinkTo>
    );
  } else {
    return <ButtonElement />;
  }
};

export default Button;
