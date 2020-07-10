import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';

import { StyledSideNav } from './styles';

const items = [
    { name: 'About', path: '/' },
    { name: 'Work', path: '/work' },
    // { name: 'Projects', path: '/projects' },
    { name: 'Articles', path: '/articles' },
];

const Sidenav = () => {
    const loc = useLocation();

    return (
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
            <SideNavItems>
                {items.map(i => (
                    <SideNavLink
                        isActive={
                            loc.pathname === '/' && i.path === '/' ? true : loc.pathname === i.path
                        }
                        element={Link}
                        key={i.name}
                        to={i.path}
                    >
                        {i.name}
                    </SideNavLink>
                ))}
            </SideNavItems>
        </StyledSideNav>
    );
}

export default Sidenav;