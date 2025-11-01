# RizzUI Component Showcase App

A comprehensive Next.js application showcasing RizzUI components with all their variants, sizes, and features.

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm next-dev

# Build for production
pnpm next-build

# Start production server
pnpm next-start
```

## 📄 Available Pages

### 1. Button Component - `/`
**URL**: http://localhost:3001/

**Features**:
- ✅ 5 variants (solid, outline, flat, text, danger)
- ✅ 4 sizes (sm, md, lg, xl)
- ✅ 5 rounded styles (none, sm, md, lg, pill)
- ✅ Loading & disabled states
- ✅ Interactive demo
- ✅ Complete props documentation

### 2. ActionIcon Component - `/action-icon`
**URL**: http://localhost:3001/action-icon

**Features**:
- ✅ 5 variants (solid, outline, flat, text, danger)
- ✅ 4 sizes (32px, 40px, 48px, 56px)
- ✅ 5 rounded styles (none, sm, md, lg, full)
- ✅ Multiple icon examples
- ✅ Loading & disabled states
- ✅ Complete props documentation

### 3. Badge Component - `/badge`
**URL**: http://localhost:3001/badge

**Features**:
- ✅ 3 variants (solid, flat, outline)
- ✅ 6 colors (primary, secondary, success, warning, danger, info)
- ✅ 4 sizes (sm, md, lg, xl)
- ✅ Dot badges (renderAsDot)
- ✅ Outline ring for avatars (enableOutlineRing)
- ✅ Real-world use cases
- ✅ Complete props documentation

## 🎯 Navigation

Each page includes a navigation bar at the top for easy switching between components.

## 📦 Bundle Size Optimization

All components use **tree-shakeable imports** for optimal bundle size:

```tsx
// ✅ GOOD - Tree-shakeable (8KB)
import { Button } from 'rizzui/button';
import { ActionIcon } from 'rizzui/action-icon';
import { Badge } from 'rizzui/badge';

// ❌ BAD - Imports entire library (168KB)
import { Button, ActionIcon, Badge } from 'rizzui';
```

**Savings**: ~160KB per component (95% reduction) 🎉

## 💡 Quick Examples

### Button
```tsx
import { Button } from 'rizzui/button';

<Button variant="solid" size="lg" rounded="pill">
  Click Me
</Button>

<Button variant="outline" isLoading>
  Loading...
</Button>
```

### ActionIcon
```tsx
import { ActionIcon } from 'rizzui/action-icon';
import { PlusIcon } from '@heroicons/react/24/outline';

<ActionIcon variant="solid" rounded="full">
  <PlusIcon className="w-5 h-5" />
</ActionIcon>

<ActionIcon variant="danger" isLoading>
  <XIcon className="w-5 h-5" />
</ActionIcon>
```

### Badge
```tsx
import { Badge } from 'rizzui/badge';

// Text badge
<Badge variant="solid" color="success">Active</Badge>

// Dot indicator
<div className="flex items-center gap-2">
  <Badge renderAsDot color="success" />
  <span>Online</span>
</div>

// Avatar with status
<div className="relative">
  <img src="/avatar.jpg" className="w-12 h-12 rounded-full" />
  <Badge
    renderAsDot
    color="success"
    enableOutlineRing
    className="absolute bottom-0 right-0"
  />
</div>
```

## 📚 Documentation

Each page includes:

1. **Visual Examples** - All variants, sizes, and styles
2. **Interactive Demos** - Live loading states
3. **Props Table** - Complete API reference with types
4. **Code Examples** - Copy-paste ready snippets
5. **Use Cases** - Real-world implementation examples
6. **Matrix Tables** - Complete variant/size combinations

## 🎨 Features

- ✅ Comprehensive component showcases
- ✅ Dark mode support
- ✅ Interactive examples
- ✅ Complete API documentation
- ✅ Tree-shaking optimized imports
- ✅ Responsive design
- ✅ 100+ live examples

## 📊 Stats

- **Total Pages**: 3
- **Total Components**: 3
- **Total Variants**: 13
- **Total Examples**: 100+
- **Bundle Size Saved**: ~480KB

## 🔗 Links

- **Import Optimization Guide**: `IMPORT_OPTIMIZATION.md`
- **RizzUI Docs**: https://rizzui.com

## 🛠️ Tech Stack

- Next.js 15.3.2
- React 19.1.0
- RizzUI 1.0.2
- Tailwind CSS 4.1.3
- TypeScript 5.8.3

---

**Made with ❤️ using RizzUI**
