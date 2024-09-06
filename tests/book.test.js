const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('Book API Tests', () => {
  
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({ title: 'Test Book', author: 'Author', genre: 'Fiction' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Test Book');
  });

});
