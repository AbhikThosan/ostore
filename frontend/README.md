```
frontend/
├── public/
│   ├── index.html              # Main HTML template
│   ├── favicon.ico             # Site favicon
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots file
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Footer.module.css
│   │   │   │   └── index.ts
│   │   │   ├── LoadingSpinner/
│   │   │   │   ├── LoadingSpinner.tsx
│   │   │   │   ├── LoadingSpinner.module.css
│   │   │   │   └── index.ts
│   │   │   └── ErrorBoundary/
│   │   │       ├── ErrorBoundary.tsx
│   │   │       ├── ErrorBoundary.module.css
│   │   │       └── index.ts
│   │   ├── product/
│   │   │   ├── ProductCard/
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductCard.module.css
│   │   │   │   └── index.ts
│   │   │   ├── ProductList/
│   │   │   │   ├── ProductList.tsx
│   │   │   │   ├── ProductList.module.css
│   │   │   │   └── index.ts
│   │   │   ├── ProductDetail/
│   │   │   │   ├── ProductDetail.tsx
│   │   │   │   ├── ProductDetail.module.css
│   │   │   │   └── index.ts
│   │   │   └── ProductGallery/
│   │   │       ├── ProductGallery.tsx
│   │   │       ├── ProductGallery.module.css
│   │   │       └── index.ts
│   │   ├── cart/
│   │   │   ├── CartSidebar/
│   │   │   │   ├── CartSidebar.tsx
│   │   │   │   ├── CartSidebar.module.css
│   │   │   │   └── index.ts
│   │   │   ├── CartItem/
│   │   │   │   ├── CartItem.tsx
│   │   │   │   ├── CartItem.module.css
│   │   │   │   └── index.ts
│   │   │   ├── CartSummary/
│   │   │   │   ├── CartSummary.tsx
│   │   │   │   ├── CartSummary.module.css
│   │   │   │   └── index.ts
│   │   │   └── QuantitySelector/
│   │   │       ├── QuantitySelector.tsx
│   │   │       ├── QuantitySelector.module.css
│   │   │       └── index.ts
│   │   ├── checkout/
│   │   │   ├── CheckoutModal/
│   │   │   │   ├── CheckoutModal.tsx
│   │   │   │   ├── CheckoutModal.module.css
│   │   │   │   └── index.ts
│   │   │   ├── CheckoutForm/
│   │   │   │   ├── CheckoutForm.tsx
│   │   │   │   ├── CheckoutForm.module.css
│   │   │   │   └── index.ts
│   │   │   └── OrderSummary/
│   │   │       ├── OrderSummary.tsx
│   │   │       ├── OrderSummary.module.css
│   │   │       └── index.ts
│   │   └── ui/
│   │       ├── Button/
│   │       │   ├── Button.tsx
│   │       │   ├── Button.module.css
│   │       │   └── index.ts
│   │       ├── Input/
│   │       │   ├── Input.tsx
│   │       │   ├── Input.module.css
│   │       │   └── index.ts
│   │       ├── Modal/
│   │       │   ├── Modal.tsx
│   │       │   ├── Modal.module.css
│   │       │   └── index.ts
│   │       └── Card/
│   │           ├── Card.tsx
│   │           ├── Card.module.css
│   │           └── index.ts
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   ├── Home.module.css
│   │   │   └── index.ts
│   │   ├── ProductPage/
│   │   │   ├── ProductPage.tsx
│   │   │   ├── ProductPage.module.css
│   │   │   └── index.ts
│   │   ├── NotFound/
│   │   │   ├── NotFound.tsx
│   │   │   ├── NotFound.module.css
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useCart.ts              # Custom hook for cart operations
│   │   ├── useProducts.ts          # Custom hook for product data
│   │   ├── useLocalStorage.ts      # Custom hook for localStorage
│   │   ├── useDebounce.ts          # Custom hook for debouncing
│   │   └── index.ts
│   ├── services/
│   │   ├── api/
│   │   │   ├── client.ts           # Axios configuration
│   │   │   ├── products.ts         # Product API endpoints
│   │   │   ├── orders.ts           # Order API endpoints
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── store/
│   │   ├── slices/
│   │   │   ├── cartSlice.ts        # Cart state management
│   │   │   ├── productSlice.ts     # Product state management
│   │   │   └── uiSlice.ts          # UI state management
│   │   ├── index.ts                # Store configuration
│   │   └── middleware.ts           # Custom middleware
│   ├── types/
│   │   ├── product.ts              # Product type definitions
│   │   ├── cart.ts                 # Cart type definitions
│   │   ├── order.ts                # Order type definitions
│   │   ├── api.ts                  # API response types
│   │   └── index.ts
│   ├── utils/
│   │   ├── constants.ts            # App constants
│   │   ├── helpers.ts              # Utility functions
│   │   ├── formatters.ts           # Format functions (currency, date)
│   │   ├── validators.ts           # Form validation functions
│   │   └── index.ts
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   ├── placeholder.jpg
│   │   │   └── icons/
│   │   │       ├── cart.svg
│   │   │       ├── search.svg
│   │   │       └── heart.svg
│   │   └── fonts/
│   │       └── custom-font.woff2
│   ├── styles/
│   │   ├── globals.css             # Global styles
│   │   ├── variables.css           # CSS variables
│   │   ├── components.css          # Component-specific styles
│   │   └── utilities.css           # Utility classes
│   ├── layouts/
│   │   ├── MainLayout/
│   │   │   ├── MainLayout.tsx
│   │   │   ├── MainLayout.module.css
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── context/
│   │   ├── CartContext.tsx         # Cart context provider
│   │   ├── ThemeContext.tsx        # Theme context provider
│   │   └── index.ts
│   ├── App.tsx                     # Main App component
│   ├── App.css                     # App-specific styles
│   ├── index.tsx                   # Entry point
│   ├── index.css                   # Global styles import
│   └── setupTests.ts               # Test configuration
├── .env                            # Environment variables
├── .env.example                    # Environment variables example
├── .gitignore                      # Git ignore file
├── package.json                    # Project dependencies
├── package-lock.json               # Lock file
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── craco.config.js                 # CRACO configuration (if needed)
└── README.md                       # Frontend documentation
```
