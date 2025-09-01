# 🚀 Digital Tech Guides - Complete Digital Marketing Website

A modern, professional digital marketing agency website built with React, TypeScript, and Node.js. Features comprehensive service pages, case studies, testimonials, and a beautiful responsive design.

## ✨ Features

### 🎯 **Comprehensive Service Pages**
- **SEO Services**: Local SEO, E-commerce SEO, Enterprise SEO, YouTube SEO
- **Digital Marketing**: PPC Advertising, Social Media Marketing, Email Marketing
- **Web Development**: Custom websites, e-commerce solutions, mobile-first design
- **Content Marketing**: Blog writing, video content, infographics, strategy
- **Mobile Marketing**: App optimization, SMS campaigns, location-based targeting

### 🎨 **Modern Design & UX**
- Responsive design optimized for all devices
- Beautiful gradient backgrounds with SVG patterns
- Interactive navigation with services dropdown
- Hero sections with compelling imagery
- Professional pricing tables and feature cards

### 🔧 **Technical Features**
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form + Zod validation
- **Database**: PostgreSQL with Drizzle ORM

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/digital-tech-guides.git
   cd digital-tech-guides
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
digital-tech-guides/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and configurations
│   │   └── index.css      # Global styles
│   ├── index.html         # HTML entry point
│   └── vite.config.ts     # Vite configuration
├── server/                 # Node.js backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Database operations
├── shared/                 # Shared types and schemas
│   └── schema.ts          # TypeScript schemas
└── package.json            # Project dependencies
```

## 🎯 Available Services

### **SEO Services**
- **Local SEO** (`/local-seo`) - Dominate local search results
- **E-commerce SEO** (`/ecommerce-seo`) - Optimize online stores
- **Enterprise SEO** (`/enterprise-seo`) - Scale large organizations
- **YouTube SEO** (`/youtube-seo`) - Video optimization

### **Digital Marketing**
- **PPC Advertising** (`/ppc-advertising`) - Google Ads & social campaigns
- **Social Media Marketing** (`/social-media-marketing`) - Platform management
- **Email Marketing** (`/email-marketing`) - Campaign automation
- **Content Marketing** (`/content-marketing`) - Strategic content creation
- **Mobile Marketing** (`/mobile-marketing`) - App & mobile optimization

### **Web Development**
- **Web Development** (`/web-development`) - Custom websites & applications

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Backend only
npm run server       # Start backend server only

# Frontend only
npm run client       # Start frontend dev server only
```

### Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui + Radix UI primitives
- **Routing**: Wouter for lightweight routing
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Icons**: Lucide React icon library

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradients (#3B82F6 to #8B5CF6)
- **Secondary**: Green, Orange, Purple accents
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold, large fonts for hierarchy
- **Body**: Readable sans-serif for content
- **Accents**: Custom fonts for branding

### Components
- **Cards**: Consistent spacing and shadows
- **Buttons**: Multiple variants with hover states
- **Navigation**: Responsive with mobile menu
- **Forms**: Clean, accessible input fields

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Responsive layouts for medium screens
- **Desktop**: Full-featured desktop experience
- **Touch Friendly**: Optimized for touch interactions

## 🔒 Security Features

- Input validation with Zod schemas
- SQL injection prevention with Drizzle ORM
- CORS configuration for API endpoints
- Environment variable protection

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
# Deploy dist/ folder to your hosting service
```

### Backend Deployment
```bash
npm run build:server
# Deploy server/ folder to your Node.js hosting
```

### Environment Variables
```bash
DATABASE_URL=postgresql://user:password@host:port/database
NODE_ENV=production
PORT=3000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [Digital Tech Guides](https://digitaltechguides.com)
- **Email**: business@digitaltechguides.com
- **Phone**: +1 (555) 123-4567

## 🙏 Acknowledgments

- **Design Inspiration**: SEO Discovery, Woodbox Digital, Solutions 1313, Creative Peppers
- **UI Components**: shadcn/ui and Radix UI
- **Icons**: Lucide React
- **Styling**: Tailwind CSS

---

**Built with ❤️ by Digital Tech Guides Team**
# Updated Mon Sep  1 14:19:24 IST 2025
