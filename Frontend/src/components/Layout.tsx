import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useScreenInit } from '../useScreenInit';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export function Layout() {
  useScreenInit();
  useSmoothScroll();
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-brand-red/30">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>);
}