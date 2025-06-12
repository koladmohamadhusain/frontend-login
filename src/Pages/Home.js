import React from "react";
import Navbar from "../Component/Navbar";
import Carousel from "../Component/Carousel";
import Footer from "../Component/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <h1>Welcome to the Home Page</h1>
        <Carousel />
      </div>
      <Footer />
    </>
  );
}

export default Home;
