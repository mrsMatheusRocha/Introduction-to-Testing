import { test, expect, vi } from 'vitest';

const randomSpy = vi.spyOn(Math, 'random').mockImplementation(() => 0.1);

test('a super simple test', () => {
  const result = Math.random();
  expect(result).toBe(0.1);
});
