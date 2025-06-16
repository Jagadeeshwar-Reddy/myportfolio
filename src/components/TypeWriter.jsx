import React, { useState, useEffect } from 'react';

const TypeWriter = ({ words = [], className = '', typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (words.length === 0) return;

        const currentWord = words[currentWordIndex];
        const speed = isDeleting ? deletingSpeed : typingSpeed;

        let timeout;

        if (!isPaused) {
            if (!isDeleting && currentText === currentWord) {
                // Word is fully typed, pause before deleting
                timeout = setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, pauseTime);
            } else if (isDeleting && currentText === '') {
                // Word is fully deleted, move to next word
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            } else {
                // Continue typing or deleting
                timeout = setTimeout(() => {
                    if (isDeleting) {
                        setCurrentText((prev) => prev.slice(0, -1));
                    } else {
                        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
                    }
                }, speed);
            }
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [currentText, currentWordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseTime]);

    if (words.length === 0) return null;

    return (
        <div className={`inline-block ${className}`}>
            <span className="inline-block">
                {currentText}
                <span className="inline-block w-1 h-5 bg-current ml-1 animate-blink" />
            </span>
        </div>
    );
};

export default TypeWriter; 