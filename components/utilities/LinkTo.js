import Link from "next/link";
import React from "react";

const LinkTo = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  displayContents = false,
  newTab = false,
  style,
  ...anchorProps
}) => (
  <Link
    href={href}
    as={as}
    replace={replace}
    scroll={scroll ?? false}
    shallow={shallow}
    prefetch={prefetch}
    locale={locale}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noreferrer" : undefined}
    style={{
      color: "inherit",
      textDecoration: "none",
      display: displayContents ? "contents" : "block",
      cursor: "pointer",
      ...style,
    }}
    {...anchorProps}
  >
    {children}
  </Link>
);

export default LinkTo;
