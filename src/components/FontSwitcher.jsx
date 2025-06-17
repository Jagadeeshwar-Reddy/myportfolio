import React, { useState, useEffect } from 'react';
import { fontConfigs, generateThemeCSS } from '../constants/themes';

const FontSwitcher = ({ currentTheme = 'green' }) => {
    const [currentFont, setCurrentFont] = useState('inter');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Apply font to document
        const style = document.createElement('style');
        style.id = 'font-styles';
        style.textContent = generateThemeCSS(currentTheme, currentFont);

        // Remove existing font styles
        const existingStyle = document.getElementById('font-styles');
        if (existingStyle) {
            existingStyle.remove();
        }

        document.head.appendChild(style);
    }, [currentFont, currentTheme]);

    const handleFontChange = (fontName) => {
        setCurrentFont(fontName);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                aria-label="Switch font"
            >
                <div className="w-4 h-4 flex items-center justify-center">
                    <span className="text-xs font-bold" style={{ fontFamily: `var(--font-primary)` }}>Aa</span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                    {fontConfigs[currentFont].name}
                </span>
                <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 right-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-3 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-900">Choose Font</h3>
                    </div>
                    <div className="p-2">
                        {Object.entries(fontConfigs).map(([key, font]) => (
                            <button
                                key={key}
                                onClick={() => handleFontChange(key)}
                                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors duration-200 ${currentFont === key
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'hover:bg-gray-50 text-gray-700'
                                    }`}
                            >
                                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                                    <span
                                        className="text-xs font-bold"
                                        style={{ fontFamily: `'${font.fonts.primary}', sans-serif` }}
                                    >
                                        Aa
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div
                                        className="text-sm font-medium"
                                        style={{ fontFamily: `'${font.fonts.primary}', sans-serif` }}
                                    >
                                        {font.name}
                                    </div>
                                    <div className="text-xs text-gray-500 truncate">{font.description}</div>
                                </div>
                                {currentFont === key && (
                                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FontSwitcher; 