---
name: styling
description: "Elysium UI library — full component reference, import strategy, Slots pattern, styling utilities, and theming. Use when: building UI, choosing components, working with sx/styles, or using the Slots pattern."
---

# Styling (Elysium UI Library)

## Purpose

Complete reference for the `@swiftpost/elysium` package — the project's UI abstraction layer over MUI 7. Every UI element must be imported from Elysium, never from MUI directly.

## When to use this skill

- Importing or using any UI component.
- Choosing between base (MUI wrapper) and enhanced components.
- Building reusable components with the Slots & SlotProps pattern.
- Working with `sx` props, style merging, or theme values.
- Setting up providers or theme configuration.

## Import Strategy

**Never import from `@mui/material` directly.** All UI goes through Elysium.

| What | Import From |
|------|-------------|
| MUI base components | `@swiftpost/elysium/ui/base/{ComponentName}` |
| Enhanced components | `@swiftpost/elysium/ui/{ComponentName}` |
| Hooks | `@swiftpost/elysium/ui/{hookName}` |
| Types (`SxProps`, `InferSlotsFromSlotProps`, etc.) | `@swiftpost/elysium/ui/types` |
| Style utilities (`spreadSx`) | `@swiftpost/elysium/utils/styles/sxProps` |
| Theme provider | `@swiftpost/elysium/core/ThemeProvider` |
| Cache provider | `@swiftpost/elysium/core/AppRouterCacheProvider` |
| Theme object / font | `@swiftpost/elysium/themes/gamut` |
| Static theme options | `@swiftpost/elysium/themes/gamut/static` |
| Color tokens | `@swiftpost/elysium/colors/material` |
| MUI Icons | `@mui/icons-material` (only exception — direct MUI import allowed) |

---

## Base Components (MUI Wrappers)

Thin re-exports of MUI components. Import from `@swiftpost/elysium/ui/base/*`.

| Component | MUI Source | Notes |
|-----------|-----------|-------|
| `Autocomplete` | `@mui/material/Autocomplete` | |
| `Box` | `@mui/material/Box` | |
| `Button` | `@mui/material/Button` | |
| `Checkbox` | `@mui/material/Checkbox` | |
| `FormControl` | `@mui/material/FormControl` | |
| `FormLabel` | `@mui/material/FormLabel` | |
| `Link` | `@mui/material/Link` | **Base** link — no routing. For navigation, use the enhanced `Link` |
| `MenuItem` | `@mui/material/MenuItem` | |
| `Modal` | `@mui/material/Modal` | |
| `Radio` | `@mui/material/Radio` | |
| `RadioGroup` | `@mui/material/RadioGroup` | |
| `Select` | `@mui/material/Select` | |
| `Stack` | `@mui/material/Stack` | |
| `Text` | `@mui/material/Typography` | **Renamed.** Always use `Text`, never `Typography` |
| `TextField` | `@mui/material/TextField` | |

### Text (Typography Rename)

MUI's `Typography` is renamed to `Text` throughout the project. All related types are also renamed:

```tsx
import Text from '@swiftpost/elysium/ui/base/Text';
import type { TextProps } from '@swiftpost/elysium/ui/base/Text';

// TextProps, TextClassKey, TextClasses, TextOwnProps, textClasses, etc.
```

---

## Enhanced Components

Custom components that add behavior beyond MUI. Import from `@swiftpost/elysium/ui/*`.

### Link (`@swiftpost/elysium/ui/Link`)

Integrates `next/link` with MUI Link styling. **Always use this for navigation — never `next/link` directly.**

```tsx
interface Props {
  href: string;
  children: React.ReactNode;
  inheritStyle?: boolean;  // inherits color + fontWeight from parent
  external?: boolean;      // skips next/link, renders plain <a>
  blank?: boolean;         // target="_blank" + rel="noopener"
  sx?: SxProps;
}
```

```tsx
import Link from '@swiftpost/elysium/ui/Link';

// Internal navigation (uses next/link under the hood)
<Link href="/about">About</Link>

// External link in new tab
<Link href="https://example.com" external blank>Example</Link>

// Inherit parent font styling
<Text variant="h6">
  Read our <Link href="/terms" inheritStyle>Terms</Link>
</Text>
```

### Image (`@swiftpost/elysium/ui/Image`)

Smart wrapper around `next/image`. Falls back to plain `<img>` when source is a URL string without dimensions.

```tsx
interface Props extends Omit<NextImageProps, 'src' | 'width' | 'height'> {
  source: string | ImageSourceData;  // URL string, or object with src/width/height
  alt: string;
  width?: number | string;
  height?: number | string;
}
```

```tsx
import Image from '@swiftpost/elysium/ui/Image';

// Static import (next/image with optimization)
import logo from '@/public/logo.png';
<Image source={logo} alt="Logo" />

// Dynamic URL (falls back to <img>)
<Image source="https://example.com/photo.jpg" alt="Photo" width={200} height={150} />
```

**Exported helpers:**
- `isStaticImageData(data)` — type guard for static imports
- Types: `ImageSourceData`, `StaticImageData`, `DynamicImageData`

### ContentFittedStack (`@swiftpost/elysium/ui/ContentFittedStack`)

Layout component for sections that need constrained, centered content within a full-width container.

```tsx
interface Props extends Exclude<StackProps, 'maxWidth' | 'width'> {
  contentMaxWidth: StackProps['maxWidth'];  // max width of inner content
  slotProps?: {
    container?: StackProps;  // props for inner content Stack
  };
  slots?: {
    container?: React.FC<StackProps>;  // override inner component
  };
}
```

```tsx
import ContentFittedStack from '@swiftpost/elysium/ui/ContentFittedStack';

<ContentFittedStack
  component="footer"
  contentMaxWidth="lg"
  minHeight={staticTheme.spacing(6)}
  slotProps={{
    container: { sx: { backgroundColor: 'grey.100' } }
  }}
>
  <Text>Footer content</Text>
</ContentFittedStack>
```

---

## Layout Components

### StackLayout (`@swiftpost/elysium/layouts/StackLayout`)

Full-height stack layout with optional footer. Uses the Slots pattern. Wrapped in `memo`.

```tsx
interface SlotProps {
  mainContainer: {
    children: React.ReactNode;
    sx?: SxProps;
  };
  footerContainer?: {
    children: React.ReactNode;
    sx?: SxProps;
  };
}

interface Props {
  slots?: Partial<InferSlotsFromSlotProps<SlotProps>>;
  slotProps: SlotProps;
  sx?: SxProps;
}
```

CSS class names: `stack-layout`, `stack-layout-container`, `stack-layout-footer`.

---

## Core Providers

### AppRouterCacheProvider (`@swiftpost/elysium/core/AppRouterCacheProvider`)

Wraps MUI's Emotion cache provider for Next.js App Router. Sets cache key to `'elysium'` by default.

### ThemeProvider (`@swiftpost/elysium/core/ThemeProvider`)

`'use client'` wrapper around MUI's `ThemeProvider`. Accepts a `theme` object from `@swiftpost/elysium/themes/gamut`.

---

## Theme Configuration

### Runtime Theme (`@swiftpost/elysium/themes/gamut`)

`'use client'` — creates the full MUI theme.

- `theme` — Full `createTheme()` object
- `mainFont` — Roboto via `next/font/google` with CSS variable `--font-roboto`

### Static Theme (`@swiftpost/elysium/themes/gamut/static`)

SSR-safe theme values. Use `staticTheme` from `@/styles/staticTheme` in the main package (which wraps this).

```ts
const staticThemeOptions = {
  spacing: (factor: number) => `${0.5 * factor}rem`,
  breakpoints: {
    values: { xs: 340, sm: 600, md: 900, lg: 1200, xl: 1536 }
  },
  typography: {
    fontFamily: 'var(--font-roboto)'
  }
} as const;
```

- `spacing(2)` = `'1rem'`
- Use `staticTheme` to read values without `'use client'` or hook overhead.

---

## Hooks

| Hook | Import | Wraps |
|------|--------|-------|
| `useMediaQuery` | `@swiftpost/elysium/ui/useMediaQuery` | `@mui/material/useMediaQuery` |
| `useTheme` | `@swiftpost/elysium/ui/useTheme` | `@mui/material/styles` `useTheme` |
| `useThemeProps` | `@swiftpost/elysium/ui/useTheme` | `@mui/material/styles` `useThemeProps` |

---

## Types (`@swiftpost/elysium/ui/types`)

```tsx
import type { SxProps, Theme, SystemStyleObject, InferSlotsFromSlotProps, SxArray } from '@swiftpost/elysium/ui/types';
```

| Type | Purpose |
|------|---------|
| `SxProps` | Standard MUI sx prop type |
| `Theme` | MUI Theme type |
| `SystemStyleObject` | Single style object within an sx array |
| `SxArray<TTheme>` | `ReadonlyArray<SystemStyleObject \\| ((theme) => SystemStyleObject)>` |
| `InferSlotsFromSlotProps<T>` | Derives slot component types from a SlotProps interface |

---

## Style Utilities (`@swiftpost/elysium/utils/styles/sxProps`)

### `spreadSx(sx)`

Normalizes any `SxProps` value into a spreadable `SxArray`. Essential for safe style merging.

```tsx
import { spreadSx } from '@swiftpost/elysium/utils/styles/sxProps';

// Always merge sx with array syntax — never overwrite
sx={[{ display: 'flex' }, ...spreadSx(sx), ...spreadSx(slotProps.root.sx)]}
```

Handles: `undefined` → `[]`, single object → `[object]`, array → pass-through.

### `isSxArray(sx)`

Type guard that returns `true` if `sx` is an `SxArray`.

---

## Reusable Component Pattern (Slots)

When building reusable UI components, use the MUI 7 Slots & SlotProps pattern:

1. Define a `SlotProps` interface for each internal element
2. Main `Props` includes `slots?`, `slotProps`, and `sx?`
3. Use `spreadSx` for safe style merging — **never overwrite `sx`**
4. Define `const componentBaseName` (kebab-case) for CSS class targeting
5. Wrap in `memo`

```tsx
import type { InferSlotsFromSlotProps, SxProps } from '@swiftpost/elysium/ui/types';
import { spreadSx } from '@swiftpost/elysium/utils/styles/sxProps';
import Box from '@swiftpost/elysium/ui/base/Box';
import { memo } from 'react';

const componentBaseName = 'custom-card';

interface SlotProps {
  root: { children: React.ReactNode; sx?: SxProps };
  footer?: { children: React.ReactNode; sx?: SxProps };
}

interface Props {
  slots?: Partial<InferSlotsFromSlotProps<SlotProps>>;
  slotProps: SlotProps;
  sx?: SxProps;
}

const CustomCard: React.FC<Props> = ({ slots, slotProps, sx }) => {
  const Root = slots?.root ?? Box;
  const Footer = slots?.footer ?? Box;

  return (
    <Root
      className={componentBaseName}
      sx={[{ p: 2, borderRadius: 1 }, ...spreadSx(sx), ...spreadSx(slotProps.root.sx)]}
    >
      {slotProps.root.children}
      {slotProps.footer && (
        <Footer
          className={`${componentBaseName}-footer`}
          sx={[{ mt: 2 }, ...spreadSx(slotProps.footer.sx)]}
        >
          {slotProps.footer.children}
        </Footer>
      )}
    </Root>
  );
};

export type CustomCardProps = Props;
export default memo(CustomCard);
```

---

## Styling & Responsive Design

- **Mobile-first:** Define base styles for `xs`, override with breakpoints for larger screens.
  ```tsx
  sx={{ width: { xs: '100%', md: '50%' }, p: { xs: 1, md: 2 } }}
  ```
- **Use `staticTheme`** for values outside `'use client'` components.
- **Never overwrite `sx`.** Always merge using array syntax + `spreadSx`.
