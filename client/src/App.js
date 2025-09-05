import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AnimalList from './pages/AnimalList';
import AnimalDetail from './pages/AnimalDetail';

function App() {
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((res) => res.json())
      .then((data) => setHealthData(data))
      .catch((err) => console.error('API fetch error:', err));
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header p-4 bg-blue-200 flex justify-between items-center">
          <h1 className="text-xl font-bold">收容所遠端認養平台</h1>
          <nav className="flex gap-4">
            <Link to="/">首頁</Link>
            <Link to="/animals">動物清單</Link>
          </nav>
        </header>

        <main className="p-4">
          {healthData && (
            <div className="mb-4 p-2 border rounded bg-green-100">
              <p>Status: {healthData.status}</p>
              <p>Message: {healthData.message}</p>
              <p>Timestamp: {new Date(healthData.timestamp).toLocaleString()}</p>
            </div>
          )}

          <Routes>
            <Route
              path="/"
              element={<h2 className="text-2xl">歡迎來到 Shelter Adopt 平台</h2>}
            />
            <Route path="/animals" element={<AnimalList />} />
            <Route path="/animals/:id" element={<AnimalDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
