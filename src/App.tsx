import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Paralelepipedo from './pages/Paralelepipedo';
import PrismaTriangular from './pages/PrismaTriangular';
import PrismaRetangular from './pages/PrismaRetangular';
import Cilindro from './pages/Cilindro';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paralelepipedo" element={<Paralelepipedo />} />
          <Route path="/prisma-triangular" element={<PrismaTriangular />} />
          <Route path="/prisma-retangular" element={<PrismaRetangular />} />
          <Route path="/cilindro" element={<Cilindro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
