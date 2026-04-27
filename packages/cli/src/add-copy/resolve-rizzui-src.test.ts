import path from 'path';
import os from 'os';
import fs from 'fs-extra';
import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveBundledUiSrc } from './resolve-rizzui-src';
import { verifyBundledUiSources } from './verify-ui-sources';

test('resolveBundledUiSrc returns path when bundled directories exist', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'rizzui-bundled-'));
  const baseDir = path.join(root, 'dist');
  await fs.ensureDir(path.join(baseDir, 'ui-src/components'));
  await fs.ensureDir(path.join(baseDir, 'ui-src/lib'));

  const resolved = resolveBundledUiSrc(baseDir);
  assert.equal(resolved, path.join(baseDir, 'ui-src'));
});

test('resolveBundledUiSrc returns null when required bundled directories are missing', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'rizzui-bundled-missing-'));
  const baseDir = path.join(root, 'dist');
  await fs.ensureDir(path.join(baseDir, 'ui-src/components'));

  const resolved = resolveBundledUiSrc(baseDir);
  assert.equal(resolved, null);
});

test('verifyBundledUiSources reports missing directories', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'rizzui-verify-'));
  await fs.ensureDir(path.join(root, 'components'));

  const result = verifyBundledUiSources(root);
  assert.equal(result.ok, false);
  assert.equal(result.missing.length, 1);
  assert.match(result.missing[0], /lib$/);
});
