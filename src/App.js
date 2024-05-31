import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Projects, Initiatives } from './Pages';
import { Navbar, SideLinks, Footer } from './Components';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/initiatives" element={<Initiatives />} />
        </Routes>
        <Footer />
        <SideLinks fb="#" insta="#" linkedIn="#" medium="#" twitter="#" utube="#" />
      </div>
    </HashRouter>
  );
}

export default App;
