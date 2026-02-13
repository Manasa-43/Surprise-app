import gift1 from "../assets/img1.png";
import gift2 from "../assets/img2.png";
import gift3 from "../assets/img3.png";
import { useNavigate } from "react-router-dom";
function Gift() {
        const navigate = useNavigate()
const goToGift = (num) =>{
    if(num===1){
navigate('/gift1')
    }
    if(num===2){
        navigate('/gift2')
    }
     if(num===3){
        navigate('/gift3')
    }
    
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
          height: "70vh",
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
        <h2 className="my-3 text-danger text-center">Something for You</h2>
        <div className="d-flex justify-content-around w-100 mt-4">
          <div
            className="card shadow  "
            style={{
              width: "200px", // reduced card width
              display: "flex",
              alignItems: "center",
              height: "25vh",
              backgroundColor: "#f7cfe0",
              borderRadius: "25px",
              position: "relative",
              cursor:'pointer'
            }}
            onClick={()=>{goToGift(1)}}
          >
            <img
              src={gift2}
              alt="cute"
              className="my-4"
              style={{ width: "100px", height: "auto", display: "block" }}
            />
            <h6 style={{ fontWeight: "bold" }} className="my-2">
              Gift 1
            </h6>
          </div>
          <div
            className="card shadow  "
            style={{
              width: "200px", // reduced card width
              display: "flex",
              alignItems: "center",
              height: "25vh",
              backgroundColor: "#f7cfe0",
              borderRadius: "25px",
              position: "relative",
              cursor:'pointer'
            }}
             onClick={()=>{goToGift(2)}}
          >
            <img
              src={gift1}
              alt="cute"
              className="my-4"
              style={{ width: "80px", height: "auto", display: "block" }}
            />
            <h6 style={{ fontWeight: "bold" }} className="my-2">
              Gift 2
            </h6>
          </div>
          <div
            className="card shadow "
            style={{
              width: "200px", // reduced card width
              display: "flex",
              alignItems: "center",
              height: "25vh",
              backgroundColor: "#f7cfe0",
              borderRadius: "25px",
              position: "relative",
              cursor:'pointer'
            }}
            onClick={()=>{goToGift(3)}}
          >
            <img
              src={gift3}
              alt="cute"
              className="my-4"
              style={{ width: "80px", height: "auto", display: "block" }}
            />
            <h6 style={{ fontWeight: "bold" }} className="my-2">
              Gift 3
            </h6>
          </div>
        </div>
        <div className='my-3'>
             <button className="btn btn-danger px-4 my-4">Finally!!</button>
        </div>
      </div>
    </div>
  );
}
export default Gift;
