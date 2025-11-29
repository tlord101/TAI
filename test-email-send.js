const http = require('http');

const testData = {
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test Contact Form Submission',
  message: 'This is a test message from the contact form to verify SMTP is working correctly.'
};

const postData = JSON.stringify(testData);

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/send-email',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log('Sending test email...\n');

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => {
    console.log('Response Status:', res.statusCode);
    console.log('Response Headers:', res.headers);
    try {
      const json = JSON.parse(body);
      console.log('\nResponse Body:');
      console.log(JSON.stringify(json, null, 2));
      if (json.previewUrl) {
        console.log('\n✅ Preview Email: ' + json.previewUrl);
      }
    } catch (e) {
      console.log('Response:', body);
    }
  });
});

req.on('error', (e) => {
  console.error('❌ Request failed:', e.message);
});

req.write(postData);
req.end();
