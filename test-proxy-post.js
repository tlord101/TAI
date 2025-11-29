const http = require('http');

const data = JSON.stringify({
  name: 'Website UI Test',
  email: 'visitor@test.example',
  subject: 'Website contact form end-to-end test',
  message: 'This is a full end-to-end test via the frontend proxy.'
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/send-email',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', body);
  });
});

req.on('error', (e) => console.error('Request error:', e));
req.write(data);
req.end();
