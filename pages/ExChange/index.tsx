import React from "react";
import Head from "next/head";

import Banner from "./Banner";
import Summary from "./Summary";
import Mechanism from "./Mechanism";
import Community from "./Community";
import Governance from "./Governance";
import ContactUs from "./ContactUs";

class ExChange extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>ExChange | Derify Protocol</title>
        </Head>
        <div className="ExChange">
          <Banner />
          <Summary />
          <Mechanism />
          <Community />
          <Governance />
          <ContactUs />
        </div>
      </>
    );
  }
}

export default ExChange;
