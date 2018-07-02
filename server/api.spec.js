const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Client = db.model('client');
const validator = require('validator');

describe('Client routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('/api/clients/register/', () => {
    // const codysProject = 'puppybook'
    // const codysWebsite = 'puppybook.com'

    beforeEach(() => {
      return Client.create({
        projectName: 'puppybook',
        website: 'www.puppybook.com'
      });
    });

    it('POST /api/verify/:id', async () => {
      const res = await request(app)
        .post('/api/verify/123456789')
        .expect(200);

      expect(validator.isUUID(res.body.loginIdentifier)).to.be.be(true);
    });
  });
});
