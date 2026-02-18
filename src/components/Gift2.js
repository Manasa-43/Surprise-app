
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
function Gift2() {
  const navigate = useNavigate();
  const goToGift = () => {
    navigate("/gift");
  };



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
        <div className="my-3 text-center align">
          <h3>A Letter For You</h3>
          <div
            className="card shadow my-4 "
            style={{
              width: "500px", // reduced card width
              display: "flex",
              alignItems: "center",
              height: "45vh",
              backgroundColor: "#f7cfe0",
              borderRadius: "25px",
              position: "relative",
            }}
          >
            <div className='my-1'>
<p>My dear Premu,</p>
  <p>
     Exactly 2 years back I hated this day.<br />
    Netho life imagine cheskodanki assal nachaledu.<br />
       But now,I'm glad I got a partner like you.<br />
      I love the way you love me premuu.<br />
      And I really started loving you slowly. <br />
      Netho undalntene edola anipinche degara nundi, nuvvu lekapothe asal undalenu ani anipinche daka teskochav.<br />
      Just2 years lo intha maripotadi ani nen assal oohinchaledu .<br />
      Thanks for coming into my life.<br />
       
  </p>
  <b>Happy Valentine's Day, Bujjuu ❤️.</b>
            </div>

  
          </div>
           <button className="btn btn-danger px-4 mt-3 btn-sm" onClick={goToGift}>Back</button>
        </div>
      </div>
    </div>
  );
}
export default Gift2;
