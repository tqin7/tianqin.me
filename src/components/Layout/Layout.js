import React from 'react';
import TopNav from '../TopNav';

import { StyledContent } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <StyledContent>
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;
