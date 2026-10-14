import React from 'react';
import { createRoot } from 'react-dom/client';
import ElectricLogo from './ElectricLogo.jsx';
import './electric_logo.css';

const stylesheetUrl = new URL('./electric_logo.css', import.meta.url).href;
if (!document.querySelector(`link[href="${stylesheetUrl}"]`)) {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = stylesheetUrl;
    document.head.append(stylesheet);
}

const readNumber = (element, name, fallback) => {
    const value = Number(element.dataset[name]);
    return Number.isFinite(value) ? value : fallback;
};

document.querySelectorAll('[data-electric-logo]').forEach((element) => {
    if (element.dataset.mounted === 'true') return;
    element.dataset.mounted = 'true';
    element.style.height = element.dataset.height || '480px';

    createRoot(element).render(
        <ElectricLogo
            src={element.dataset.src}
            color={element.dataset.color}
            glowColor={element.dataset.glowColor}
            scale={readNumber(element, 'scale', 0.4)}
            strands={readNumber(element, 'strands', 4)}
            bend={readNumber(element, 'bend', 0.4)}
            crackle={readNumber(element, 'crackle', 0)}
            arcs={readNumber(element, 'arcs', 0.5)}
            speed={readNumber(element, 'speed', 2)}
            interactive={element.dataset.interactive !== 'false'}
            intensity={readNumber(element, 'intensity', 1)}
            glow={readNumber(element, 'glow', 2)}
            thickness={readNumber(element, 'thickness', 1)}
            flicker={readNumber(element, 'flicker', 0.7)}
            fill={readNumber(element, 'fill', 1)}
            cursorIntensity={readNumber(element, 'cursorIntensity', 0.5)}
            cursorRadius={readNumber(element, 'cursorRadius', 40)}
            theme={element.dataset.theme || 'dark'}
        />
    );
});