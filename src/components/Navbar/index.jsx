import React, { useEffect, useState } from "react";
import ButtonComponent from "../button";
import { logo } from "../../assets/logo";
import "./styles.css";
import {
  COLOR_GREEN,
  COLOR_GREY_30,
  COLOR_PARROTGREEN,
  COLOR_WHITE,
} from "../../utils/colors";
import { isScrolled } from "../../utils/helpers";
import { Link } from "react-router-dom";

const Navbar = ({ scrollVal }) => {
  const routes = [
    {
      name: "About Us",
      path: "/about",
      styles: {
        padding: "0.5rem 1rem",
        textColor: COLOR_WHITE,
        Border: "1px solid " + COLOR_GREY_30,
      },
    },
    {
      name: "Article",
      path: "",
      styles: {
        padding: "0.5rem 1rem",
        textColor: COLOR_WHITE,
        Border: "1px solid " + COLOR_GREY_30,
      },
    },

    {
      name: "Property",
      path: "",
      styles: {
        padding: "0.5rem 1rem",
        textColor: COLOR_WHITE,
        Border: "1px solid " + COLOR_GREY_30,
      },
    },
    {
      name: "Sign Up",
      path: "/signup",
      styles: {
        padding: "0.75rem 1.5rem",
        textColor: COLOR_GREEN,
        backgroundColor: COLOR_PARROTGREEN,
      },
    },
  ];
  const scrollCheck = isScrolled(scrollVal);
  return (
    <nav
      style={{
        backgroundColor: scrollCheck ? "#FFF" : "transparent",
        boxShadow: scrollCheck ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : null,
      }}
    >
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="BrandLogo" />
          <p>Hounder</p>
        </div>
      </Link>
      <div className="routes">
        <ul className="routes-list">
          {routes.map((route, index) => {
            return (
              <Link to={route.path}>
                <ButtonComponent
                  scrollCheck={scrollCheck}
                  title={route?.name}
                  style={route.styles}
                  key={index}
                />
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
