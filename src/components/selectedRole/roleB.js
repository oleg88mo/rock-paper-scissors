import React from 'react';
// components
import Header from './header';
import Footer from './footer';
import SelectHero from './selectHero';

export default function RoleB(p) {
    return (
        <div className={`role__column ${p.disabled === null ? 'disabled' : ''}`}>
            <Header {...p}/>
            <SelectHero handlerSelectHero={p.handlerSelectHero} role='roleB'/>
            <Footer {...p}/>
        </div>
    )
}