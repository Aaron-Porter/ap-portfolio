import Button from "components/atoms/Button";
const CopyToClipboardButton = (props) => {
  const { value, children } = props;
  const copy = () => {
    navigator.clipboard.writeText(value);
  };
  return (
    <Button onClick={copy} iconName="Copy" {...props}>
      {children}
    </Button>
  );
};

export default CopyToClipboardButton;
