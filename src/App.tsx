import { Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="*" element={<BooksPage />} />
      </Routes>
    </div>
  );
}

export default App;
