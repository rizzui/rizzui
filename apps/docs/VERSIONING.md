# Documentation Versioning Strategy

This document explains how RizzUI documentation handles multiple versions.

## Version Structure

The documentation site supports three versions:

### Version 2.0.0 (Default/Latest)
- **Path**: `/docs`
- **Package**: `rizzui` (workspace)
- **Source**: Local workspace components from `packages/ui`
- **Status**: Latest stable release

### Version 1.0.1
- **Path**: `/docs/v1`
- **Package**: `rizzui` (workspace)
- **Source**: Local workspace components from `packages/ui`
- **Status**: Previous stable release documentation

### Version 0.8.7
- **Path**: `/docs/v0.8.7`  
- **Package**: `rizzui` (workspace)
- **Source**: Local workspace components from `packages/ui`
- **Status**: Legacy version documentation

## Important Note

**All versions use the same workspace components for live examples.** This ensures:
- Consistent behavior across all documentation versions
- No compatibility issues with React/Docusaurus
- Maintainable codebase with single source of truth

The versioned documentation serves to:
1. **Preserve historical API documentation** - Each version documents the API as it existed
2. **Show migration paths** - Users can compare versions to understand changes
3. **Support legacy users** - Users on older versions can reference appropriate docs

## Documentation Structure

```
apps/docs/
├── docs/                           # Current/latest docs (v2.0.0)
├── versioned_docs/
│   ├── version-2.0.0/             # v2.0.0 docs snapshot
│   ├── version-1.0.1/             # v1.0.1 docs snapshot
│   └── version-0.8.7/             # v0.8.7 docs snapshot
└── versioned_sidebars/
    ├── version-2.0.0-sidebars.json
    ├── version-1.0.1-sidebars.json
    └── version-0.8.7-sidebars.json
```

## Usage

All versions use the same import:

```tsx
import { Button } from "rizzui";

export default function App() {
  return <Button>Click Me</Button>;
}
```

## API Differences

Each version's documentation reflects the API as it existed at that time:

### Version 2.0.0
- Latest component APIs
- All current features documented
- Latest design tokens and styling

### Version 1.0.1  
- Documentation reflects v1.0.1 API
- May reference deprecated props
- Historical examples preserved

### Version 0.8.7
- Documentation reflects v0.8.7 API
- Legacy component structure
- Original API documentation

## Benefits

1. **Single Source of Truth**: All examples use workspace components
2. **No Compatibility Issues**: Avoid package version conflicts
3. **Easy Maintenance**: Update components in one place
4. **Consistent Examples**: All live demos work reliably
5. **Historical Record**: Preserved API documentation for reference

## For Users

If you're using a specific version of RizzUI from npm:

1. **Install your version**: `npm install rizzui@1.0.1`
2. **Reference that version's docs**: Navigate to `/docs/v1`
3. **Note**: Live examples show latest components, but API documentation matches your version
4. **Migration**: Compare with latest docs to see what changed

## Updating Documentation

### For Version 2.0.0 (Latest)
Update files in both `docs/` and `versioned_docs/version-2.0.0/`

### For Historical Versions
Only update for:
- Documentation fixes (typos, clarity)
- Correcting historical inaccuracies
- Never change API examples to match newer versions

## Best Practices

1. Keep version snapshots as historical records
2. All examples use `import { X } from "rizzui"`
3. Document breaking changes between versions
4. Preserve original API signatures in older docs
5. Add notes when showing newer features in older version docs
