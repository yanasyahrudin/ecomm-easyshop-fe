import React from "react";
import Header from "../components/Header";
import Banner from './../components/Banner';
import Categorys from "../components/Categorys";
import FeeatureProducts from "../components/products/FeeatureProducts";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Categorys />
      <div className="py-[45px]">
        <FeeatureProducts />

      </div>
    </div>
  );
};

export default Home;
