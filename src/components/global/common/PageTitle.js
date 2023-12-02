import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {" "}
        {title
          ? ` ${title} | bitlearn : Point of Sale and E-Commerce Website all in one`
          : "bitlearn : Point of Sale and E-Commerce Website all in one"}
      </title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : "bitlearn : Point of Sale and E-Commerce Website all in one"
        }
      />
    </Helmet>
  );
};

export default PageTitle;
