import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Projects, Initiatives } from './Pages';
import { Navbar, SideLinks, Footer } from './Components';
import { fbLink, instaLink, linkedInLink, mediumLink, twitterLink, youTubeLink } from './Content/variables'
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
        <SideLinks fb={fbLink} insta={instaLink} linkedIn={linkedInLink} medium={mediumLink} twitter={twitterLink} utube={youTubeLink} />
      </div>
    </HashRouter>
  );
}

export default App;
