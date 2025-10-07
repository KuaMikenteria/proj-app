import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cuisine from './components/Cuisine.tsx';
import Dishes from './components/dishes/Dishes.tsx';
import Desserts from './components/desserts/Desserts.tsx';
import Kakanin from './components/kakanin/Kakanin.tsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page showing categories */}
        <Route path="/" element={<Cuisine />} />

        {/* Dish detail page */}
        <Route path="/dishes/:id" element={<Dishes />} />

        {/* Dessert detail page */}
        <Route path="/desserts/:id" element={<Desserts />} />

        {/* Kakanin detail page */}
        <Route path="/kakanin/:id" element={<Kakanin />} />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
