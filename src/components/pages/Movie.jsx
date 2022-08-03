import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MovieCont from "../includes/MovieCont";

function Movie() {
  return (
    <>
      <Header />
      <Contents>
        <MovieCont />
      </Contents>
      <Footer />
    </>
  );
}
export default Movie;
