import React from 'react';

interface LayoutProps  { 
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='layout'>
      <div className='menu-left'></div>
      {children}
      <div className='menu-right'></div>
    </div>
  );
}

export default Layout;