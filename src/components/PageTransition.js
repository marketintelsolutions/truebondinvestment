// components/PageTransition.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ color = 'bg-primaryOrange', duration = 1000 }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // Skip transition on initial load if desired
        if (isInitialLoad) {
            setIsInitialLoad(false);
            return;
        }

        setIsLoading(true);

        // Handle scroll
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [location, duration, isInitialLoad]);

    // Disable scroll while transitioning
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isLoading]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
            <div
                className={`absolute right-0 top-0 h-full ${color} animate-pageTransition`}
                style={{
                    animationDuration: `${duration}ms`,
                }}
            />
        </div>
    );
};

export default PageTransition;