import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import YoutubeCont from "../includes/YoutubeCont";

function Youtube() {
  return (
    <>
      <Header />
      <Contents>
        <YoutubeCont />
      </Contents>
      <Footer />
    </>
  );
}
export default Youtube;
