const request = require('supertest');
const app = require('./app'); // Assuming your app.js exports the Express app instance

describe('GET /', function() {
  it('responds with "Hello, GitHub Demos!"', function(done) {
    request(app)
      .get('/')
      .expect('Hello, GitHub Demos!')
 .expect(200, done);
  });

  // Dummy test case that should pass
  it('should always pass', () => {
    expect(true).toBe(true);
  });

  // Another dummy test case that should pass
  it('should pass with a simple assertion', () => {
    const sum = 1 + 1;
    expect(sum).toBe(2);
  });

  // Dummy test case that is intended to fail
  it('should fail to demonstrate failing tests', () => {
    // This expectation is intentionally incorrect
    expect(false).toBe(true);
  });

});