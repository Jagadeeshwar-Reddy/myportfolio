# Jagadeeshwar Reddy - Senior iOS Developer Portfolio

Showcasing 13+ years of iOS development experience with a focus on Swift, SwiftUI, and enterprise-grade applications.

## 🚀 Features

- **Modern Design**: Clean, professional interface with developer-friendly typography
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Dark/Light Theme Ready**: Prepared for theme switching functionality

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: Framer Motion
- **Icons**: Heroicons, React Icons
- **Fonts**: Inter (UI), JetBrains Mono (Code)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
myportfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── common/         # Common UI components
│   │   ├── sections/       # Page sections
│   │   └── ...
│   ├── pages/             # Page components
│   ├── layouts/           # Layout components
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── constants/         # App constants
│   └── assets/            # Images, fonts, etc.
├── dist/                  # Build output
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v19.6.1 or higher)
- npm (v9.4.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jagadeeshwar-reddy/myportfolio.git
   cd myportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    light: '#60A5FA',
    DEFAULT: '#3B82F6',
    dark: '#2563EB',
  },
  // ... more colors
}
```

### Fonts
Fonts are configured in `tailwind.config.js` and loaded in `index.html`:
- **Inter**: General UI text
- **JetBrains Mono**: Code and headings

### Content
Update content in the respective component files:
- `src/pages/Home.jsx` - Home page content
- `src/pages/About.jsx` - About page content
- `src/pages/Portfolio.jsx` - Portfolio projects
- `src/pages/Contact.jsx` - Contact information

## 📱 Pages

### Home (`/`)
- Hero section with introduction
- Call-to-action buttons
- Professional overview

### About (`/about`)
- Detailed background
- Skills and expertise
- Professional experience

### Portfolio (`/portfolio`)
- Project showcase
- Case studies
- Technology stack used

### Contact (`/contact`)
- Contact form
- Social media links
- Professional information

## 🚀 Deployment

### GitHub Pages
The site is automatically deployed to GitHub Pages:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Access your site**
   Visit: `https://jagadeeshwar-reddy.github.io/myportfolio/`

### Manual Deployment
For other hosting platforms:

1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider

## 🔧 Configuration

### Vite Configuration
- Base URL configured for GitHub Pages
- Asset optimization
- Development server settings

### Tailwind Configuration
- Custom color palette
- Typography settings
- Animation keyframes
- Responsive breakpoints

### PostCSS Configuration
- Tailwind CSS processing
- Autoprefixer for browser compatibility

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: Fast initial load with code splitting
- **SEO**: Proper meta tags and semantic structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jagadeeshwar Reddy**
- LinkedIn: [jagadeeshwar-reddy-mudiyala-4786b83a](https://www.linkedin.com/in/jagadeeshwar-reddy-mudiyala-4786b83a/)
- GitHub: [jagadeeshwar-reddy](https://github.com/jagadeeshwar-reddy)
- Email: jagadeeshwar.reddy@live.in

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Heroicons](https://heroicons.com/) - Icon library

---

⭐ If you find this portfolio helpful, please give it a star!
