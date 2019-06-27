import React from 'react';

export default function Footer(p) {
    console.log(p);
    return (
        <footer>
            <button onClick={p.selected !== null && p.handlerVisibleRoleB}>{p.footerText}</button>
        </footer>
    )
}