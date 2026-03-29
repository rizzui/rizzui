# RizzUI Import Optimization Guide

## 🚨 The Problem: Large Bundle Size

When you import components from the main `rizzui` package, **you're importing the entire library** (~168KB), even if you only need one component.

```tsx
// ❌ BAD - Imports entire library (168KB+)
import { Button } from 'rizzui';
```

## ✅ The Solution: Tree-Shakeable Imports

The `rizzui` package is built with **individual component entry points** using `tsup`. Import from specific component paths instead:

```tsx
// ✅ GOOD - Imports only Button component (~8KB)
import { Button } from 'rizzui/button';
```

## 📦 Available Component Paths

### Buttons & Actions
```tsx
import { Button } from 'rizzui/button';
import { ActionIcon } from 'rizzui/action-icon';
```

### Forms & Inputs
```tsx
import { Input } from 'rizzui/input';
import { Textarea } from 'rizzui/textarea';
import { Select } from 'rizzui/select';
import { MultiSelect } from 'rizzui/multi-select';
import { Checkbox } from 'rizzui/checkbox';
import { Radio } from 'rizzui/radio';
import { Switch } from 'rizzui/switch';
import { Password } from 'rizzui/password';
import { PinCode } from 'rizzui/pin-code';
import { Upload } from 'rizzui/upload';
```

### Form Groups
```tsx
import { CheckboxGroup } from 'rizzui/checkbox-group';
import { RadioGroup } from 'rizzui/radio-group';
```

### Advanced Components
```tsx
import { AdvancedCheckbox } from 'rizzui/advanced-checkbox';
import { AdvancedRadio } from 'rizzui/advanced-radio';
```

### Feedback & Display
```tsx
import { Alert } from 'rizzui/alert';
import { Badge } from 'rizzui/badge';
import { Loader } from 'rizzui/loader';
import { Progressbar } from 'rizzui/progressbar';
import { RadialProgressbar } from 'rizzui/radial-progressbar';
import { Empty } from 'rizzui/empty';
import { Announcement } from 'rizzui/announcement';
```

### Overlays
```tsx
import { Modal } from 'rizzui/modal';
import { Drawer } from 'rizzui/drawer';
import { Popover } from 'rizzui/popover';
import { Tooltip } from 'rizzui/tooltip';
import { Dropdown } from 'rizzui/dropdown';
```

### Navigation
```tsx
import { Tabs } from 'rizzui/tabs';
import { Stepper } from 'rizzui/stepper';
```

### Data Display
```tsx
import { Table } from 'rizzui/table';
import { Accordion } from 'rizzui/accordion';
import { Collapse } from 'rizzui/collapse';
import { Avatar } from 'rizzui/avatar';
```

### Layout
```tsx
import { Box } from 'rizzui/box';
import { Flex } from 'rizzui/flex';
import { Grid } from 'rizzui/grid';
```

### Typography
```tsx
import { Typography } from 'rizzui/typography';
```

## 🎯 Bundle Size Comparison

| Import Method | Bundle Size | Components Loaded |
|--------------|-------------|-------------------|
| `import { Button } from 'rizzui'` | ~168KB | All 40+ components |
| `import { Button } from 'rizzui/button'` | ~8KB | Button + dependencies only |

**Savings: ~160KB (95% reduction)** 🎉

## 🔧 Migration Example

### Before (Importing from main package)
```tsx
import { 
  Button, 
  Input, 
  Modal, 
  Alert 
} from 'rizzui';
```

### After (Tree-shakeable imports)
```tsx
import { Button } from 'rizzui/button';
import { Input } from 'rizzui/input';
import { Modal } from 'rizzui/modal';
import { Alert } from 'rizzui/alert';
```

## 💡 Best Practices

1. **Always use component-specific imports** in production applications
2. **Use main package import** only for prototyping or when you need many components
3. **Check your bundle analyzer** to verify the optimization is working
4. **Update your ESLint** to warn about main package imports (optional)

## 🛠️ How It Works

The `rizzui` package uses `tsup` with multiple entry points configured in `tsup.config.js`:

```js
export default defineConfig({
  entry: {
    index: 'src/index.ts',           // Main entry (all components)
    button: 'src/components/button/index.ts',  // Individual entry
    input: 'src/components/input/index.ts',    // Individual entry
    // ... more entries
  },
  // ...
});
```

This creates individual `.js`, `.cjs`, and `.mjs` files for each component in the `dist/` folder, allowing modern bundlers to import only what's needed.

## 📊 Performance Impact

- **Development**: Faster HMR (Hot Module Replacement)
- **Production**: Smaller bundle size, faster page loads
- **Tree-shaking**: Works seamlessly with Webpack, Rollup, Vite, etc.

## 🔍 Verify Your Bundle

To check if the optimization is working:

```bash
# For Next.js
npm run build
# Check the output bundle size

# Or use bundle analyzer
npm install --save-dev @next/bundle-analyzer
```

---

**✨ Happy optimizing!** If you have questions, check the [RizzUI documentation](https://rizzui.com).

