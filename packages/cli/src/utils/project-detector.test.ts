import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs-extra';
import os from 'node:os';
import path from 'node:path';
import { ProjectDetector } from './project-detector';

async function withTempProject(
  setup: (projectRoot: string) => Promise<void>,
  run: (projectRoot: string) => Promise<void>
): Promise<void> {
  const projectRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'rizzui-cli-detector-'));
  try {
    await setup(projectRoot);
    await run(projectRoot);
  } finally {
    await fs.remove(projectRoot);
  }
}

test('detects Next.js project by default', async () => {
  await withTempProject(
    async (projectRoot) => {
      await fs.writeJson(path.join(projectRoot, 'package.json'), {
        name: 'next-app',
        dependencies: { next: '15.0.0', react: '19.0.0' },
      });
      await fs.ensureFile(path.join(projectRoot, 'src', 'app', 'layout.tsx'));
      await fs.ensureFile(path.join(projectRoot, 'tsconfig.json'));
    },
    async (projectRoot) => {
      const info = await ProjectDetector.detect(projectRoot);
      assert.equal(info.framework, 'next');
      assert.equal(info.hasSrcDir, true);
      assert.equal(ProjectDetector.getGlobalCssRelativePath(info), path.join('src', 'app', 'globals.css'));
    }
  );
});

test('detects TanStack Start project by default', async () => {
  await withTempProject(
    async (projectRoot) => {
      await fs.writeJson(path.join(projectRoot, 'package.json'), {
        name: 'tanstack-app',
        dependencies: { '@tanstack/start': '1.0.0', react: '19.0.0' },
      });
      await fs.ensureFile(path.join(projectRoot, 'src', 'routes', '__root.tsx'));
      await fs.ensureFile(path.join(projectRoot, 'tsconfig.json'));
    },
    async (projectRoot) => {
      const info = await ProjectDetector.detect(projectRoot);
      assert.equal(info.framework, 'tanstack-start');
      assert.equal(ProjectDetector.getGlobalCssRelativePath(info), path.join('src', 'styles', 'globals.css'));
      assert.equal(ProjectDetector.getRootEntryRelativePath(info), path.join('src', 'routes', '__root.tsx'));
    }
  );
});

test('throws for mismatched framework override', async () => {
  await withTempProject(
    async (projectRoot) => {
      await fs.writeJson(path.join(projectRoot, 'package.json'), {
        name: 'next-app',
        dependencies: { next: '15.0.0', react: '19.0.0' },
      });
      await fs.ensureFile(path.join(projectRoot, 'src', 'app', 'layout.tsx'));
    },
    async (projectRoot) => {
      await assert.rejects(
        () => ProjectDetector.detect(projectRoot, 'tanstack-start'),
        /does not match this project/
      );
    }
  );
});

