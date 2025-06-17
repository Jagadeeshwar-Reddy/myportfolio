// Theme Configuration
// To change themes, simply update the CSS custom properties in src/styles/index.css
// or uncomment one of the alternative themes

export const themes = {
    // Current Green Theme
    green: {
        name: 'Leaf Green',
        description: 'Natural and professional green theme',
        colors: {
            primary: '#16a34a',
            primaryDark: '#15803d',
            primaryLight: '#22c55e',
            secondary: '#059669',
            accent: '#f59e0b',
        },
        fonts: {
            primary: 'Inter',
            display: 'Inter',
            mono: 'JetBrains Mono',
            secondary: 'Inter'
        }
    },

    // Blue Theme (uncomment in CSS to activate)
    blue: {
        name: 'Ocean Blue',
        description: 'Professional and trustworthy blue theme',
        colors: {
            primary: '#3b82f6',
            primaryDark: '#2563eb',
            primaryLight: '#60a5fa',
            secondary: '#1d4ed8',
            accent: '#f59e0b',
        },
        fonts: {
            primary: 'Inter',
            display: 'Inter',
            mono: 'JetBrains Mono',
            secondary: 'Inter'
        }
    },

    // Purple Theme (uncomment in CSS to activate)
    purple: {
        name: 'Royal Purple',
        description: 'Creative and modern purple theme',
        colors: {
            primary: '#8b5cf6',
            primaryDark: '#7c3aed',
            primaryLight: '#a78bfa',
            secondary: '#6d28d9',
            accent: '#f59e0b',
        },
        fonts: {
            primary: 'Inter',
            display: 'Inter',
            mono: 'JetBrains Mono',
            secondary: 'Inter'
        }
    },

    // Orange Theme
    orange: {
        name: 'Sunset Orange',
        description: 'Warm and energetic orange theme',
        colors: {
            primary: '#f97316',
            primaryDark: '#ea580c',
            primaryLight: '#fb923c',
            secondary: '#dc2626',
            accent: '#f59e0b',
        },
        fonts: {
            primary: 'Inter',
            display: 'Inter',
            mono: 'JetBrains Mono',
            secondary: 'Inter'
        }
    },

    // Teal Theme
    teal: {
        name: 'Ocean Teal',
        description: 'Calm and sophisticated teal theme',
        colors: {
            primary: '#0d9488',
            primaryDark: '#0f766e',
            primaryLight: '#14b8a6',
            secondary: '#0891b2',
            accent: '#f59e0b',
        },
        fonts: {
            primary: 'Inter',
            display: 'Inter',
            mono: 'JetBrains Mono',
            secondary: 'Inter'
        }
    }
};

// Font configurations
export const fontConfigs = {
    inter: {
        name: 'Inter',
        description: 'Modern, clean sans-serif font',
        fonts: {
            primary: 'Inter',
            display: 'Inter',
            mono: 'JetBrains Mono',
            secondary: 'Inter'
        }
    },
    poppins: {
        name: 'Poppins',
        description: 'Geometric sans-serif with personality',
        fonts: {
            primary: 'Poppins',
            display: 'Poppins',
            mono: 'JetBrains Mono',
            secondary: 'Poppins'
        }
    },
    roboto: {
        name: 'Roboto',
        description: 'Clean and readable Google font',
        fonts: {
            primary: 'Roboto',
            display: 'Roboto',
            mono: 'Roboto Mono',
            secondary: 'Roboto'
        }
    },
    montserrat: {
        name: 'Montserrat',
        description: 'Elegant and modern sans-serif',
        fonts: {
            primary: 'Montserrat',
            display: 'Montserrat',
            mono: 'JetBrains Mono',
            secondary: 'Montserrat'
        }
    },
    openSans: {
        name: 'Open Sans',
        description: 'Humanist sans-serif font',
        fonts: {
            primary: 'Open Sans',
            display: 'Open Sans',
            mono: 'Source Code Pro',
            secondary: 'Open Sans'
        }
    },
    lato: {
        name: 'Lato',
        description: 'Balanced and friendly sans-serif',
        fonts: {
            primary: 'Lato',
            display: 'Lato',
            mono: 'Source Code Pro',
            secondary: 'Lato'
        }
    }
};

// Helper function to get theme colors
export const getThemeColors = (themeName = 'green') => {
    return themes[themeName]?.colors || themes.green.colors;
};

// Helper function to get font configuration
export const getFontConfig = (fontName = 'inter') => {
    return fontConfigs[fontName]?.fonts || fontConfigs.inter.fonts;
};

// Helper function to generate CSS variables for a theme
export const generateThemeCSS = (themeName = 'green', fontName = 'inter') => {
    const theme = themes[themeName];
    const fontConfig = fontConfigs[fontName];

    if (!theme || !fontConfig) return '';

    const colors = theme.colors;
    const fonts = fontConfig.fonts;

    return `
    :root {
      /* Primary Colors */
      --color-primary: ${colors.primary};
      --color-primary-dark: ${colors.primaryDark};
      --color-primary-light: ${colors.primaryLight};
      --color-secondary: ${colors.secondary};
      --color-accent: ${colors.accent};
      
      /* Font Configuration */
      --font-primary: '${fonts.primary}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      --font-display: '${fonts.display}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      --font-mono: '${fonts.mono}', 'Fira Code', 'Monaco', 'Cascadia Code', monospace;
      --font-secondary: '${fonts.secondary}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      
      /* Generate other colors based on primary */
      --color-bg-secondary: ${getLightBackground(colors.primary)};
      --color-bg-tertiary: ${getLighterBackground(colors.primary)};
      --color-surface: ${getLightBackground(colors.primary)};
      --color-surface-light: ${getLighterBackground(colors.primary)};
      --color-border: ${getLightBorder(colors.primary)};
      --color-border-light: ${getLighterBorder(colors.primary)};
      --color-border-dark: ${getDarkerBorder(colors.primary)};
      
      /* Gradients */
      --gradient-primary: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
      --gradient-secondary: linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.primary} 100%);
      --gradient-accent: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%);
      
      /* Shadows */
      --shadow-color: ${hexToRgba(colors.primary, 0.1)};
      --shadow-color-lg: ${hexToRgba(colors.primary, 0.15)};
    }
  `;
};

// Helper functions for color generation
const getLightBackground = (hex) => {
    // Convert hex to light background color
    return hexToRgba(hex, 0.05);
};

const getLighterBackground = (hex) => {
    // Convert hex to lighter background color
    return hexToRgba(hex, 0.03);
};

const getLightBorder = (hex) => {
    // Convert hex to light border color
    return hexToRgba(hex, 0.2);
};

const getLighterBorder = (hex) => {
    // Convert hex to lighter border color
    return hexToRgba(hex, 0.15);
};

const getDarkerBorder = (hex) => {
    // Convert hex to darker border color
    return hexToRgba(hex, 0.3);
};

const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default themes; 