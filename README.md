# Quantum Concierge Services - Professional Website

A modern, responsive website for Quantum Concierge Services, built with React.js and Tailwind CSS. This professional multi-page website showcases procurement solutions for government and commercial clients.

## 🌟 Features

- **6 Complete Pages**: Home, Services, Core Values, Team, Contact, About Us
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Modern UI**: Professional design with Tailwind CSS
- **React Router**: Seamless navigation between pages
- **Contact Form**: Mailto functionality for quote requests
- **Professional Components**: Reusable header, footer, and layout components

## 🛠️ Technology Stack

- **React.js** (Latest version via Vite)
- **Tailwind CSS** for styling
- **React Router DOM** for navigation
- **Vite** for fast development and building
- **PostCSS** for CSS processing

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd QMS-WEB
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

## 🚀 Deployment

### Netlify Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel Deployment
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/QMS-WEB",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Run: `npm run deploy`

## 📋 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   └── Layout.jsx      # Page layout wrapper
├── pages/              # Page components
│   ├── Home.jsx        # Homepage with hero section
│   ├── Services.jsx    # Services grid layout
│   ├── CoreValues.jsx  # Company values
│   ├── Team.jsx        # Team member profiles
│   ├── Contact.jsx     # Contact form & info
│   └── About.jsx       # Company information
├── assets/             # Static assets
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Key Features by Page

### Home Page
- Hero section with government procurement focus
- Call-to-action buttons
- Statistics and highlights
- Professional imagery placeholders

### Services Page
- Grid layout of 6 service categories
- Icons and detailed descriptions
- "Why Choose Us" section
- Service highlights

### Core Values Page
- Three main values: Integrity, Innovation, Customer-Centric
- Detailed explanations and key points
- Values in action examples

### Team Page
- Three team member profiles
- Contact information for each member
- Team expertise highlights
- Professional layout

### Contact Page
- Quote request form with mailto functionality
- Direct contact information
- Business hours
- Response time guarantees

### About Us Page
- Company story and mission
- Journey milestones
- Certifications and credentials
- Environmental commitment

## ✉️ Contact Form Integration

The contact form uses mailto functionality to open the user's default email client with pre-filled information:

- **Recipient**: joe@quantumsrv.com
- **Subject**: Auto-generated with requester name
- **Body**: Formatted with all form data

## 🎯 Team Information

- **Freddy Johnson** - CEO
- **Jack Baker** - Director of Operations (jack@quantumsrv.com)
- **Joe Root** - Manager Procurement (joe@quantumsrv.com, +1 859-287-2983)

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary to Quantum Concierge Services.

## 🆘 Support

For technical support or questions about the website, contact the development team or refer to the project documentation.

---

**Built with ❤️ for Quantum Concierge Services**
