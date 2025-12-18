# How I Created the PC Store Project

## Project Overview
PC Store (new-pc-store) is an Angular e-commerce application built to showcase computer products with a modern, responsive interface. The application allows users to browse PC products, view details, and add items to a shopping cart.

## Initial Setup

### 1. Creating the Angular Application
I started by creating a new Angular application using the Angular CLI:

```bash
ng new pc-store --standalone --routing --style=css
cd pc-store
```

Configuration choices:
- **Standalone components**: Yes (using modern Angular standalone API)
- **Routing**: Yes (for navigation between pages)
- **Styling**: CSS

### 2. Installing Bootstrap
To create a professional and responsive UI, I added Bootstrap:

```bash
npm install bootstrap@^5.3.8
```

Then updated the `angular.json` to include Bootstrap styles in the test configuration and added Bootstrap to the global styles.

## Project Architecture

### 3. Creating the Data Model
I created the Product interface to define the structure of PC products:

**File**: `src/app/models/product.model.ts`
```bash
ng generate interface models/product --type=model
```

The Product interface includes:
- `id`: Unique identifier
- `name`: Product name
- `description`: Detailed description
- `price`: Price in euros
- `imageUrl`: Product image URL

### 4. Creating the Product Service
I created a service to manage product data:

```bash
ng generate service services/product
```

**File**: `src/app/services/product.service.ts`

The service provides:
- `getProducts()`: Returns all products as an Observable
- `getProductById(id)`: Returns a specific product by ID
- Initial product catalog with 3 PC configurations:
  - Gaming PC RTX 4070 (€1,499)
  - Office PC Intel i5 (€699)
  - Ultra Portable PC (€899)

### 5. Creating Components

#### Navigation Bar Component
```bash
ng generate component components/navbar --standalone
```

**File**: `src/app/components/navbar/navbar.component.ts`

Features:
- Bootstrap navbar with primary theme
- Logo with rounded profile image
- Link to home page
- Responsive design

#### Product List Component
```bash
ng generate component components/product-list --standalone
```

**File**: `src/app/components/product-list/product-list.component.ts`

Features:
- Grid layout displaying all products (3 columns)
- Bootstrap cards with product images
- Price formatting with Angular CurrencyPipe (EUR)
- "View Details" button linking to detail page
- Dependency injection using the modern `inject()` function

#### Product Detail Component
```bash
ng generate component components/product-detail --standalone
```

**File**: `src/app/components/product-detail/product-detail.component.ts`

Features:
- Two-column layout (image + details)
- Product information display
- "Add to Cart" functionality with alert confirmation
- "Back to Shop" navigation button
- Route parameter handling to get product ID
- Error handling for non-existent products

### 6. Configuring Routes
I configured the application routing in `src/app/app.routes.ts`:

```typescript
export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: '**', redirectTo: '' }
];
```

Routes:
- `/` - Home page with product list
- `/product/:id` - Product detail page
- `**` - Wildcard route redirecting to home

### 7. Main Application Component
Updated `src/app/app.component.ts` to include:
- Navigation bar
- Router outlet for content
- Footer with copyright
- Personal badge showcasing the developer (Youssef NOUIRA)

## Technologies Used

### Core Dependencies
- **Angular 20.1.0**: Latest Angular framework with standalone components
- **RxJS 7.8.0**: Reactive programming with Observables
- **Bootstrap 5.3.8**: UI framework for responsive design
- **TypeScript 5.8.2**: Type-safe JavaScript superset

### Development Tools
- **Angular CLI 20.1.4**: Command-line tool for project scaffolding
- **Karma & Jasmine**: Testing framework
- **Angular Build System**: Modern application builder

## Key Features Implemented

1. **Modern Angular Architecture**
   - Standalone components (no NgModules)
   - Dependency injection with `inject()` function
   - Signal-based components ready for future Angular features

2. **Responsive Design**
   - Bootstrap grid system
   - Mobile-first approach
   - Professional card layouts

3. **Routing & Navigation**
   - Client-side routing with Angular Router
   - Dynamic route parameters
   - Wildcard route handling

4. **Data Management**
   - Service-based architecture
   - Observable patterns for async data
   - Type-safe models with TypeScript interfaces

5. **User Interface**
   - Product catalog with grid layout
   - Detailed product views
   - Shopping cart interaction (add to cart)
   - Professional navigation bar
   - Branded footer with developer badge

## Project Structure

```
pc-store/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── product-list/
│   │   │   └── product-detail/
│   │   ├── models/
│   │   │   └── product.model.ts
│   │   ├── services/
│   │   │   └── product.service.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Running the Project

### Development Server
```bash
npm start
# or
ng serve
```
Navigate to `http://localhost:4200/`

### Build for Production
```bash
ng build
```
Output will be in the `dist/` directory

### Running Tests
```bash
ng test
```

## Future Enhancements

Potential features to add:
- Shopping cart with persistent state
- Product search and filtering
- User authentication
- Backend API integration
- Payment processing
- Product reviews and ratings
- Admin dashboard for product management

## Credits

**Developer**: Youssef NOUIRA  
**Role**: Web Developer & Angular Enthusiast  
**Framework**: Angular 20.1.0  
**Year**: 2025
