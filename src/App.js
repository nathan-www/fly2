import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import './global.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;