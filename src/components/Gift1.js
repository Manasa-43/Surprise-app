
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
function Gift1() {
  const navigate = useNavigate();

  const [count, setCount] = useState(1);
  const [update, setUpdate] = useState(null);
  const warningsList = [
    "Neptune aa 😡",

    "Correct, You're so smart ,next one😁",

    "Baaga alochinchi cheppu 🙄",
  ];
  const warningsList1 = [
    "Ohoo, please try again  😏",

    "Heheh, JUST KIDDING Premuuu😁",

    " Adi kadamma🙄",
  ];

  const wrngAns = (ans) => {
    if (ans === 1) {
      setUpdate(warningsList[0]);
    }
    if (ans === 3) {
      setUpdate(warningsList[2]);
    }
    if (ans === 2) {
      setUpdate(warningsList[1]);
      setCount(2);
    }
  };
  const wrngAns1 = (ans) => {
    if (ans === 1) {
      setUpdate(warningsList1[0]);
    }
    if (ans === 3) {
      setUpdate(warningsList1[2]);
    }
    if (ans === 2) {
      setUpdate(warningsList1[1]);
      ;
    }
  };
  const goBack = () => {
    if(count===2){
setCount(3)
    }
    else{
navigate('/gift')
    }
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
          <h3>Quiz for you</h3>
          <div
            className="card shadow my-4 "
            style={{
              width: "450px", // reduced card width
              display: "flex",
              alignItems: "center",
              height: "32vh",
              backgroundColor: "#f7cfe0",
              borderRadius: "25px",
              position: "relative",
            }}
          >
            {count === 1 && (
              <>
                <h6 className="my-4">
                  Where do I plan to stay the rest of my life 🥹?
                </h6>
                <div className="d-flex flex-column h-100 w-100 ">
                  <button
                    className="btn btn-light rounded btn-sm pink-hover  my-1 mx-4 "
                    onClick={() => wrngAns(1)}
                  >
                    Neptune 😜
                  </button>
                  <button
                    className="btn btn-light rounded btn-sm pink-hover  my-1 mx-4"
                    onClick={() => wrngAns(2)}
                  >
                    Your Heart 🙈
                  </button>
                  <button
                    className="btn btn-light rounded btn-sm pink-hover  my-1 mx-4"
                    onClick={() => wrngAns(3)}
                  >
                    Soan 😉
                  </button>
                </div>
                <p className="py-2 text-danger fw-bold">{update}</p>
              </>
            )}
            {count === 2 && (
              <>
                <h6 className="my-4">
                  Who is always right in our relationship 😜 ?
                </h6>
                <div className="d-flex flex-column h-100 w-100 ">
                  <button
                    className="btn btn-light rounded btn-sm pink-hover  my-1 mx-4 "
                    onClick={() => wrngAns1(3)}
                  >
                    Always you 😜
                  </button>
                  <button
                    className="btn btn-light rounded btn-sm pink-hover  my-1 mx-4"
                    onClick={() => wrngAns1(2)}
                  >
                    Your beautiful wifeyy 🙈
                  </button>
                  <button
                    className="btn btn-light rounded btn-sm pink-hover  my-1 mx-4"
                    onClick={() => wrngAns1(1)}
                  >
                    Prime Minister 😉
                  </button>
                </div>
                <p className="py-2 text-danger fw-bold">{update}</p>
                <button className="btn btn-danger px-4 mt-3" onClick={goBack}>
                  Next
                </button>
              </>
            )}
            {count === 3 && (
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                
                <h5 className="text-center my-2">
                  Yay! You passed the test. You really love me 🥰
                </h5>
                <button className="btn btn-danger px-4 mt-3 btn-sm" onClick={goBack}>
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gift1;
