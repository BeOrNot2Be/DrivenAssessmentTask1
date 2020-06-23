/** @format */

import React, { useState } from "react";
import InputBox from "../components/InputBox";
import Checkerboard from "../components/Checkerboard";

const CheckerboardPage = () => {
  return (
    <div
      style={{
        height: "90vh",
      }}
    >
      <InputBox />
      <Checkerboard />
    </div>
  );
};

CheckerboardPage.propTypes = {};

export default CheckerboardPage;
