import React from "react";
import { Countriesflag } from "./Countriesflag";
import "../App.css";

export const Countries = ({ sumary }) => {
  return (
    <div className="countrylist">
      {sumary.map((country) => (
        <Countriesflag key={country.CountryCode} sumary={country} />
      ))}
    </div>
  );
};
