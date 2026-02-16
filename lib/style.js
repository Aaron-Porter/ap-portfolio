const TOKEN_MAP = {
  gray000: "var(--gray000)",
  gray100: "var(--gray100)",
  gray200: "var(--gray200)",
  gray300: "var(--gray300)",
  gray400: "var(--gray400)",
  gray500: "var(--gray500)",
  gray600: "var(--gray600)",
  gray700: "var(--gray700)",
  gray800: "var(--gray800)",
  gray900: "var(--gray900)",
  gray1000: "var(--gray1000)",
  accent: "var(--accent)",
  space000: "var(--space000)",
  space100: "var(--space100)",
  space200: "var(--space200)",
  space300: "var(--space300)",
  space400: "var(--space400)",
  space500: "var(--space500)",
  space600: "var(--space600)",
  space700: "var(--space700)",
  space800: "var(--space800)",
  space900: "var(--space900)",
};

const replaceTokens = (value) => {
  if (typeof value !== "string") {
    return value;
  }

  return value
    .replace(/\$colors\$([a-zA-Z0-9]+)/g, (_, token) => TOKEN_MAP[token] ?? `$${token}`)
    .replace(/\$space\$([a-zA-Z0-9]+)/g, (_, token) => TOKEN_MAP[token] ?? `$${token}`)
    .replace(/\$([a-zA-Z0-9]+)/g, (_, token) => TOKEN_MAP[token] ?? `$${token}`);
};

export const stitchesToStyle = (css = {}) => {
  if (!css) {
    return undefined;
  }

  return Object.entries(css).reduce((style, [key, value]) => {
    if (key.startsWith("@") || key.startsWith("&")) {
      return style;
    }

    style[key] = replaceTokens(value);
    return style;
  }, {});
};
