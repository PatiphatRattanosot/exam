import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import SearchForm from "../components/SearchForm";
import FlightList from "../components/FlightList";

const Home = () => {
  const flights = [
    { from: "กรุงเทพ (BKK)", to: "โตเกียว (NRT)", price: "8,200" },
    { from: "กรุงเทพ (BKK)", to: "ลอนดอน (LHR)", price: "14,079" },
    { from: "กรุงเทพ (BKK)", to: "ฮ่องกง (HKG)", price: "4,800" },
  ];
  return (
    <div className="font-sans bg-gray-100">
      <Navbar />
      {/* <Banner />
      <SearchForm /> */}
      <FlightList flights={flights} />
    </div>
  );
};

export default Home;
