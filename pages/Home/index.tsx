import React from "react";

import Banner from "./Banner";
import Summary from "./Summary";
import Mechanism from "./Mechanism";
import Community from "./Community";
import Governance from "./Governance";
import ContactUs from "./ContactUs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Banner />
        <Summary />
        <Mechanism />
        <Community />
        <Governance />
        <ContactUs />
      </div>
    );
  }
}

export default Home;
