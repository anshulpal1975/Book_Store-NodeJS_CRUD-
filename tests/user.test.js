const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');

// Connect to test database
beforeAll(async () => {
  const MONGO_URI = 'your-test-mongodb-uri';
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

// Cleanup after tests
afterAll(async () => {
  await mongoose.connection.db.dropDatabase(); // Cleanup the test DB after the tests run
  await mongoose.connection.close();
});

describe('User Controller Tests', () => {

  // Test user registration
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token'); // The response should return a token
  });

  // Test user login
  it('should login a user', async () => {
    // Register a user first
    await request(app)
      .post('/api/users/register')
      .send({
        username: 'loginuser',
        password: 'password123'
      });

    // Then try logging in with that user
    const res = await request(app)
      .post('/api/users/login')
      .send({
        username: 'loginuser',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token'); // The response should include a JWT token
  });

  // Test login failure
  it('should fail login with incorrect credentials', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({
        username: 'wronguser',
        password: 'wrongpassword'
      });
    
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message', 'Invalid credentials');
  });

});
