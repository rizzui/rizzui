# Documentation Versioning Strategy

This document explains how RizzUI documentation handles multiple versions with their corresponding package versions.

## Version Structure

The documentation site supports three versions, each using its specific RizzUI package:

### Version 2.0.0 (Default/Latest)
- **Path**: `/docs`
- **Package**: `rizzui` (workspace)
- **Source**: Local workspace components from `packages/ui`
- **Import**: `import { Button } from "rizzui"`
- **Purpose**: Latest stable release with current development components

### Version 1.0.1
- **Path**: `/docs/v1`
- **Package**: `rizzui-v1` (npm alias for `rizzui@1.0.1`)
- **Source**: Published npm package `rizzui@1.0.1`
- **Import**: `import { Button } from "rizzui-v1"`
- **Purpose**: Previous stable release

### Version 0.8.7
- **Path**: `/docs/v0.8.7`  
- **Package**: `rizzui-v0` (npm alias for `rizzui@0.8.7`)
- **Source**: Published npm package `rizzui@0.8.7`
- **Import**: `import { Button } from "rizzui-v0"`
- **Purpose**: Legacy version

## How It Works

### Package Aliases

In `package.json`, we use npm package aliases to install specific versions:

```json
{
  "dependencies": {
    "rizzui": "workspace:*",      // Latest from workspace
    "rizzui-v1": "npm:rizzui@1.0.1",  // v1.0.1 from npm
    "rizzui-v0": "npm:rizzui@0.8.7"   // v0.8.7 from npm
  }
}
```

### Documentation Structure

```
apps/docs/
├── docs/                           # Current/development docs (uses workspace rizzui)
├── versioned_docs/
│   ├── version-2.0.0/             # v2.0.0 docs (uses workspace rizzui)
│   ├── version-1.0.1/             # v1.0.1 docs (uses rizzui-v1)
│   └── version-0.8.7/             # v0.8.7 docs (uses rizzui-v0)
└── versioned_sidebars/
    ├── version-2.0.0-sidebars.json
    ├── version-1.0.1-sidebars.json
    └── version-0.8.7-sidebars.json
```

### Import Examples

**Version 2.0.0 (workspace):**
```tsx
import { Button } from "rizzui";

export default function App() {
  return <Button>Click Me</Button>;
}
```

**Version 1.0.1 (npm):**
```tsx
import { Button } from "rizzui-v1";

export default function App() {
  return <Button>Click Me</Button>;
}
```

**Version 0.8.7 (npm):**
```tsx
import { Button } from "rizzui-v0";

export default function App() {
  return <Button>Click Me</Button>;
}
```

## Benefits

1. **True Version Isolation**: Each documentation version shows components from its actual package version
2. **Accurate Examples**: Users see exactly how components work in their installed version
3. **No Breaking Changes**: Old documentation continues to work with old package versions
4. **Development Flexibility**: Latest docs can use cutting-edge workspace components

## Updating Documentation

### For Version 2.0.0 (Latest)
Update files in `docs/` and `versioned_docs/version-2.0.0/` - they use workspace components.

### For Version 1.0.1 or 0.8.7
Only update if there are documentation fixes. Component examples should match their published npm versions.

## TypeScript Support

Type declarations are provided in `src/types/rizzui-versions.d.ts` for the aliased packages.

## Testing

To verify all versions work correctly:

```bash
pnpm dev
```

Then navigate to:
- http://localhost:3000/docs - Version 2.0.0 (default)
- http://localhost:3000/docs/v1 - Version 1.0.1
- http://localhost:3000/docs/v0.8.7 - Version 0.8.7

