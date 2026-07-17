import { useState, useEffect, useRef } from 'react';

export const useInView = (threshold = 0.3) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsInView(true);
            },
            { threshold },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isInView];
};
