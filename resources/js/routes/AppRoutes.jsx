import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home';
import Music from '../pages/Music';
import Journeys from '../pages/Journey';
import Cinema from '../pages/Cinema';
import About from '../pages/About';

export default function AppRoutes() {
  return (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/journeys" element={<Journeys />} />
            <Route path="/cinema" element={<Cinema />} />
             <Route path="/about" element={<About />} />
        </Route>
    </Routes>
  );
}
