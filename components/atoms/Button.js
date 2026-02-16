import Text from "components/atoms/Text";
import Icon from "components/atoms/Icon";
import LinkTo from "components/utilities/LinkTo";

const Button = ({ children, iconName, href = false, variant, className = "", ...rest }) => {
  const isGhost = variant === "ghost";
  const buttonClasses = `appearance-none box-border inline-flex justify-center leading-none m-0 outline-none no-underline select-none border-0 align-middle rounded-full px-4 py-3 text-base transition-all duration-300 ease-out cursor-pointer ${
    isGhost
      ? "bg-transparent text-gray-100 hover:bg-gray-700"
      : "bg-gray-800 text-gray-0 hover:bg-gray-700"
  } ${className}`;

  const ButtonElement = () => (
    <button className={buttonClasses} {...rest}>
      {iconName && <Icon name={iconName} className="w-6 mr-2" />}
      <Text preset="body" className={iconName ? "pr-2" : ""}>
        {children}
      </Text>
    </button>
  );

  if (href) {
    return (
      <LinkTo href={href}>
        <ButtonElement />
      </LinkTo>
    );
  }

  return <ButtonElement />;
};

export default Button;
