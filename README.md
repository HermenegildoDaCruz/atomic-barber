# Atomic Barber

A modern, responsive barber shop website built with React and Vite. Showcasing hairstyles, pricing plans, products, and specialized programs with an elegant user interface.

## 🎯 Project Overview

**Atomic Barber** is a professional barber shop landing page and service platform that provides:
- Browse and favorite hairstyle options for adults and children
- Explore premium grooming products
- View subscription plans and membership options
- Discover specialized hair care programs
- Newsletter subscription functionality
- Responsive mobile-first design

## ✨ Features

### 🔌 Core Functionality
- **Hairstyle Gallery**: Browse adult and children hairstyles with pricing
- **Product Catalog**: View and explore grooming products (durags, brushes, pomades)
- **Subscription Plans**: Three-tier pricing plans (Basic, Premium, Elite) with detailed features
- **Hair Care Programs**: Specialized programs like "Waves in 2 Weeks" and "Rasta Maintenance"
- **Why Choose Us**: Showcase key business differentiators and values
- **Favorites System**: Save favorite hairstyles and products with persistent storage

### 💻 Technical Features
- **State Management**: Redux Toolkit for favorites management
- **Routing**: React Router v7 for navigation
- **Animations**: Smooth animations using Motion library
- **Responsive Design**: Mobile-first CSS with comprehensive media queries
- **Local Storage**: Persistent favorites using browser localStorage
- **Form Handling**: Newsletter signup with form validation
- **Responsive Navigation**: Toggle sidebar for mobile devices

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19.2.0 |
| **Build Tool** | Vite 7.2.4 |
| **State Management** | Redux Toolkit 2.11.2, React Redux 9.2.0 |
| **Routing** | React Router DOM 7.12.0 |
| **Animation** | Motion 12.24.7 |
| **Styling** | CSS3 (custom) |
| **Linting** | ESLint 9.39.1 |
| **Package Manager** | npm |

## 📁 Project Structure

```
atomic-barber/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Hero.jsx         # Hero section with CTA
│   │   ├── HairStylePrices.jsx    # Hairstyle gallery
│   │   ├── Products.jsx     # Product catalog
│   │   ├── PlansAndProgramms.jsx  # Plans & programs section
│   │   ├── Plans.jsx        # Pricing plans
│   │   ├── Programms.jsx    # Hair care programs
│   │   ├── WhyUs.jsx        # Why choose us section
│   │   ├── FavoriteList.jsx # Favorites management
│   │   ├── Nav.jsx          # Navigation bar
│   │   ├── SideBar.jsx      # Mobile sidebar
│   │   ├── Footer.jsx       # Footer section
│   │   └── ...other components
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx     # Main landing page
│   │   ├── ErrorPage.jsx    # Error page
│   │   └── layout/
│   │       └── RootLayout.jsx   # Root layout wrapper
│   ├── store/               # Redux store configuration
│   │   ├── store.js         # Store setup
│   │   └── Slices/
│   │       └── favoriteSlice.js  # Favorites reducer
│   ├── hooks/               # Custom React hooks
│   │   ├── useFavoriteItem.js    # Favorite item management
│   │   └── useBooleanHook.js     # Boolean state helper
│   ├── data/                # Static data files
│   │   ├── hairstyle-prices.js   # Hairstyle data
│   │   ├── products.js      # Product data
│   │   ├── plans.js         # Subscription plans
│   │   ├── programms.js     # Hair programs
│   │   └── why-us-data.js   # Why us section data
│   ├── assets/              # Images and media
│   │   ├── images/
│   │   │   ├── hairstyles/
│   │   │   ├── products/
│   │   │   └── programms-images/
│   │   └── logo.png
│   ├── css/                 # Stylesheets
│   │   ├── main.css         # Main styles
│   │   └── media-queries.css # Responsive breakpoints
│   ├── App.jsx              # Root app component
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd atomic-barber
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Lint code**
   ```bash
   npm run lint
   ```

## 📦 Available Scripts

| Command | Description |
|---------|-----------|
| `npm run dev` | Start development server with hot module reloading |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check code for linting errors |

## 🎨 Key Components

### HomePage
Main landing page that composes all major sections:
- Hero section with call-to-action
- Hairstyle pricing showcase
- Product catalog
- Plans and programs section
- Why choose us testimonials
- Newsletter signup form

### FavoriteList
Manages user's favorite hairstyles and products with:
- Add/remove favorite functionality
- Persistent storage in localStorage
- Redux state synchronization

### Navigation
- Responsive nav bar with logo
- Mobile sidebar toggle
- Smooth navigation between sections

### Data-Driven Sections
All major sections are built with data-driven architecture:
- Static data files in `src/data/`
- Reusable components for items
- Easy to update and maintain

## 🔐 State Management

The application uses **Redux Toolkit** for managing favorites:
- `favoriteSlice`: Handles adding/removing favorites
- Persists to localStorage on changes
- Syncs across browser tabs

### Redux Store Structure
```javascript
{
  favorites: {
    hairstyles: [],
    products: []
  }
}
```

## 📱 Responsive Design

The project includes comprehensive responsive breakpoints for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1440px and up)

## 🎬 Animations

Uses the **Motion** library for smooth animations:
- Fade-in animations on scroll
- Slide transitions
- Hover effects on interactive elements

## 📝 Features in Detail

### Pricing Plans
Three subscription tiers:
1. **Plano Básico** (R$30k/month): 3 haircuts + community access
2. **Plano Premium**: Enhanced features and support
3. **Plano Elite**: Full VIP experience

### Hair Programs
- Waves in 2 Weeks
- Rasta Maintenance
- Each with specific duration and pricing

### Why Choose Us
- Experienced professionals
- Personalized service
- Modern environment
- Quality and hygiene standards

## 🔄 (Dummy) Newsletter

Users can subscribe to newsletter through the footer with:
- Name and email validation
- Form submission handling
- Redirect after successful signup

## 🧹 Code Quality

- ESLint configuration for code consistency
- React hooks best practices
- Component-based architecture
- Separation of concerns with hooks and data files

## 📄 License

See [LICENSE](LICENSE) file for details

## 💡 Future Enhancements

Potential features for future releases:
- Online booking system
- User authentication
- Customer reviews and ratings
- Blog section
- Admin dashboard
- Payment integration
- Appointment notifications
- Gallery with before/after photos
