import React from "react";
import FirstContact from "./FirstContact";
import "../styles/Home.css";
import Punta from "./Punta";

const Home = () => {
  return (
    <div className="home-container">
      <FirstContact />
      <div className="discover">
        <h1>
          <strong className="strong1">Discover the water</strong>
        </h1>
        <h3 className="strong2">From prestine waters, to majestic</h3>
        <h3 className="strong2">forests -- We've got it all.</h3>
      </div>

      <div className="div2"></div>
      <div className="div3"></div>
      <div className="div4">
        <p className="others">
          <strong> Sea Fishing </strong>
        </p>
        <p className="others">
          Do you love fishing? We offer some of
          <br /> the best fishing spots around the world.
        </p>
        <p className="others">
          <strong> Hang Gliding </strong>
        </p>
        <p className="others">
          Do you love fishing? We offer some of
          <br /> the best fishing spots around the world.
        </p>

        <p className="others">
          <strong> Parasailing </strong>
        </p>
        <p className="others">
          Do you love fishing? We offer some of
          <br /> the best fishing spots around the world.
        </p>
      </div>
      <h4>Start My Journey Today</h4>

      <div className="his">historic destin</div>
      <div className="flex1">
        <div className="div11"></div>
        <div className="div12"></div>
        <div className="div13"></div>
      </div>
      <div className="punta">
        <Punta className="punta1" />
        <Punta className="punta2" />
        <Punta className="punta3" />
      </div>
    </div>
  );
};

export default Home;
