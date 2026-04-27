import test from 'node:test';
import assert from 'node:assert/strict';
import {
  promptSectionHeader,
  promptStepLabel,
  promptBlock,
  promptHint,
} from './prompt-ui';

test('prompt section header includes title and subtitle', () => {
  const text = promptSectionHeader('Header', 'Sub');
  assert.match(text, /Header/);
  assert.match(text, /Sub/);
});

test('prompt step label renders step information', () => {
  const text = promptStepLabel(1, 3, 'Choose framework');
  assert.match(text, /Step 1\/3/);
  assert.match(text, /Choose framework/);
});

test('prompt block and hint preserve message text', () => {
  assert.match(promptBlock('Message body'), /Message body/);
  assert.match(promptHint('Hint text'), /Hint text/);
});

