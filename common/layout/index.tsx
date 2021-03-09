import React from "react";
import styles from "./Layout.module.scss";

import LayoutHeader from "./LayoutHeader";
import LayoutMain from "./LayoutMain";
import LayoutFooter from "./LayoutFooter";
import Head from "next/head";

const Layout: React.FC = (props) => {
  return (
    <div className={styles.root}>
      <Head>
        <title>ExChange | Derify Protocol</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        ></meta>
        <meta name="description" content="derify protocol"></meta>
        <meta
          name="keywords"
          content="derify protocol, exchange, blockchain"
        ></meta>
      </Head>
      <LayoutHeader />
      <LayoutMain>{props.children}</LayoutMain>
      <LayoutFooter />
    </div>
  );
};
export default Layout;
