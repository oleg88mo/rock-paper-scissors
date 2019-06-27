import React from 'react';
// components
import RoleA from './roleA';
import RoleB from './roleB';

export default function SelectedRole(p) {
    return (
        <div className="role">
            <RoleA
                headerText="111"
                footerText="111"
                selected={p.selected}
                handlerSelectHero={p.handlerSelectHero}
                handlerVisibleRoleB={p.handlerVisibleRoleB}
            />
            <RoleB
                headerText="222"
                footerText="222"
                disabled={p.disabled}
                handlerSelectHero={p.handlerSelectHero}
            />
        </div>
    )
}