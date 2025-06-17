import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage for saved preference
        const saved = localStorage.getItem('theme');
        if (saved) {
            return saved === 'dark';
        }
        // Default to light theme
        return false;
    });

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    useEffect(() => {
        // Save theme preference to localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Apply theme to document
        const root = document.documentElement;

        if (isDark) {
            // Dark theme
            root.style.setProperty('--color-bg-primary', '#0f0f23');
            root.style.setProperty('--color-bg-secondary', '#1a1a2e');
            root.style.setProperty('--color-bg-tertiary', '#16213e');
            root.style.setProperty('--color-bg-gradient-start', '#0f0f23');
            root.style.setProperty('--color-bg-gradient-end', '#1a1a2e');
            root.style.setProperty('--color-surface', '#1a1a2e');
            root.style.setProperty('--color-surface-light', '#16213e');
            root.style.setProperty('--color-surface-card', '#0f3460');
            root.style.setProperty('--color-surface-glass', 'rgba(15, 52, 96, 0.8)');
            root.style.setProperty('--color-text-primary', '#ffffff');
            root.style.setProperty('--color-text-secondary', '#e2e8f0');
            root.style.setProperty('--color-text-muted', '#94a3b8');
            root.style.setProperty('--color-text-inverse', '#0f0f23');
            root.style.setProperty('--color-border', '#334155');
            root.style.setProperty('--color-border-light', '#475569');
            root.style.setProperty('--color-border-dark', '#64748b');
        } else {
            // Light theme
            root.style.setProperty('--color-bg-primary', '#ffffff');
            root.style.setProperty('--color-bg-secondary', '#f0fdf4');
            root.style.setProperty('--color-bg-tertiary', '#ecfdf5');
            root.style.setProperty('--color-bg-gradient-start', '#ffffff');
            root.style.setProperty('--color-bg-gradient-end', '#f0fdf4');
            root.style.setProperty('--color-surface', '#f0fdf4');
            root.style.setProperty('--color-surface-light', '#ecfdf5');
            root.style.setProperty('--color-surface-card', '#ffffff');
            root.style.setProperty('--color-surface-glass', 'rgba(255, 255, 255, 0.8)');
            root.style.setProperty('--color-text-primary', '#1e293b');
            root.style.setProperty('--color-text-secondary', '#475569');
            root.style.setProperty('--color-text-muted', '#64748b');
            root.style.setProperty('--color-text-inverse', '#ffffff');
            root.style.setProperty('--color-border', '#dcfce7');
            root.style.setProperty('--color-border-light', '#bbf7d0');
            root.style.setProperty('--color-border-dark', '#86efac');
        }
    }, [isDark]);

    const value = {
        isDark,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}; 