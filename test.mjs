import supertest from 'supertest';
const request = supertest('http://localhost:7000/calculate-fee/');
import { expect } from 'chai';

describe('Calculate Fees', () => {
  it('GET /calculate-fees', () => {
    return request.get(`0`).then((res) => {
      expect(res.body.data).to.not.be.null;
      // console.log(res.body);
    });
  });

  it('GET /calculate-fees', () => {
    return request.get(`10`).then((res) => {
      expect(res.body.data).to.not.be.null;
      // console.log(res.body);
    });
  });

  it('GET /calculate-fees', () => {
    return request.get(`100`).then((res) => {
      expect(res.body.data).to.not.be.null;
      // console.log(res.body);
    });
  });

  it('GET /calculate-fees', () => {
    return request.get(`1000`).then((res) => {
      expect(res.body.data).to.not.be.null;
      // console.log(res.body);
    });
  });

  it('GET /calculate-fees', () => {
    return request.get(`10000`).then((res) => {
      expect(res.body.data).to.not.be.null;
      // console.log(res.body);
    });
  });

  it('GET /calculate-fees', () => {
    return request.get(`120000`).then((res) => {
      expect(res.body.data).to.not.be.null;
      // console.log(res.body);
    });
  });
});