import Button from "components/atoms/Button";
const CopyToClipboardButton = ({ value, children }) => {
  const copy = () => {
    navigator.clipboard.writeText(value);
  };
  return (
    <Button onClick={copy} iconName="Copy">
      {children}
    </Button>
  );
};

export default CopyToClipboardButton;
