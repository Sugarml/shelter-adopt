// server/index.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// 中介層
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json()); // 解析 JSON
app.use(morgan('dev')); // 記錄 API 請求

// 範例路由
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Express server is running',
    timestamp: new Date()
  });
});

// 啟動 server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
