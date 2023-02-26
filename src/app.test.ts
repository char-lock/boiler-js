import { describe, expect, test } from '@jest/globals';
import { getNumber } from './app';

describe('Number', () => {
  test('checks that we get a 2', () => {
    expect(getNumber()).toBe(2);
  });
});
