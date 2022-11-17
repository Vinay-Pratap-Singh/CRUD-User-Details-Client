import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const DisplayCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userDetails = async() => {
      const response = await axios.post("/displayuser");
      setData(...[response.data]);
    }
    userDetails();
  },)
  
  return (
    <>
      {
        data.map((element, index) => {
          return (
            <div key={index} className="shadow bg-gray-400 rounded-[5px] w-[220px]">
              <div className="p-4 flex flex-col gap-2">
              <p className="px-2 py-1 bg-inherit border-b-[1px] outline-none text-sm">{element.name}</p>
              <p className="px-2 py-1 bg-inherit border-b-[1px] outline-none text-sm">{element.email}</p>
              <p className="px-2 py-1 bg-inherit border-b-[1px] outline-none text-sm">{element.phone}</p>
              </div>
              <button className="w-full bg-gray-500 rounded-b-[5px] py-1 font-bold text-gray-800">Delete User</button>
            </div>
          )
        })
      }
    </>
  );
};

export default DisplayCard;
