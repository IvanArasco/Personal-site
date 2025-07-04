import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MenuDropdown from './components/Block-nav-menu';
import BlockFooter from './components/Block-footer';

import Home from './pages/Home';
import Music from './pages/Music';
import Journeys from './pages/Journey';
import Cinema from './pages/Cinema';
import Books from './pages/Book';

function App() {
  return (

    <Router>
      <MenuDropdown />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/books" element={<Books />} />
        <Route path="/cinema" element={<Cinema />} />
      </Routes>
      <BlockFooter title="Footer - 2025 Iván Arasco"/>
    </Router>

  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
