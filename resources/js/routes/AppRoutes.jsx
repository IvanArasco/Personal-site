import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home';
import Music from '../pages/Music';
import Games from '../pages/Game';
import Journeys from '../pages/Journey';
import Cinema from '../pages/Cinema';
import Books from '../pages/Book';

export default function AppRoutes() {
  return (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/games" element={<Games />} />
            <Route path="/journeys" element={<Journeys />} />
            <Route path="/books" element={<Books />} />
            <Route path="/cinema" element={<Cinema />} />
        </Route>
    </Routes>
  );
}
