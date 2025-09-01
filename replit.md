# Overview

This is a modern full-stack web application for a digital marketing agency called "Digital Tech Guides." The application features a React frontend with TypeScript and a Node.js/Express backend, designed to showcase digital marketing services, case studies, testimonials, and handle contact form submissions. The application uses a PostgreSQL database with Drizzle ORM for data management and implements a comprehensive UI component system using shadcn/ui components built on top of Radix UI primitives.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application is built with React and TypeScript, utilizing a component-based architecture with functional components and hooks. The application uses Wouter for lightweight client-side routing and TanStack Query for server state management and data fetching. The UI is built with a comprehensive design system using shadcn/ui components, which are customizable React components built on Radix UI primitives and styled with Tailwind CSS. The styling approach uses CSS custom properties for theming support with both light and dark mode capabilities.

## Backend Architecture
The server is implemented using Express.js with TypeScript, following RESTful API principles. The application uses a modular route structure with centralized error handling middleware. The server implements request/response logging middleware for debugging and monitoring purposes. The storage layer uses an interface-based design pattern with both in-memory storage (for development/testing) and database storage implementations, allowing for easy switching between storage backends.

## Database Schema
The application uses PostgreSQL as the primary database with Drizzle ORM for type-safe database operations. The schema includes four main entities: users (for potential admin functionality), contacts (for form submissions), case studies (for showcasing client work), and testimonials (for client feedback). All tables use UUID primary keys and include appropriate timestamps and metadata fields.

## State Management
Client-side state is managed using TanStack Query for server state, React's built-in useState and useContext for local component state, and React Hook Form with Zod validation for form state management. The application implements optimistic updates and proper cache invalidation strategies for a responsive user experience.

## UI/UX Design System
The application implements a comprehensive design system with consistent spacing, typography, and color schemes. Components are built using a variant-based approach with class-variance-authority for dynamic styling. The design supports responsive layouts with mobile-first principles and includes accessibility features through Radix UI primitives.

# External Dependencies

## Database Services
- **PostgreSQL**: Primary database using Neon Database serverless PostgreSQL
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect for database operations
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI and Styling
- **Radix UI**: Unstyled, accessible UI primitives for building the component system
- **Tailwind CSS**: Utility-first CSS framework for styling with custom design tokens
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind CSS

## Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Static type checking for both frontend and backend code
- **ESBuild**: Fast JavaScript bundler for production builds

## Form and Validation
- **React Hook Form**: Form state management with performance optimization
- **Zod**: TypeScript-first schema validation library
- **@hookform/resolvers**: Resolvers for integrating Zod with React Hook Form

## HTTP and API
- **TanStack Query**: Server state management, caching, and data fetching
- **Express.js**: Web server framework with middleware support for routing and request handling