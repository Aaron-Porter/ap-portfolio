import { NextSeo } from "next-seo";

const Page = ({ title, description, children }) => (
  <>
    <NextSeo title={title} description={description} />
    {children}
  </>
);

export default Page;
