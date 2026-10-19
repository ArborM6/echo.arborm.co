import assert from 'node:assert/strict';
import { test } from 'node:test';
import { splitIntoSentences } from '../src/sentences.ts';

test('splits Chinese text on 。 and ；', () => {
  assert.deepEqual(splitIntoSentences('甲乙。丙丁；戊己。'), ['甲乙。', '丙丁；', '戊己。']);
});

test('splits English text on periods and trims whitespace', () => {
  assert.deepEqual(splitIntoSentences('First one. Second one.'), ['First one.', 'Second one.']);
});

test('keeps a trailing fragment without punctuation', () => {
  assert.deepEqual(splitIntoSentences('提醒：请取消。随时可取消'), ['提醒：请取消。', '随时可取消']);
});

test('returns an empty list for blank input', () => {
  assert.deepEqual(splitIntoSentences('   '), []);
});
