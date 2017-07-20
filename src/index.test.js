/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import isValidIP from './index';

describe('Solution', () => {
  describe('Some valid inputs', () => {
    it('should 0.0.0.0 return true', () => {
      expect(isValidIP('0.0.0.0')).to.be.true;
    });
    it('should 1.2.3.4 return true', () => {
      expect(isValidIP('1.2.3.4')).to.be.true;
    });
    it('should 127.0.0.1 return true', () => {
      expect(isValidIP('127.0.0.1')).to.be.true;
    });
    it('should 123.45.67.89 return true', () => {
      expect(isValidIP('123.45.67.89')).to.be.true;
    });
  });
  describe('Some invalid inputs', () => {
    it('should empty string return false', () => {
      expect(isValidIP('')).to.be.false;
    });
    it('should 1 return false', () => {
      expect(isValidIP('1')).to.be.false;
    });
    it('should 1.2.3 return false', () => {
      expect(isValidIP('1.2.3')).to.be.false;
    });
    it('should 1.2.3.4.5 return false', () => {
      expect(isValidIP('1.2.3.4.5')).to.be.false;
    });
    it('should 1.2.3.4. return false', () => {
      expect(isValidIP('1.2.3.4.')).to.be.false;
    });
    it('should .1.2.3.4 return false', () => {
      expect(isValidIP('.1.2.3.4')).to.be.false;
    });
    it('should 123.456.78.90 return false', () => {
      expect(isValidIP('123.456.78.90')).to.be.false;
    });
    it('should 123.045.067.089 return false', () => {
      expect(isValidIP('123.045.067.089')).to.be.false;
    });
    it('should 123,45,67,89 return false', () => {
      expect(isValidIP('123,45,67,89')).to.be.false;
    });
  });
});
