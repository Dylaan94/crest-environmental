import * as React from "react";
import Layout from "../components/layout/Layout";
import HoldingPage from "../components/HoldingPage";

const IndexPage = () => {
  return (
    <Layout>
      <main className="w-full">
        <HoldingPage />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Crest Environmental: Site under maintenance</title>
    <a href="https://www.vecteezy.com/free-vector/website-maintenance">
      Website Maintenance Vectors by Vecteezy
    </a>
  </>
);
