# LoanBazar Frontend

A modern React.js application for loan comparison and application services.

## Features

- **Loan Services:** Personal, Business, Home, and Doctor loans
- **Interactive Calculator:** EMI calculation with dynamic inputs
- **Contact System:** Integrated contact form with backend API
- **Admin Panel:** Contact management dashboard
- **Responsive Design:** Mobile-first approach with Bootstrap
- **SEO Optimized:** Meta tags, structured data, and sitemap
- **Performance Optimized:** Image optimization and lazy loading

## Tech Stack

- **Frontend:** React 18, Bootstrap 5, AOS animations
- **Routing:** React Router DOM
- **Styling:** CSS3, Bootstrap, Custom CSS
- **Icons:** Font Awesome
- **Build Tool:** Create React App

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/loanbazar-frontend.git

# Navigate to project directory
cd loanbazar-frontend

# Install dependencies
npm install

# Start development server
npm start
```

## Environment Configuration

The app automatically detects environment and uses appropriate API endpoints:

- **Development:** `http://localhost:5000`
- **Production:** `https://api.loanbaazar.in`

## Build for Production

```bash
# Create production build
npm run build

# The build folder contains optimized files ready for deployment
```

## Project Structure

```
src/
├── component/          # React components
│   ├── navv.jsx       # Navigation component
│   ├── homepage.jsx   # Hero section
│   ├── services.jsx   # Loan services
│   ├── loancalculator.jsx
│   ├── contactus.jsx  # Contact form
│   └── ...
├── config/
│   └── api.js         # API configuration
├── index.css          # Global styles
└── App.js             # Main app component
```

## Deployment

This project is configured for deployment on Hostinger with domain `loanbaazar.in`.

See `HOSTINGER_DEPLOYMENT.md` for detailed deployment instructions.

## API Integration

The frontend connects to a Node.js backend API for:
- Contact form submissions
- Admin authentication
- Data management

## Responsive Design

- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** 1024px+

## Color Scheme

- **Primary:** #2a2a72 (Dark Blue)
- **Accent:** #f4c542 (Yellow)
- **Text:** #333333
- **Background:** #ffffff

## License

This project is licensed under the MIT License.

## Author

**Shubham Silyan**
- Email: loanbazar76@gmail.com
- Phone: +91 7678507025

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
