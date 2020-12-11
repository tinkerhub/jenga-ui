import React, { useEffect, useRef } from 'react';
import { gsap, Back } from 'gsap';

type FadeInProps = {
    component?: React.ElementType;
    className?: string;
    duration?: number;
    delay?: number;
    attributes?: Record<string, unknown>;
};

const FadeIn: React.FC<FadeInProps> = ({
    children,
    component: Component = 'div',
    className,
    duration = 1,
    delay = 0.25,
    attributes = {},
}) => {
    const animateRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.from(animateRef.current, {
            duration,
            delay,
            opacity: 0,
            ease: Back.easeInOut.config(3),
            y: 20,
            ...attributes,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animateRef, delay, duration]);

    return (
        <Component ref={animateRef} className={className}>
            {children}
        </Component>
    );
};

export default FadeIn;
