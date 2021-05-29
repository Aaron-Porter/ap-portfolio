import Link from "next/link";
import React from "react";

/// A unified component for the next/link <Link> and a standard <a> anchor.
/// Will lift href and all other props from NextLinkProps up to the Link.
/// Will automatically make an <a> tag containing the children and pass it remaining props.
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
  ...anchorProps
}) => {
  return (
    // These props are lifted up to the `Link` element. All others are passed to the `<a>`
    <Link {...{ href, as, replace, scroll, shallow, prefetch, locale }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a
        style={{
          color: "inherit",
          textDecoration: "none",
          display: displayContents ? "contents" : "block",
          cursor: "pointer",
        }}
        {...anchorProps}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkTo;
