import test from 'node:test';
import assert from 'node:assert/strict';
import { createProgram } from './cli';

test('top-level help includes polished command descriptions', () => {
  const help = createProgram().helpInformation();
  assert.match(help, /Usage: rizzui/);
  assert.match(help, /CLI for bootstrapping RizzUI/);
  assert.match(help, /init \[options\]/);
  assert.match(help, /add \[options\] \[components\.\.\.\]/);
});

test('add command help includes list option', () => {
  const addCommand = createProgram().commands.find((command) => command.name() === 'add');
  assert.ok(addCommand);
  const help = addCommand.helpInformation();
  assert.match(help, /--list/);
  assert.match(help, /Optional slugs, e\.g\. button modal tabs cn variants/);
});
