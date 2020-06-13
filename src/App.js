import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  const cities = [
    {
      name: "Glasgow",
      description:
        "Glasgow is the most populous city in Scotland and the third most populous city in th United Kindom",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Glasgow-George-Square.jpg/250px-Glasgow-George-Square.jpg",
      ULRAdreess: "peoplemakeglasgow.com"
    },
    {
      name: "Manchester",
      description:
        "Manchester is a city and metropolitan borough in Greater Manchester, England.",
      image:
        "https://whizzardhelicopters.co.uk/sitev1/wp-content/uploads/2015/12/Media-City.jpg",
      ULRAdreess: "visitmanchester.com"
    },
    {
      name: "London",
      description: "London is the capital of England and the United Kingdom.",
      image:
        "https://www.visitbritainshop.com/espana/~/media/images/subcategory/london-passes.ashx",
      ULRAdreess: "visitlondon"
    }
  ];

  const AdreessFooter = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards cities={cities} />
      <Footer AdreessFooter={AdreessFooter} />
    </div>
  );
};

export default App;
/*

*/
