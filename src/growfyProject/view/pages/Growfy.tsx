import React from "react";
import Startup from "../components/startup/Startup";
import Header from "../components/header/Header";
import Services from "../components/services/Services";
import Help from "../components/help/Help";
import Statistics from "../components/statistics/Statistics";
import Clients from "../components/clients/Clients";
import Blog from "../components/blog/Blog";
import ReadySection from "../components/readySection/ReadySection";
import Footer from "../components/footer/Footer";

export default function Growfy() {
  return (
    <div className="bg-growfyBgColor">
      <Header />
      <Startup />
      <Services />
      <Help />
      <Statistics />
      <Clients />
      <Blog />
      <ReadySection />
      <Footer />
    </div>
  );
}
