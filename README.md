# LANDAS - React Frontend Application

A modern, responsive React frontend application built with TypeScript, featuring a clean Korean login interface.

## 🚀 Tech Stack

### Core Dependencies

- **React** `^18.3.1` - UI library with hooks
- **TypeScript** `^5.0.0` - Type safety and development experience
- **Vite** `^7.0.4` - Fast build tool and dev server
- **React Router DOM** `^6.30.1` - Client-side routing
- **Tailwind CSS** `^2.6.0` - Utility-first CSS framework
- **Zustand** `^5.0.6` - Lightweight state management

### Utility Libraries

- **clsx** `^2.1.1` - Conditional class names utility
- **tailwind-merge** `^3.3.1` - Tailwind class conflict resolution

## 🏗️ Architecture

### Feature-Based + Atomic Design Structure

```
src/
├── features/              # Business logic features
│   └── auth/             # Authentication feature
│       ├── components/
│       │   ├── atoms/    # Basic UI elements
│       │   ├── molecules/# Component combinations
│       │   └── organisms/# Complex UI sections
│       ├── hooks/        # Feature-specific hooks
│       ├── types/        # TypeScript definitions
│       └── utils/        # Feature utilities
│
├── pages/                # Route-level components
├── routes/               # Routing configuration
└── shared/               # Shared resources
    ├── components/       # Reusable UI components
    ├── layouts/          # Page layout components
    ├── stores/           # Global state management
    ├── types/            # Shared TypeScript types
    └── utils/            # Shared utilities
```

## 🎨 Design System

### Color Palette

- **Primary**: `#F2B705` (LANDAS brand yellow/orange)
- **Background**: `#F5F3EF` (Warm cream)
- **Foreground**: Dark gray text
- **Input**: White with gray borders
- **Error**: Red for validation messages

### Typography

- **Font**: Pretendard (Korean web font)
- **Variants**: Logo, headings (h1-h6), body text, captions

### Components

- **Atomic**: BasicButton, BasicInput, Text
- **Molecular**: FormInput (label + input + validation)
- **Organism**: LoginForm (complete auth interface)

## 🔧 Key Features

### Authentication System

- **Login Form**: ID/password with real-time validation
- **Password Toggle**: Show/hide password visibility
- **Remember Me**: Checkbox for saving credentials
- **Form Validation**: Korean error messages
- **Loading States**: Button disabled during API calls
- **Route Protection**: Authenticated route guards

### State Management (Zustand)

- **Form Data**: Login credentials
- **Validation Errors**: Real-time field validation
- **Loading States**: UI feedback during operations
- **Authentication**: Login/logout state persistence

### Responsive Design

- **Mobile-First**: Optimized for all screen sizes
- **Flexible Layout**: Container-based responsive design
- **Touch-Friendly**: Proper touch targets and spacing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd landas-frontend

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Available Scripts

```bash
yarn dev        # Start development server
yarn build      # Build for production
yarn preview    # Preview production build
yarn lint       # Run ESLint
yarn type-check # Run TypeScript checker
```

## 📱 Usage

### Demo Credentials

- **ID**: `IDIDID222`
- **Password**: `Password123!`

### Form Validation Rules

- **ID**: Minimum 3 characters, required
- **Password**: 8-16 characters, must include uppercase, lowercase, numbers, and special characters

### Navigation Flow

**Login Page** (`/`) - Default route with login form
**Dashboard** (`/dashboard`) - Protected route after successful login
**404 Page** - Fallback for undefined routes

## 🧭 Navigation Routes

The application uses **React Router DOM v6** for client-side routing.

### Navigation Items

````ts
const navItems = [
  { label: "SS", href: "/products/ss" },
  { label: "FW", href: "/products/fw" },
  { label: "PANTS", href: "/products/pants" },
  { label: "T-Shirt", href: "/products/tshirt" },
  { label: "SALE", href: "/products/sale" },
  { label: "COLLECTION", href: "/products/collection" },
  { label: "COMMUNITY", href: "/products/community" },
];
Route Structure
/products/ss – Spring/Summer product list

/products/fw – Fall/Winter product list

/products/pants – Pants category

/products/tshirt – T-Shirt category

/products/sale – Sale products

/products/collection – Special collections

/products/community – Community page


## 🛠️ Development Guidelines

### Code Conventions

- **Components**: PascalCase (`LoginForm.tsx`)
- **Hooks**: camelCase with `use` prefix (`useAuthValidation.ts`)
- **Types**: PascalCase with descriptive names (`LoginFormData`)
- **Folders**: camelCase (`authStore.ts`)

### Component Structure

- **Atomic Design**: Atoms → Molecules → Organisms → Pages
- **TypeScript**: Strict typing for all props and state
- **Tailwind Only**: No inline styles or external UI libraries
- **Accessibility**: Proper labels, focus states, and ARIA attributes

### State Management

- **Zustand**: Lightweight stores for global state
- **Local State**: React hooks for component-specific state
- **Form Handling**: Controlled components with validation

## 🔒 Security Features

- **Input Validation**: Client-side validation with TypeScript
- **Protected Routes**: Authentication guards
- **Error Handling**: Graceful error boundaries and user feedback
- **XSS Prevention**: Proper input sanitization

## 🌍 Internationalization

- **Korean UI**: All interface text in Korean
- **Pretendard Font**: Optimized Korean typography
- **Cultural UX**: Korean web design patterns and expectations

## 📊 Performance

- **Tree Shaking**: Optimized bundle with Vite
- **Font Loading**: Efficient web font delivery
- **Minimal Dependencies**: Lightweight architecture

## 🚀 Deployment

Ready for deployment to any static hosting service (Vercel, Netlify, etc.):

```bash
yarn build
# Deploy the `dist` folder
````

---
