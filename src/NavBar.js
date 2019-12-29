import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import colors from './colors';

const spin = keyframes`
to {
    transform:rotate(360deg);
}
`
const NavBar = () => {
    const [padding, setPading] = useState(15);
    return (
        < header
            onClick={() => setPading(padding + 15)}
            css={css`
             background-color:${colors.light};
             padding:${padding}px;
    ` }
        >

            <Link to="/"> Adopt Me!</Link>
            <span aria-label="logo" role="img"
                css={css`
             font-size:60px;
             display:inline-block;
             animation: 1s  ${spin} linear infinite;

             &:hover {
                 text-decoration:underline;
             }
             
             `}

            >
                🐩
    </span>
        </header >

    )
}

export default NavBar;