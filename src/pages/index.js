import * as React from "react";
import Layout from "../components/layout/Layout";
import HoldingPage from "../components/HoldingPage";

const IndexPage = () => {
  return (
    <Layout>
      <main class="w-full">
        <HoldingPage />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
