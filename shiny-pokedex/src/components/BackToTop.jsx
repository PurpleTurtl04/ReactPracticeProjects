import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolling down
    function toggleVisibility() {
        if (window.scrollY > 700) {
            // Adjust scroll threshold as needed
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    // Scroll to top functionality
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // For smooth scrolling
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop} id='topBtn' title='Go to top'>
                    Back To Top
                </button>
            )}
        </>
    );
}
