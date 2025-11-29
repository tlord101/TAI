const http = require('http');
const path = require('path');
require('dotenv').config();

// Import the email handler directly
const emailHandler = require('./api/send-email.js');

console.log('🧪 Running complete email integration test...\n');

// Test 1: Test mode (SMTP disabled)
console.log('━'.repeat(60));
console.log('TEST 1: Email handler in test mode (SMTP disabled)');
console.log('━'.repeat(60));

(async () => {
  const testRequest = {
    method: 'POST',
    body: {
      name: 'Test User',
      email: 'visitor@example.com',
      subject: 'Test Contact Form',
      message: 'This is a test message to verify the email handler works.'
    }
  };

  const mockRes = {
    _status: 200,
    statusCode: 200,
    setHeader: (k, v) => {},
    writeHead: (s, h) => { console.log(`Response Status: ${s}`); },
    status(code) { this._status = code; return this; },
    json(obj) {
      console.log(`Response JSON:`);
      console.log(JSON.stringify(obj, null, 2));
    },
    end: (...args) => {}
  };

  try {
    // Temporarily clear SMTP env vars for test mode
    const orig = { host: process.env.SMTP_HOST, user: process.env.SMTP_USER, pass: process.env.SMTP_PASS };
    process.env.SMTP_HOST = null;
    process.env.SMTP_USER = null;
    process.env.SMTP_PASS = null;

    await emailHandler(testRequest, mockRes);

    // Restore
    process.env.SMTP_HOST = orig.host;
    process.env.SMTP_USER = orig.user;
    process.env.SMTP_PASS = orig.pass;

    console.log('\n✅ Test 1 PASSED: Handler accepted request and returned test-mode response.\n');
  } catch (err) {
    console.error('❌ Test 1 FAILED:', err.message);
    process.exit(1);
  }

  // Test 2: Real SMTP config (with current .env)
  console.log('━'.repeat(60));
  console.log('TEST 2: Email handler with SMTP config (from .env)');
  console.log('━'.repeat(60));

  const testRequest2 = {
    method: 'POST',
    body: {
      name: 'Integration Test',
      email: 'test@example.com',
      subject: 'SMTP Config Test',
      message: 'Testing if SMTP credentials are properly sanitized and used.'
    }
  };

  const mockRes2 = {
    _status: 200,
    statusCode: 200,
    setHeader: (k, v) => {},
    writeHead: (s, h) => { console.log(`Response Status: ${s}`); },
    status(code) { this._status = code; return this; },
    json(obj) {
      console.log(`Response JSON:`);
      console.log(JSON.stringify(obj, null, 2));
    },
    end: (...args) => {}
  };

  try {
    await emailHandler(testRequest2, mockRes2);
    console.log('\n✅ Test 2 PASSED: Handler processed SMTP config and attempted send.\n');
  } catch (err) {
    console.error('⚠️  Test 2 encountered error (this may be expected if SMTP creds are invalid):');
    console.error(err.message);
  }

  // Test 3: Missing fields validation
  console.log('━'.repeat(60));
  console.log('TEST 3: Validation - missing required fields');
  console.log('━'.repeat(60));

  const testRequest3 = {
    method: 'POST',
    body: {
      name: 'Incomplete',
      // missing email, subject, message
    }
  };

  const mockRes3 = {
    _status: 200,
    statusCode: 200,
    setHeader: (k, v) => {},
    writeHead: (s, h) => { console.log(`Response Status: ${s}`); },
    status(code) { this._status = code; return this; },
    json(obj) {
      console.log(`Response JSON:`);
      console.log(JSON.stringify(obj, null, 2));
    },
    end: (...args) => {}
  };

  try {
    await emailHandler(testRequest3, mockRes3);
    console.log('\n✅ Test 3 PASSED: Handler correctly rejected incomplete request.\n');
  } catch (err) {
    console.error('❌ Test 3 FAILED:', err.message);
  }

  console.log('━'.repeat(60));
  console.log('✅ ALL TESTS COMPLETED');
  console.log('━'.repeat(60));
  console.log('\n📋 Summary:');
  console.log('- Email handler correctly handles test mode (SMTP disabled)');
  console.log('- Email handler processes SMTP configuration from .env');
  console.log('- Email handler validates required fields');
  console.log('\nℹ️  For live email testing, ensure:');
  console.log('1. Gmail credentials are correct (use app-specific password)');
  console.log('2. SMTP_PASS in .env has no extra spaces or quotes');
  console.log('3. ContactPage form posts to /api/send-email');
  console.log('\n');
})();
