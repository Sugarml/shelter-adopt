import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    // 呼叫 Express 後端 API
    fetch('http://localhost:5000/api/health')
      .then((res) => res.json())
      .then((data) => setHealthData(data))
      .catch((err) => console.error('API fetch error:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>收容所遠端認養平台</h1>

        {healthData ? (
          <div>
            <p>Status: {healthData.status}</p>
            <p>Message: {healthData.message}</p>
            <p>Timestamp: {new Date(healthData.timestamp).toLocaleString()}</p>
          </div>
        ) : (
          <p>Loading server data...</p>
        )}
      </header>
    </div>
  );
}

export default App;
