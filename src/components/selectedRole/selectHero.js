import React from 'react';
// svgIcon
import {hero_1, hero_2, hero_3, hero_4, hero_5, hero_6, hero_7, hero_8} from '../../components/svg';

export default function SelectHero(p) {
    return (
        <div className="list-hero">
            <div className="row">
                <div className={`col ${p.selected === 'hero_1' ? 'selected' : ''}`} onClick={()=> p.handlerSelectHero('hero_1', p.role)}>{hero_1}</div>
                <div className={`col ${p.selected === 'hero_2' ? 'selected' : ''}`} onClick={()=> p.handlerSelectHero('hero_2', p.role)}>{hero_2}</div>
                <div className={`col ${p.selected === 'hero_3' ? 'selected' : ''}`} onClick={()=> p.handlerSelectHero('hero_3', p.role)}>{hero_3}</div>
                <div className={`col ${p.selected === 'hero_4' ? 'selected' : ''}`} onClick={()=> p.handlerSelectHero('hero_4', p.role)}>{hero_4}</div>
            </div>
            <div className="row">
                <div className={`col ${p.selected === 'hero_5' ? 'selected' : ''}`} onClick={()=> p.handlerSelectHero('hero_5', p.role)}>{hero_5}</div>
                <div className={`col ${p.selected === 'hero_6' ? 'selected' : ''}`} onClick={()=> p.handlerSelectHero('hero_6', p.role)}>{hero_6}</div>
                <div className={`col ${p.selected === 'hero_7' ? 'selected' : ''}`} onClick={()=> p.handlerSelectHero('hero_7', p.role)}>{hero_7}</div>
                <div className={`col ${p.selected === 'hero_8' ? 'selected' : ''}`} onClick={()=> p.handlerSelectHero('hero_8', p.role)}>{hero_8}</div>
            </div>
        </div>
    )
}