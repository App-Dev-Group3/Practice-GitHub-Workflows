const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use('/api', createProxyMiddleware({
  target: 'http://localhost:5000',
  changeOrigin: true,
}));


app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});