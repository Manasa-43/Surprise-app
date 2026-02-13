import valentine from "../assets/valentine_img.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Question() {
  const [noPosition, setNoPosition] = useState(null);
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState("Dammunte No click chey");
  const navigate = useNavigate()
  const warningsList = [
    
    "Are you suuure about that? 🥺",
    "Choose wisely, mister 😏",
    "This is your final warning 😌",
    "Think again… 😈",
    "No is not an option today 😌❤️",
    "The Yes button is waiting for you 💖",
  ];
  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 200);
    const randomLeft = Math.floor(Math.random() * 500);

    setNoPosition({
      top: randomTop + "px",
      left: randomLeft + "px",
    });
    
    if (count <= 5) {
      setCount((count) => count + 1);
      setWarning(warningsList[count]);
    }
  };
 const goToYes =()=>{
    navigate('/confirmation')
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
          src={valentine}
          alt="cute"
          className="my-4"
          style={{ width: "200px", height: "auto", display: "block" }}
        />
        <h3 className="my-2 text-danger text-center">
          Will you be my Valentine?!💖
        </h3>
        <div
          className="d-flex justify-content-center gap-4 my-4"
          style={{ position: "relative" }}
        >
          <button className="btn btn-danger px-4" onClick={goToYes}>Yes 😇</button>

          <button
            className="btn btn-danger  px-4"
            onMouseEnter={moveNoButton}
            style={
              noPosition
                ? {
                    position: "absolute",
                    top: noPosition.top,
                    left: noPosition.left,
                    width: "100px",
                  }
                : {}
            }
          >
            No 😅
          </button>
        </div>
        {count >= 0 && (
          <div
            style={{
              color: "#463116",
              fontWeight: "bold",
            }}
          >
            {warning}
          </div>
        )}
      </div>
    </div>
  );
}
export default Question;
