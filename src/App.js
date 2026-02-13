import './App.css';
import Welcome from './components/Welcome'
import Question from './components/Question';
import { Routes, Route } from 'react-router-dom';
import Confirmation from './components/Confirmation';
import Gift from './components/Gift';
import Gift1 from './components/Gift1';
import Gift2 from './components/Gift2';
import Gift3 from './components/Gift3';
import FinalPage from './components/FinalPage';
function App() {
  return (
   <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/question" element={<Question />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/gift" element={<Gift />} />
      <Route path="/gift1" element={<Gift1 />} />
      <Route path="/gift2" element={<Gift2/>} />
      <Route path="/gift3" element={<Gift3/>} />
     < Route path="/final" element={<FinalPage/>} />
    </Routes>
  );
}

export default App;
