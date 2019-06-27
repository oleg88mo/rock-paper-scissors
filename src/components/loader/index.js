import React from 'react';
// svgIcon
import {rock, paper, scissors} from '../../components/svg';

export default function Loader(p) {
    return (
        <div className="loader">
            {rock}
            {paper}
            {scissors}
        </div>
    )
};
