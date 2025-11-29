const http = require('http');
require('dotenv').config();

// Import the serverless handler
const emailHandler = require('./api/send-email.js');

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/send-email') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', async () => {
        try {
          const data = JSON.parse(body);
          req.body = data;

          // Create a small wrapper around Node's res to emulate Express/Vercel `res.status().json()`
          const resWrapper = {
            _status: 200,
            setHeader: (k, v) => res.setHeader(k, v),
            writeHead: (s, h) => res.writeHead(s, h),
            status(code) { this._status = code; return this; },
            json(obj) {
              const body = JSON.stringify(obj);
              if (!res.headersSent) res.writeHead(this._status || 200, { 'Content-Type': 'application/json' });
              res.end(body);
            },
            end: (...args) => res.end(...args),
          };

          await emailHandler(req, resWrapper);
        } catch (err) {
          console.error('Error parsing JSON:', err.message);
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, error: 'Invalid JSON' }));
        }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`✅ Email API Server listening on http://localhost:${PORT}`);
  console.log(`📧 SMTP configured:`, {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER ? '(set)' : '(not set)',
    ownerEmail: process.env.OWNER_EMAIL
  });
});
