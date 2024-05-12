import React from "react";
import "./files.css";
import Bookticket from "./components/bookticket";
import Trainsearch from "./components/trainsearch";
import Pnrsearch from "./components/pnrsearch";
import trainImg from "./login_page.jpeg";
function Homepage() {
  return (
    <>
      <div className="train_image1">
          <img src={trainImg} alt="Train" />
        </div>
      <Bookticket />
      <Trainsearch />
      <Pnrsearch />
    </>

  );
}

export default Homepage;
