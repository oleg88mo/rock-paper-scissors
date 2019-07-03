import React from 'react';

export default function Footer(p) {
    return (
        <footer>
            <button onClick={p.selected !== null ? p.handlerButtonClick : undefined} className={`${p.selected === null ? 'disabled' : ''}`}>{p.footerText}</button>
        </footer>
    )
}