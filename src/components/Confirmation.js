import conf from "../assets/conf_img.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Confirmation() {
    const navigate = useNavigate()
const goToGift = () =>{
    navigate('/gift')
}

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh", backgroundColor: "#fef4e7" }}
    >
      {/* Card with fixed width */}
      <div
        className="card shadow py-3 my-2"
        style={{
          width: "900px", // reduced card width
          display: "flex",
          alignItems: "center",
          height: "70vh",
          backgroundColor: "pink",
          borderRadius: "50px",
          position: "relative",
        }}
      >
        <img
          src={conf}
          alt="cute"
          className="my-4"
          style={{ width: "200px", height: "auto", display: "block" }}
        />
        <h3 className="my-2 text-danger text-center">
         ✨Happy Valentines Day Premuu💖✨
        </h3>
        <div
          className="d-flex justify-content-center gap-4 my-4"
          style={{ position: "relative" }}
        >
          <button className="btn btn-danger px-4" onClick={goToGift}>Gifts kavalaa!!</button>
        </div>
      </div>
    </div>
  );
}
export default Confirmation;
