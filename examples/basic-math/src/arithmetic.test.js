import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic.js';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4)
  })
  it('should add two negative numbers', () => {
    expect(add(-2, -2)).toBe(-4)
  })

  it('should parse strings in numbers', () => {
    expect(add('1','1')).toBe(2)
  })

  it('sould\' pass if you give a first not a number argument', () => {
    expect(() => add('potato', 2)).toThrow();
  })
  it('sould\' pass if you give a second not a number argument', () => {
    expect(() => add(2, 'potato')).toThrow();
  })

  it('should default to zero if either argument is null', () => {
    expect(add(1)).toBe(1);
  })
});

describe('subtract', () => {
  it('should subtract two positive numbers', () => {
    expect(subtract(2, 2)).toBe(0)
  })
});

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 2)).toBe(4)
  })
});

describe('divide', () => {
  it('should divide two positive numbers', () => {
    expect(divide(2, 2)).toBe(1)
  })
});
