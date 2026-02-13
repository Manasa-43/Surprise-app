import duduImg from '../assets/dudu_img1.png';
import curious from '../assets/curious_dudu.png'
import { useNavigate } from 'react-router-dom';
function Welcome() {
     const navigate = useNavigate()
    const goToQuestion = () =>{
       navigate('/question')
    }
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: '100vh', backgroundColor: '#fef4e7' }}
    >
      {/* Card with fixed width */}
      <div
        className="card shadow py-3 "
        style={{
          width: '900px',    // reduced card width
          display: 'flex',
          alignItems: 'center',
          height:'75vh',
          backgroundColor:'pink',
        borderRadius: '50px'
        }}
      >
        <img
          src={curious}
          alt="cute"
          className='my-4'
          style={{ width: '200px', height: 'auto', display: 'block' }}
        />
        <h3 className="my-2 text-danger text-center">
    Hey 😏, I have a very important question to ask you ❗
      </h3>
      <div className='my-4'>
        <button className="btn btn-danger btn-md mt-3" onClick={goToQuestion}>Click to know</button>
      </div>
      
      </div>

      
    </div>
  );
}

export default Welcome;
