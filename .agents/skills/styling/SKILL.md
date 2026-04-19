---
name: styling
description: "General styling guidance. Use when: building UI, structuring reusable styling APIs, working with sx/styles, responsive rules, or slot-based composition patterns that can apply across projects."
---

# Styling

## Purpose

Capture general styling guidance that can transfer across projects. Use this skill for reusable composition patterns, responsive styling rules, and maintainable `sx` conventions that are not specific to SwiftPost packages.

## When to use this skill

 - Building reusable components with slot-based composition.
 - Working with `sx` props, style merging, or theme values.
 - Reviewing responsive layout rules and maintainable styling APIs.

## General Rules

- Keep styling APIs small and explicit.
- Favor composition over deeply nested overrides.
- Keep visual rules close to the component that owns them unless they are truly shared tokens.
- Prefer stable, intention-revealing class names and slot names over ad hoc selectors.

## Reusable Component Pattern (Slots)

When building reusable UI components, use the MUI 7 Slots & SlotProps pattern:

1. Define a `SlotProps` interface for each internal element
2. Main `Props` includes `slots?`, `slotProps`, and `sx?`
3. Use `spreadSx` for safe style merging — **never overwrite `sx`**
4. Define `const componentBaseName` (kebab-case) for CSS class targeting
5. Wrap in `memo`

```tsx
import { memo } from 'react';

const componentBaseName = 'custom-card';

interface SlotProps {
  root: { children: React.ReactNode; sx?: SxProps };
  footer?: { children: React.ReactNode; sx?: SxProps };
}

interface Props {
  slots?: {
    root?: React.ElementType;
    footer?: React.ElementType;
  };
  slotProps: SlotProps;
  sx?: unknown;
}

const CustomCard: React.FC<Props> = ({ slots, slotProps, sx }) => {
  const Root = slots?.root ?? 'div';
  const Footer = slots?.footer ?? 'div';

  return (
    <Root
      className={componentBaseName}
      data-sx={sx}
    >
      {slotProps.root.children}
      {slotProps.footer && (
        <Footer
          className={`${componentBaseName}-footer`}
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

Adapt the slot and style utilities to the UI layer used by the project. For SwiftPost's concrete implementation and package-specific imports, see the `swiftpost-elysium` skill.

---

## Styling & Responsive Design

- **Mobile-first:** Define base styles for `xs`, override with breakpoints for larger screens.
  ```tsx
  sx={{ width: { xs: '100%', md: '50%' }, p: { xs: 1, md: 2 } }}
  ```
- **Do not overwrite incoming styles blindly.** Merge or compose them using the project's chosen utility.
- **Use theme values consistently.** Whether the project uses CSS variables, design tokens, or a UI-library theme object, read from that source instead of repeating magic numbers.

## SwiftPost Note

If the task depends on `@swiftpost/elysium`, package-specific imports, Elysium wrappers, or `spreadSx`, load the `swiftpost-elysium` skill instead of treating those details as general styling guidance.
