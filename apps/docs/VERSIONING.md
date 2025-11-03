# Documentation Versioning Strategy

This document explains how RizzUI documentation handles multiple versions.

## Version Structure

The documentation site supports three versions, each representing different release states:

### Version 2.0.0 (Default/Latest)
- **Path**: `/docs`
- **Package**: `rizzui` (workspace)
- **Source**: Local workspace components from `packages/ui`
- **Import**: `import { Button } from "rizzui"`
- **Purpose**: Latest stable release
- **Status**: Default version shown to users

### Version 1.0.1
- **Path**: `/docs/v1`
- **Package**: `rizzui` (workspace)
- **Source**: Local workspace components from `packages/ui`
- **Import**: `import { Button } from "rizzui"`
- **Purpose**: Documentation for v1.0.1 release
- **Status**: Historical reference

### Version 0.8.7
- **Path**: `/docs/v0.8.7`  
- **Package**: `rizzui` (workspace)
- **Source**: Local workspace components from `packages/ui`
- **Import**: `import { Button } from "rizzui"`
- **Purpose**: Legacy version documentation
- **Status**: Historical reference

## Why All Versions Use Workspace Package

All documentation versions use the workspace `rizzui` package for the following reasons:

1. **Compatibility**: The workspace version is backward compatible with older API patterns
2. **Consistency**: Ensures all examples work correctly across all versions
3. **Maintainability**: Single source of truth for components
4. **Live Development**: Changes to components reflect immediately in docs

## Documentation Structure

```
apps/docs/
├── docs/                           # Current/development docs
├── versioned_docs/
│   ├── version-2.0.0/             # v2.0.0 documentation
│   ├── version-1.0.1/             # v1.0.1 documentation
│   └── version-0.8.7/             # v0.8.7 documentation
└── versioned_sidebars/
    ├── version-2.0.0-sidebars.json
    ├── version-1.0.1-sidebars.json
    └── version-0.8.7-sidebars.json
```

## Version Configuration

In `docusaurus.config.ts`:

```typescript
{
  docs: {
    lastVersion: '2.0.0',              // Default version
    includeCurrentVersion: false,       // Hide "Next" from dropdown
    versions: {
      '2.0.0': {
        label: 'v-2.0.0',
      },
      '1.0.1': {
        label: 'v-1.0.1',
        path: 'v1',
      },
      '0.8.7': {
        label: 'v-0.8.7',
        path: 'v0.8.7',
      },
    },
  },
}
```

## Import Examples

All versions use the same import pattern:

```tsx
import { Button } from "rizzui";

export default function App() {
  return <Button>Click Me</Button>;
}
```

## Version Dropdown

The documentation site shows only three versions in the dropdown:
1. **v-2.0.0** (default)
2. **v-1.0.1**
3. **v-0.8.7**

The "Next" or "current" version is hidden to keep the dropdown clean and focused on released versions.

## Benefits

1. **Simplified Maintenance**: Single component source for all docs
2. **Consistent Experience**: Same look and feel across versions
3. **No Breaking Changes**: Workspace version handles all API patterns
4. **Easy Updates**: Update once, reflects everywhere

## Updating Documentation

### For Any Version
Update files in the respective `versioned_docs/version-X.X.X/` folder. All versions use the workspace components, so focus on:
- API documentation accuracy for that version
- Feature availability in that version
- Props and usage patterns specific to that version

### Syncing Changes
To sync current docs to all versions:

```bash
cd apps/docs
rsync -av --exclude='_category_.json' docs/ versioned_docs/version-2.0.0/
rsync -av --exclude='_category_.json' docs/ versioned_docs/version-1.0.1/
```

## Testing

To verify all versions work correctly:

```bash
cd apps/docs
pnpm dev
```

Then navigate to:
- http://localhost:3000/docs - Version 2.0.0 (default)
- http://localhost:3000/docs/v1 - Version 1.0.1
- http://localhost:3000/docs/v0.8.7 - Version 0.8.7

All versions should load without errors and show the same components from the workspace.
