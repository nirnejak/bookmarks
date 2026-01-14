# AGENTS.md

This file contains essential information for coding agents working in this repository. It includes build commands, testing procedures, and code style guidelines to ensure consistency and quality.

## Project Overview

This is a Next.js 16 application built with React 19, TypeScript, and Tailwind CSS 4. It uses Supabase as the backend for bookmark management and includes features like drag-and-drop reordering, metadata fetching, and clipboard operations.

## Build/Lint/Test Commands

### Development

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build for production
- `bun run start` - Start production server

### Code Quality

- `bun run lint` - Run ESLint with all rules
- `bun run format` - Format all files with Prettier
- `bun run type-check` - Check TypeScript types without emitting files

### Testing

**Note:** No test framework is currently configured in this project. When adding tests:

- Use Jest or Vitest for unit/integration tests
- Use React Testing Library for component testing
- Add test scripts to package.json
- Run single test: `bun run test -- <test-file-path>`
- Run all tests: `bun run test`
- Run tests in watch mode: `bun run test -- --watch`

### Pre-commit Hooks

- `bun run prepare` - Set up Husky pre-commit hooks
- Lint-staged automatically runs ESLint on staged TypeScript/JavaScript files

## Code Style Guidelines

### Language & Framework

- **TypeScript**: Strict mode enabled with `strictNullChecks`
- **React**: Use functional components with hooks
- **Next.js**: App router structure in `app/` directory
- **Styling**: Tailwind CSS with utility-first approach

### File Structure

```
├── app/                 # Next.js app router pages
├── components/          # React components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── @types/              # TypeScript type definitions
├── styles/              # Global styles
└── public/              # Static assets
```

### Naming Conventions

- **Components**: PascalCase (e.g., `BookmarkRow`, `UserProfile`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables/Functions**: camelCase
- **Types/Interfaces**: PascalCase with descriptive names
- **Constants**: UPPER_SNAKE_CASE
- **Directories**: lowercase with hyphens if needed

### Import Organization

```typescript
// 1. React imports
import * as React from "react"

// 2. External libraries (alphabetical)
import { motion } from "motion/react"
import { toast } from "sonner"

// 3. Internal imports (alphabetical, use @/ alias)
import BookmarkRow from "@/components/BookmarkRow"
import classNames from "@/utils/classNames"
```

### Component Patterns

```typescript
interface Props {
  // Define props interface
  title: string
  onClick?: () => void
}

const ComponentName: React.FC<Props> = ({ title, onClick }) => {
  // Component logic here
  return (
    <div>
      {/* JSX here */}
    </div>
  )
}

export default ComponentName
```

### Client Components

- Add `"use client"` directive at the top for components using browser APIs
- Keep server components as default when possible

### Hooks

- Custom hooks go in `hooks/` directory
- Follow `use*` naming convention
- Return cleanup functions when needed

### Utility Functions

- Pure functions in `utils/` directory
- Export as default for single functions
- Use named exports for multiple utilities from same file

### TypeScript Types

- Define interfaces for component props
- Use union types for variant props
- Avoid `any` type - use proper typing
- Leverage utility types where appropriate

### Error Handling

- Use try-catch for async operations
- Show user-friendly error messages with toast notifications
- Log errors to console for debugging
- Handle loading states appropriately

### State Management

- Use React hooks (`useState`, `useEffect`, `useReducer`)
- Supabase client for server state
- Local state for UI interactions

### Styling

- Use Tailwind utility classes
- Custom CSS in `styles/` directory
- Use `classNames` utility for conditional classes
- Follow mobile-first responsive design

### Animations

- Use Motion library for animations
- Keep animations subtle and performant
- Use spring animations for natural feel

### Accessibility

- Follow jsx-a11y ESLint rules
- Use semantic HTML elements
- Provide alt text for images
- Ensure keyboard navigation works

## Formatting Rules

### Prettier Configuration

- No semicolons
- Double quotes
- 2-space indentation
- Trailing commas (ES5 style)
- Unix line endings (LF)

### EditorConfig

- UTF-8 encoding
- 2-space indentation for JS/TS/JSON/CSS
- Final newline required
- Trim trailing whitespace

## Git Workflow

### Branching

- `master` - Main production branch
- Feature branches for new work
- Use descriptive branch names

### Commits

- Use conventional commit format when possible
- Run pre-commit hooks (linting, formatting)
- Keep commits focused and atomic

## Dependencies

### Runtime

- Next.js 16, React 19, TypeScript 5.9
- Supabase for backend/database
- Tailwind CSS 4 for styling
- Motion for animations
- Sonner for toast notifications

### Development

- ESLint with TypeScript, React, and accessibility rules
- Prettier with Tailwind plugin
- Husky + lint-staged for pre-commit hooks
- TypeScript for type checking

## Performance Considerations

- Use Next.js Image component for optimized images
- Implement proper loading states
- Avoid unnecessary re-renders
- Use React.memo for expensive components when needed
- Optimize bundle size by lazy loading

## Security

- Validate URLs before processing
- Sanitize user inputs
- Use environment variables for sensitive data
- Follow Next.js security best practices
- Keep dependencies updated

## Deployment

- Deploy to Vercel (configured in `.vercel/`)
- Build command: `bun run build`
- Output directory: `.next/`
- Environment variables required for Supabase

## Additional Notes

- Use Bun as the package manager
- Node.js version: 24.12.0 (managed by Volta)
- Follow existing patterns in the codebase
- Test thoroughly before committing
- Keep the codebase clean and well-documented</content>
  <parameter name="filePath">AGENTS.md
