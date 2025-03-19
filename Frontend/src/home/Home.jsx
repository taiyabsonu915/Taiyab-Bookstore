import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Books from "../components/books";
import Search from "../components/search/searchBar";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Books></Books>
      <Footer />
    </>
  );
}

export default Home;
