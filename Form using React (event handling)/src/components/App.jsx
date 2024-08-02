import React, { useState } from "react";

function form() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    hobbies: "",
    flowers: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form submitted", formData);

    setformData({
      name: "",
      email: "",
      phonenumber: "",
      hobbies: "",
      flowers: "",
    });
  }

  function inputChange(e) {
    setformData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="name"
          onChange={inputChange}
          value={formData.name}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={inputChange}
          value={formData.email}
        />
        <label>Phone Number:</label>
        <input
          type="number"
          name="phonenumber"
          onChange={inputChange}
          value={formData.phonenumber}
        />
        <label>Hobbies:</label>
        <textarea
          rows="4"
          cols="50"
          type="text"
          name="hobbies"
          onChange={inputChange}
          value={formData.hobbies}
        ></textarea>
        <button>Submit</button>
      </form>
    </>
  );
}

export default form;
