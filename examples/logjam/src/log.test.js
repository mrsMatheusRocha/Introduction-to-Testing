import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  describe('development', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'development');
    })
    it('logs to the console in dev mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello');

      expect(logSpy).toHaveBeenCalledWith('Hello');
    })
  })
  describe('production', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'production');
    })
    afterEach(() => {
      vi.resetAllMocks();
    })
    it('shouldn\'t call console.log in prod mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello');

      expect(logSpy).not.toHaveBeenCalledWith('Hello');
    })
  })
});
