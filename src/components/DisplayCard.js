import axios from "axios";
import React from "react";

const DisplayCard = () => {
  const response = undefined;
  const DisplayUser = async () => {
    response = await axios.post("/displayuser");
  };
  // DisplayUser();
  return (
    <>
      
    </>
  );
};

export default DisplayCard;
