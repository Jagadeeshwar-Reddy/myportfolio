import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from '@layouts/MainLayout';

// Pages
import Home from '@pages/Home';
import About from '@pages/About';
import Experience from '@pages/Experience';
import Portfolio from '@pages/Portfolio';
import Contact from '@pages/Contact';

// Components
import PageLoader from '@components/PageLoader';
import ErrorBoundary from '@components/ErrorBoundary';

// Context
import { ThemeProvider } from '@contexts/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <ErrorBoundary>
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="experience" element={<Experience />} />
                            <Route path="portfolio" element={<Portfolio />} />
                            <Route path="contact" element={<Contact />} />
                        </Route>
                    </Routes>
                </AnimatePresence>
            </ErrorBoundary>
        </ThemeProvider>
    );
}

export default App; 