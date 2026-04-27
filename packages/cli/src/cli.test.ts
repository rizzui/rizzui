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
  assert.match(help, /--framework <framework>/);
  assert.match(help, /Optional slugs, e\.g\.[\s\S]*cn[\s\S]*variants/);
});

test('init command help includes framework override', () => {
  const initCommand = createProgram().commands.find((command) => command.name() === 'init');
  assert.ok(initCommand);
  const help = initCommand.helpInformation();
  assert.match(help, /--framework <framework>/);
  assert.match(help, /next \| tanstack-start/);
});
