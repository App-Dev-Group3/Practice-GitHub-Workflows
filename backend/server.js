const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());

const { sendEmail } = require('./send-email');

app.post('/api/send-email', async (req, res) => {
  const { to, subject, text, html, from } = req.body;

  try {
    const result = await sendEmail({ to, subject, text, html, from });
    res.json({ success: true, result });
  } catch (error) {
    console.error('send-email error', error);
    res.status(500).json({ success: false, error: error.message || 'send-email failed' });
  }
});

// existing proxy can remain for other routes, but send-email is handled above
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:5000',
  changeOrigin: true,
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});