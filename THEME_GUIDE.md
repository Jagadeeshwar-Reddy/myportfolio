# Theme System Guide

This portfolio uses a centralized theming system that makes it easy to change colors and styles from one place.

## 🎨 Current Theme

The portfolio currently uses a **Leaf Green** theme with natural, professional colors and **Inter** font family.

## 📁 Theme Files

- `src/styles/index.css` - Main CSS with CSS custom properties
- `src/constants/themes.js` - Theme configuration and helper functions
- `src/components/ThemeSwitcher.jsx` - Interactive theme switcher component
- `src/components/FontSwitcher.jsx` - Interactive font switcher component

## 🔧 How to Change Themes

### Method 1: Quick Theme Switch (Recommended)

1. **Open the theme switcher** in the navigation bar (desktop only)
2. **Select a theme** from the dropdown
3. **See changes instantly** across the entire site

### Method 2: Quick Font Switch

1. **Open the font switcher** in the navigation bar (desktop only)
2. **Select a font** from the dropdown
3. **See changes instantly** across the entire site

### Method 3: CSS Custom Properties

1. **Edit `src/styles/index.css`**
2. **Find the `:root` section** at the top
3. **Update the CSS custom properties**:

```css
:root {
    --color-primary: #your-color;
    --color-primary-dark: #your-darker-color;
    --color-primary-light: #your-lighter-color;
    --color-secondary: #your-secondary-color;
    /* ... other properties */
    
    /* Font Configuration */
    --font-primary: 'Your Font', sans-serif;
    --font-display: 'Your Display Font', sans-serif;
    --font-mono: 'Your Mono Font', monospace;
    --font-secondary: 'Your Secondary Font', sans-serif;
}
```

### Method 4: Alternative Themes

1. **Edit `src/styles/index.css`**
2. **Uncomment one of the alternative themes** (Blue, Purple, etc.)
3. **Comment out the current theme**

### Method 5: Alternative Fonts

1. **Edit `src/styles/index.css`**
2. **Uncomment one of the alternative font configurations**
3. **Comment out the current font configuration**

## 🎯 Available Themes

### 1. Leaf Green (Current)
- **Primary**: `#16a34a`
- **Description**: Natural and professional
- **Best for**: Professional portfolios, nature-inspired designs

### 2. Ocean Blue
- **Primary**: `#3b82f6`
- **Description**: Professional and trustworthy
- **Best for**: Corporate portfolios, tech companies

### 3. Royal Purple
- **Primary**: `#8b5cf6`
- **Description**: Creative and modern
- **Best for**: Creative portfolios, design agencies

### 4. Sunset Orange
- **Primary**: `#f97316`
- **Description**: Warm and energetic
- **Best for**: Personal brands, creative portfolios

### 5. Ocean Teal
- **Primary**: `#0d9488`
- **Description**: Calm and sophisticated
- **Best for**: Minimalist designs, professional services

## 🔤 Available Fonts

### 1. Inter (Current)
- **Description**: Modern, clean sans-serif font
- **Best for**: Professional websites, tech companies
- **Characteristics**: Excellent readability, modern design

### 2. Poppins
- **Description**: Geometric sans-serif with personality
- **Best for**: Creative portfolios, modern designs
- **Characteristics**: Friendly, geometric shapes

### 3. Roboto
- **Description**: Clean and readable Google font
- **Best for**: General purpose, content-heavy sites
- **Characteristics**: Highly readable, neutral design

### 4. Montserrat
- **Description**: Elegant and modern sans-serif
- **Best for**: Luxury brands, elegant designs
- **Characteristics**: Sophisticated, clean lines

### 5. Open Sans
- **Description**: Humanist sans-serif font
- **Best for**: Content-focused sites, readability
- **Characteristics**: Excellent readability, friendly

### 6. Lato
- **Description**: Balanced and friendly sans-serif
- **Best for**: General purpose, approachable designs
- **Characteristics**: Warm, balanced proportions

## 🎨 CSS Custom Properties

The theme system uses CSS custom properties for consistent styling:

### Primary Colors
```css
--color-primary: #16a34a;        /* Main brand color */
--color-primary-dark: #15803d;   /* Darker shade for hover states */
--color-primary-light: #22c55e;  /* Lighter shade for highlights */
--color-secondary: #059669;      /* Secondary brand color */
--color-accent: #f59e0b;         /* Accent color for CTAs */
```

### Font Configuration
```css
--font-primary: 'Inter', sans-serif;           /* Main body font */
--font-display: 'Inter', sans-serif;           /* Headings and titles */
--font-mono: 'JetBrains Mono', monospace;      /* Code and monospace text */
--font-secondary: 'Inter', sans-serif;         /* Secondary text */
```

### Font Weights
```css
--font-weight-light: 300;        /* Light weight */
--font-weight-normal: 400;       /* Normal weight */
--font-weight-medium: 500;       /* Medium weight */
--font-weight-semibold: 600;     /* Semi-bold weight */
--font-weight-bold: 700;         /* Bold weight */
--font-weight-extrabold: 800;    /* Extra bold weight */
```

### Font Sizes
```css
--font-size-xs: 0.75rem;         /* 12px */
--font-size-sm: 0.875rem;        /* 14px */
--font-size-base: 1rem;          /* 16px */
--font-size-lg: 1.125rem;        /* 18px */
--font-size-xl: 1.25rem;         /* 20px */
--font-size-2xl: 1.5rem;         /* 24px */
--font-size-3xl: 1.875rem;       /* 30px */
--font-size-4xl: 2.25rem;        /* 36px */
--font-size-5xl: 3rem;           /* 48px */
--font-size-6xl: 3.75rem;        /* 60px */
--font-size-7xl: 4.5rem;         /* 72px */
```

### Line Heights
```css
--line-height-tight: 1.25;       /* Tight line spacing */
--line-height-normal: 1.5;       /* Normal line spacing */
--line-height-relaxed: 1.75;     /* Relaxed line spacing */
--line-height-loose: 2;          /* Loose line spacing */
```

### Letter Spacing
```css
--letter-spacing-tight: -0.025em;  /* Tight letter spacing */
--letter-spacing-normal: 0;        /* Normal letter spacing */
--letter-spacing-wide: 0.025em;    /* Wide letter spacing */
--letter-spacing-wider: 0.05em;    /* Wider letter spacing */
```

### Background Colors
```css
--color-bg-primary: #ffffff;     /* Main background */
--color-bg-secondary: #f0fdf4;   /* Secondary background */
--color-bg-tertiary: #ecfdf5;    /* Tertiary background */
```

### Surface Colors
```css
--color-surface: #f0fdf4;        /* Card backgrounds */
--color-surface-light: #ecfdf5;  /* Light card backgrounds */
--color-surface-card: #ffffff;   /* Card surfaces */
--color-surface-glass: rgba(255, 255, 255, 0.8); /* Glass effects */
```

### Text Colors
```css
--color-text-primary: #1e293b;   /* Main text */
--color-text-secondary: #475569; /* Secondary text */
--color-text-muted: #64748b;     /* Muted text */
--color-text-inverse: #ffffff;   /* Text on dark backgrounds */
```

### Border Colors
```css
--color-border: #dcfce7;         /* Main borders */
--color-border-light: #bbf7d0;   /* Light borders */
--color-border-dark: #86efac;    /* Dark borders */
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
--gradient-secondary: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%);
--gradient-accent: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-accent) 100%);
--gradient-bg: linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-bg-gradient-end) 100%);
```

### Shadows
```css
--shadow-color: rgba(22, 163, 74, 0.1);      /* Light shadows */
--shadow-color-lg: rgba(22, 163, 74, 0.15);  /* Large shadows */
```

## 🛠️ Utility Classes

The theme system provides utility classes for common styling:

### Buttons
```css
.btn-primary      /* Primary gradient button */
.btn-secondary    /* Secondary outline button */
.btn-outline      /* Outline button */
```

### Cards
```css
.card             /* Basic card with shadow */
.card-hover       /* Card with hover effects */
```

### Effects
```css
.glass            /* Glass morphism effect */
.glass-dark       /* Dark glass effect */
```

### Gradients
```css
.gradient-bg      /* Primary gradient background */
.gradient-bg-alt  /* Alternative gradient background */
.text-gradient    /* Gradient text */
```

### Shadows
```css
.shadow-primary   /* Primary colored shadow */
.shadow-primary-lg /* Large primary shadow */
```

### Fonts
```css
.font-primary     /* Primary font family */
.font-display     /* Display font family */
.font-mono        /* Monospace font family */
.font-secondary   /* Secondary font family */
```

### Font Weights
```css
.font-light       /* Light weight (300) */
.font-normal      /* Normal weight (400) */
.font-medium      /* Medium weight (500) */
.font-semibold    /* Semi-bold weight (600) */
.font-bold        /* Bold weight (700) */
.font-extrabold   /* Extra bold weight (800) */
```

### Font Sizes
```css
.text-xs          /* Extra small (12px) */
.text-sm          /* Small (14px) */
.text-base        /* Base (16px) */
.text-lg          /* Large (18px) */
.text-xl          /* Extra large (20px) */
.text-2xl         /* 2X large (24px) */
.text-3xl         /* 3X large (30px) */
.text-4xl         /* 4X large (36px) */
.text-5xl         /* 5X large (48px) */
.text-6xl         /* 6X large (60px) */
.text-7xl         /* 7X large (72px) */
```

### Line Heights
```css
.leading-tight    /* Tight line height */
.leading-normal   /* Normal line height */
.leading-relaxed  /* Relaxed line height */
.leading-loose    /* Loose line height */
```

### Letter Spacing
```css
.tracking-tight   /* Tight letter spacing */
.tracking-normal  /* Normal letter spacing */
.tracking-wide    /* Wide letter spacing */
.tracking-wider   /* Wider letter spacing */
```

## 🎯 Creating Custom Themes

### Step 1: Add Theme Configuration

1. **Edit `src/constants/themes.js`**
2. **Add your theme** to the `themes` object:

```javascript
export const themes = {
  // ... existing themes ...
  
  myCustomTheme: {
    name: 'My Custom Theme',
    description: 'Description of my theme',
    colors: {
      primary: '#your-primary-color',
      primaryDark: '#your-primary-dark',
      primaryLight: '#your-primary-light',
      secondary: '#your-secondary-color',
      accent: '#your-accent-color',
    }
  }
};
```

### Step 2: Add CSS Variables

1. **Edit `src/styles/index.css`**
2. **Add your theme** to the alternative themes section:

```css
/* My Custom Theme */
/*
:root {
    --color-primary: #your-primary-color;
    --color-primary-dark: #your-primary-dark;
    --color-primary-light: #your-primary-light;
    --color-secondary: #your-secondary-color;
    --color-accent: #your-accent-color;
    /* ... other properties */
}
*/
```

### Step 3: Test Your Theme

1. **Use the theme switcher** to test your new theme
2. **Adjust colors** as needed
3. **Ensure good contrast** for accessibility

## 🎨 Color Palette Guidelines

### Primary Color
- Should be your main brand color
- Use for buttons, links, and important elements
- Ensure good contrast with white text

### Secondary Color
- Complementary to primary
- Use for secondary actions and highlights
- Should work well with primary color

### Accent Color
- High contrast color for CTAs
- Use sparingly for maximum impact
- Often orange, yellow, or bright colors

### Background Colors
- Start with white/light backgrounds
- Use subtle tints of your primary color
- Ensure good readability

### Text Colors
- Dark gray for main text
- Medium gray for secondary text
- Light gray for muted text

## ♿ Accessibility Considerations

### Color Contrast
- Ensure text has sufficient contrast (4.5:1 minimum)
- Test with color blindness simulators
- Don't rely solely on color for information

### Focus States
- Always provide visible focus indicators
- Use the `--color-focus` variable for consistency
- Test keyboard navigation

### Color Independence
- Don't use color alone to convey information
- Provide additional visual cues (icons, patterns)
- Test in grayscale

## 🔄 Theme Switching

The theme switcher component provides:
- **Instant theme switching** without page reload
- **Visual preview** of each theme
- **Persistent selection** (can be enhanced with localStorage)
- **Accessible interface** with proper ARIA labels

## 🚀 Performance Tips

### CSS Custom Properties
- Use CSS custom properties for dynamic theming
- Avoid generating CSS in JavaScript for better performance
- Leverage CSS inheritance for consistent theming

### Optimizations
- Minimize the number of CSS custom properties
- Use semantic naming for better maintainability
- Group related properties together

## 📝 Best Practices

1. **Consistency**: Use the same color variables throughout
2. **Semantic naming**: Name colors by purpose, not appearance
3. **Documentation**: Keep theme guides updated
4. **Testing**: Test themes across different devices and browsers
5. **Accessibility**: Always consider color contrast and accessibility
6. **Performance**: Minimize CSS custom properties for better performance

## 🐛 Troubleshooting

### Theme Not Applying
- Check if CSS custom properties are defined
- Ensure no conflicting CSS rules
- Verify theme switcher is working correctly

### Colors Not Updating
- Clear browser cache
- Check for CSS specificity issues
- Verify CSS custom property syntax

### Performance Issues
- Reduce number of CSS custom properties
- Use CSS inheritance effectively
- Avoid complex calculations in CSS

---

**Need help?** Check the component files or create an issue in the repository. 