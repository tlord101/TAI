#!/usr/bin/env node
/**
 * Production Server for Luxury Real Estate Website
 * Serves static files from build/ and email API on /api/send-email
 * No changes to working code — just wraps existing handlers
 */

const http = require('http');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

// Use existing email handler (unchanged)
const emailHandler = require('./api/send-email.js');

const PORT = process.env.PORT || 3000;
const BUILD_DIR = path.join(__dirname, 'dist');

console.log('🚀 Starting Luxury Real Estate Website Server...\n');
console.log('Configuration:');
console.log(`  Port: ${PORT}`);
console.log(`  Build Dir: ${BUILD_DIR}`);
console.log(`  Email API: /api/send-email`);
console.log(`  Owner Email: ${process.env.OWNER_EMAIL || 'not configured'}\n`);

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

  // Email API endpoint (unchanged from working code)
  if (req.method === 'POST' && req.url === '/api/send-email') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        req.body = data;

        // Wrapper to emulate Express res methods
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

        // Call the working email handler
        await emailHandler(req, resWrapper);
      } catch (err) {
        console.error('❌ Error parsing JSON:', err.message);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'Invalid JSON' }));
      }
    });
    return;
  }

  // Strip /TAI prefix for local serving
  let reqUrl = req.url;
  if (reqUrl.startsWith('/TAI')) {
    reqUrl = reqUrl.replace(/^\/TAI/, '') || '/';
  }

  // Static file serving (React SPA)
  let filePath = reqUrl === '/' ? path.join(BUILD_DIR, 'index.html') : path.join(BUILD_DIR, reqUrl);

  // Security: prevent directory traversal
  if (!filePath.startsWith(BUILD_DIR)) {
    filePath = path.join(BUILD_DIR, 'index.html');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Only serve index.html for navigation routes (no extension), NOT for missing assets
      if (err.code === 'ENOENT' && !path.extname(reqUrl)) {
        fs.readFile(path.join(BUILD_DIR, 'index.html'), (err, data) => {
          if (err) {
            res.writeHead(500);
            res.end('Internal Server Error');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        });
      } else {
        // Return 404 for missing assets (js, css, images, etc.)
        res.writeHead(404);
        res.end('Not Found');
      }
      return;
    }

    // Serve file with correct content type
    const ext = path.extname(filePath);
    let contentType = 'text/html';
    if (ext === '.js') contentType = 'application/javascript';
    if (ext === '.css') contentType = 'text/css';
    if (ext === '.json') contentType = 'application/json';
    if (ext === '.svg') contentType = 'image/svg+xml';
    if (ext === '.png') contentType = 'image/png';
    if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📧 Email API ready at POST /api/send-email`);
  console.log(`📁 Static files served from build/`);
  console.log('\nPress Ctrl+C to stop.\n');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use. Try a different port:`);
    console.error(`PORT=3001 node server.js`);
  } else {
    console.error('❌ Server error:', err.message);
  }
  process.exit(1);
});
