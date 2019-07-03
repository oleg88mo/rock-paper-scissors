import React from 'react';
// components
import Header from './header';
import Footer from './footer';
import SelectHero from './selectHero';

export default function RoleA(p) {
    return (
        <div className="role__column">
            <Header {...p}/>
            <SelectHero
                handlerSelectHero={p.handlerSelectHero}
                roleIs='roleA'
                selected={p.selected}
            />
            <Footer {...p} selected={p.selected}/>
        </div>
    )
}