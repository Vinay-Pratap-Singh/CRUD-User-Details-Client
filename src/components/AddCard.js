import React, { useState } from "react";
import axios from "axios";

const AddCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");

  const addUser = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/adduser", { name,email,phone,password,cpassword });
      console.log(response.data);

      // clearing the input fields
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setcPassword("");
    } catch (error) {
      console.log("Unable to add the data\n", error);
    }
  };

  return (
    <form
      onSubmit={addUser}
      type="POST"
      className="shadow bg-gray-400 rounded-[5px] w-[220px]"
    >
      <div className="p-4 flex flex-col gap-2">
        <input
          id="inputID"
          className="px-2 py-1 bg-inherit border-b-[1px] outline-none text-sm"
          type="text"
          placeholder="Enter the name"
          minLength={3}
          value={name}
          onChange={(event)=>setName(event.target.value)}
        />
        <input
          id="inputID"
          className="px-2 py-1 bg-inherit border-b-[1px] outline-none text-sm"
          type="text"
          placeholder="Enter the email"
          value={email}
          onChange={(event)=>setEmail(event.target.value)}
        />
        <input
          id="inputID"
          className="px-2 py-1 bg-inherit border-b-[1px] outline-none text-sm"
          type="number"
          placeholder="Enter phone number"
          minLength={10}
          maxLength={10}
          value={phone}
          onChange={(event)=>setPhone(event.target.value)}
        />
        <input
          id="inputID"
          className="px-2 py-1 bg-inherit border-b-[1px] outline-none text-sm"
          type="text"
          placeholder="Enter the password"
          minLength={8}
          value={password}
          onChange={(event)=>setPassword(event.target.value)}
        />
        <input
          id="inputID"
          className="px-2 py-1 bg-inherit border-b-[1px] outline-none text-sm"
          type="text"
          placeholder="Confirm the password"
          minLength={8}
          value={cpassword}
          onChange={(event)=>setcPassword(event.target.value)}
        />
      </div>

      <button className="w-full bg-gray-500 rounded-b-[5px] py-1 font-bold text-gray-800">
        Add User
      </button>
    </form>
  );
};

export default AddCard;
