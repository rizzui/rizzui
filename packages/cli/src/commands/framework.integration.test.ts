import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs-extra';
import os from 'node:os';
import path from 'node:path';
import { InitCommand } from './init';
import { AddCommand } from './add';

async function withTempProject(
  setup: (projectRoot: string) => Promise<void>,
  run: (projectRoot: string) => Promise<void>
): Promise<void> {
  const projectRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'rizzui-cli-fw-'));
  const previousCwd = process.cwd();
  try {
    await setup(projectRoot);
    process.chdir(projectRoot);
    await run(projectRoot);
  } finally {
    process.chdir(previousCwd);
    await fs.remove(projectRoot);
  }
}

async function writeMinimalRizzuiFallback(projectRoot: string): Promise<void> {
  const rizzuiSrcRoot = path.join(projectRoot, 'node_modules', 'rizzui', 'src');
  await fs.ensureDir(path.join(rizzuiSrcRoot, 'components'));
  await fs.ensureDir(path.join(rizzuiSrcRoot, 'lib'));
  await fs.writeJson(path.join(projectRoot, 'node_modules', 'rizzui', 'package.json'), {
    name: 'rizzui',
    version: '2.1.0',
  });
  await fs.writeFile(path.join(rizzuiSrcRoot, 'lib', 'cn.ts'), 'export const cn = (...args: string[]) => args.join(" ");\n');
}

test('init + add works in Next.js project with explicit framework', async () => {
  await withTempProject(
    async (projectRoot) => {
      await fs.writeJson(path.join(projectRoot, 'package.json'), {
        name: 'next-app',
        dependencies: { next: '15.0.0', react: '19.0.0', 'react-dom': '19.0.0' },
      });
      await fs.ensureDir(path.join(projectRoot, 'src', 'app'));
      await fs.writeFile(
        path.join(projectRoot, 'src', 'app', 'layout.tsx'),
        "export default function RootLayout({ children }: { children: React.ReactNode }) { return <html><body>{children}</body></html>; }\n"
      );
      await fs.writeFile(path.join(projectRoot, 'tsconfig.json'), '{}\n');
      await writeMinimalRizzuiFallback(projectRoot);
    },
    async (projectRoot) => {
      await InitCommand.run({ default: true, framework: 'next' });
      await AddCommand.run(['lib'], { framework: 'next' });

      assert.equal(await fs.pathExists(path.join(projectRoot, 'src', 'app', 'globals.css')), true);
      assert.equal(await fs.pathExists(path.join(projectRoot, 'src', 'lib', 'cn.ts')), true);
      const layout = await fs.readFile(path.join(projectRoot, 'src', 'app', 'layout.tsx'), 'utf8');
      assert.match(layout, /globals\.css/);
    }
  );
});

test('init + add works in TanStack Start project with explicit framework', async () => {
  await withTempProject(
    async (projectRoot) => {
      await fs.writeJson(path.join(projectRoot, 'package.json'), {
        name: 'tanstack-app',
        dependencies: {
          '@tanstack/start': '1.0.0',
          '@tanstack/react-start': '1.0.0',
          react: '19.0.0',
          'react-dom': '19.0.0',
        },
      });
      await fs.ensureDir(path.join(projectRoot, 'src', 'routes'));
      await fs.writeFile(
        path.join(projectRoot, 'src', 'routes', '__root.tsx'),
        [
          "import { Outlet, createRootRoute } from '@tanstack/react-router';",
          '',
          'export const Route = createRootRoute({',
          '  component: RootComponent,',
          '});',
          '',
          'function RootComponent() {',
          '  return (',
          '    <html><body><Outlet /></body></html>',
          '  );',
          '}',
          '',
        ].join('\n')
      );
      await fs.writeFile(path.join(projectRoot, 'tsconfig.json'), '{}\n');
      await writeMinimalRizzuiFallback(projectRoot);
    },
    async (projectRoot) => {
      await InitCommand.run({ default: true, framework: 'tanstack-start' });
      await AddCommand.run(['lib'], { framework: 'tanstack-start' });

      assert.equal(await fs.pathExists(path.join(projectRoot, 'src', 'styles', 'globals.css')), true);
      assert.equal(await fs.pathExists(path.join(projectRoot, 'src', 'lib', 'cn.ts')), true);
      const rootRoute = await fs.readFile(path.join(projectRoot, 'src', 'routes', '__root.tsx'), 'utf8');
      assert.match(rootRoute, /globals\.css/);
    }
  );
});

