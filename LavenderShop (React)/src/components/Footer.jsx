import React from "react";

function getCurrentYear() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  return year;
}

function Footer() {
  return (
    <div className="foot">
      <p>© {getCurrentYear()}</p>
    </div>
  );
}

export default Footer;
