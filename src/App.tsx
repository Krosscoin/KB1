;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './index.css'; // Ensure your global styles are imported

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
