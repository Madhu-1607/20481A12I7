import { Routes, Route } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllTrainsPage />} />
        <Route path="/trains/:trainNumber" element={<SingleTrainPage />} />
      </Routes>
    </div>
  );
}

export default App;
