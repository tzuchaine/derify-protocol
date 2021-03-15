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
        <title>
          Derify protocol - Derivative Trading | Decentralized Exchage | the
          Next Generation derivative exchange
        </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        ></meta>
        <meta
          name="keywords"
          content="Derify,Derify protocol,derivative,derivative trading,decentralized,exchange,leverage,long,short,liquidity,position,mining,yield,farming,yield farming"
        ></meta>
        <meta
          name="description"
          content="The decentralized derivatives trading protocol for everything. Trade with leverage and guaranteed liquidity for all users and decentralized applications."
        ></meta>
      </Head>
      <LayoutHeader />
      <LayoutMain>{props.children}</LayoutMain>
      <LayoutFooter />
    </div>
  );
};
export default Layout;
