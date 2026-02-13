import loveImg from '../assets/love_img.png';
import { useNavigate } from 'react-router-dom';
function FinalPage() {
     const navigate = useNavigate()
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
          src={loveImg}
          alt="cute"
          className='my-4'
          style={{ width: '200px', height: 'auto', display: 'block' }}
        />
        <h3 className="my-2 text-danger text-center">
     I love you Premuu!!
      </h3>
      
      
      </div>

      
    </div>
  );
}

export default FinalPage;
