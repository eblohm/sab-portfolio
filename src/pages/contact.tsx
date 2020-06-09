import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const contact = () => {
  return (
    <Layout location={window.location} title='Contact Me'>
      <SEO title='Contact Me' />
      <h1>Hi I'm Sarah</h1>
    </Layout>
  );
};

export default contact;
