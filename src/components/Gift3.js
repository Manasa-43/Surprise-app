import gift1 from "../assets/img1.png";
import gift2 from "../assets/img2.png";
import gift3 from "../assets/img3.png";
import pic1 from "../assets/Pic1.jpeg";
import pic2 from "../assets/Pic2.jpeg";
import pic3 from "../assets/Pic12.jpeg";
import pic4 from "../assets/Pic4.jpeg";
import pic5 from "../assets/Pic3.jpeg";
import pic6 from "../assets/Pic6.jpeg";
import pic7 from "../assets/Pic7.jpeg";
import pic8 from "../assets/Pic8.jpeg";
import pic9 from "../assets/Pic13.jpeg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Gift3() {
  const navigate = useNavigate();
  const goToGift = (num) => {
    if (num === 1) {
      navigate("/gift1");
    }
    if (num === 2) {
      navigate("/gift2");
    }
  };
  const picsArry =[
    pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9
]
const goBack = () =>{
    navigate('/final')
}
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh", backgroundColor: "#fef4e7" }}
    >
      <div
        className="card shadow py-3 my-2"
        style={{
          width: "1000px", // reduced card width
          display: "flex",
          alignItems: "center",
          height: "99vh",
          backgroundColor: "pink",
          borderRadius: "50px",
          position: "relative",
        }}
      >
        {/* <img
          src={conf}
          alt="cute"
          className="my-4"
          style={{ width: "200px", height: "auto", display: "block" }}
        /> */}
        <h2 className="my-3 text-danger text-center">Look at us 🥹💖</h2>
        <div className="container mt-4">
          <div className="row justify-content-center g-4">
            {picsArry.map((item, index) => (
                
              <div
                key={index}
                className="col-sm-6 col-md-4 d-flex justify-content-center"
              >
                <div
                  className="card shadow gift-card"
                  onClick={() => goToGift(item)}
                >
                  <img
                    src={item} // replace with your gift images array if needed
                    alt={`Gift ${item}`}
                    className="my-4 gift-img"
                  />
                  {/* <h6 className="my-2" style={{ fontWeight: "bold" }}>
                    Gift {item}
                  </h6> */}
                  {/* {console.log(item[index],'yyyyyyyyyy')} */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-3">
          <button className="btn btn-danger px-4 my-4" onClick={goBack}>Finally!!</button>
        </div>
      </div>
    </div>
  );
}
export default Gift3;
