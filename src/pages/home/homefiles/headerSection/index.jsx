import React from "react";
import "./styles.css";
import ButtonComponent from "../../../../components/button";
import {
  COLOR_LIGHTGREEN,
  COLOR_WHITE,
  COLOR_YELLOW,
} from "../../../../utils/colors";
import { HiLocationMarker } from "react-icons/hi";
import { Airbnb, Trevloka, tiketcom, tripAdv } from "../../../../assets/logo";

const HeaderSection = () => {
  const partnersArr = [
    { id: 1, url: Airbnb },
    { id: 2, url: tiketcom },
    { id: 3, url: Trevloka },
    { id: 4, url: tripAdv },
  ];
  const btnStyle = {
    backgroundColor: COLOR_LIGHTGREEN,
    padding: "0.75rem 1rem",
    textColor: COLOR_WHITE,
  };
  return (
    <div className="HeaderSection">
      <section className="left">
        <h1>
          Find Your Place To Live <span>Your Dreams</span> Easily Here
        </h1>
        <p>
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <div className="searchContainer">
          <HiLocationMarker style={{ fontSize: "24px", color: COLOR_YELLOW }} />
          <input
            type="search"
            className="search"
            placeholder="Search for the location you want"
          ></input>{" "}
          <ButtonComponent title="Search" style={btnStyle} isHeader={true} />
        </div>
        <div className="partners">
          <h3>Our Partnership</h3>
          <div className="partnership">
            {partnersArr.map((partner) => {
              return (
                <img
                  src={partner.url}
                  alt={partner.id.toString()}
                  key={partner.id}
                  style={{ height: "1.2rem" }}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* Right Section Start */}
      <section className="right"></section>
    </div>
  );
};

export default HeaderSection;
