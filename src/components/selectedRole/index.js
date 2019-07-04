import React from 'react';
// components
import RoleA from './roleA';
import RoleB from './roleB';

export default function SelectedRole(p) {
    return (
        <div className="role">
            <RoleA
                headerText="Choose your role"
                footerText="Select player 2"
                selected={p.selectedA}
                handlerSelectHero={p.handlerSelectHero}
                handlerButtonClick={p.handlerButtonClickA}
            />
            <RoleB
                headerText="Choose the opponent's role"
                footerText="Play"
                disabled={p.disabled}
                selected={p.selectedB}
                handlerSelectHero={p.handlerSelectHero}
                handlerButtonClick={p.handlerButtonClickB}
            />
        </div>
    )
}