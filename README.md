# Stake - Investment App

A mobile-first investment tracking application built with Ionic Angular, featuring stock portfolios, trending stocks, and market discovery tools.

## 🎨 Design Assumptions

- **Mobile-First Approach**: The application is designed exclusively for mobile devices and not optimized for desktop viewing
- **Ionic Framework**: Leverages Ionic components for consistent mobile UI/UX patterns
- **Figma-Based Styling**: Global styles and typography are derived from Figma designs rather than a comprehensive design system
- **Responsive Grid System**: Uses Ionic's grid system for consistent layout across different screen sizes

## 🏗️ Component Architecture

### Shared Components Structure
```
src/app/
├── components/
│   ├── stock-card/           # Reusable stock display component
│   ├── type/                 # (Planned) Stock type component
|   |── search/               # (Planned) Search component
|   |── order-form/           # (Planned) Order form modal component
│   └── instrument/           # (Planned) Financial instrument component
├── tabs/
│   ├── invest/              # Investment portfolio tab
│   └── discover/            # Market discovery tab
└── mock/                    # Mock data sources
```

### Component Design Principles
- **Reusability**: Components like `stock-card` are designed to be used across multiple pages
- **Modularity**: Each component is self-contained with its own TypeScript, HTML, and SCSS files
- **Scalability**: Component structure supports easy addition of new features and design updates
- **Data Binding**: Components accept input properties for dynamic content rendering

## 📊 Data Architecture

### Mock Data Sources
The application uses three primary data sources located in the `mock/` folder:

#### 1. Holdings (`mock/holdings.ts`)
```typescript
{
  total: 8036,
  stocks: [
    { name: 'AAPL', units: 100, price: 105.44, change: 22.90 },
    // ... additional holdings
  ]
}
```

#### 2. Trending Stocks (`mock/trending.ts`)
```typescript
[
  {
    name: 'Figma Inc.',
    type: 'Stock',
    shortcode: 'FIG',
    stockPrice: '$105.44',
    logoUrl: '/assets/logos/figma.jpg'
  }
  // ... additional trending stocks
]
```

#### 3. Top 3 Volume (`mock/top3.ts`)
```typescript
// High-volume trading stocks data
[
    {
        name: 'Figma Inc.',
        type: 'Stock',
        shortcode: 'FIG',
        stockPrice: '$105.44',
        logoUrl: '/assets/logos/figma.jpg',
        data1: '$36.9M',
        data2: '$1.2B',
        data3: '$30.32',
    },
];
```

### Data Integration
- **Component Binding**: Data is imported and bound to components using Angular's property binding
- **Dynamic Rendering**: Components use `*ngFor` directives to render lists of data
- **Future API Ready**: Mock structure is designed to easily transition to real API endpoints

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   ionic serve
   ```

3. **Build for Production**
   ```bash
   ionic build
   ```