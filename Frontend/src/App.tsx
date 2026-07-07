import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CookieBar } from './components/CookieBar';
export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#0E0E10] text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Fallback route for other pages to show they are working */}
            <Route
              path="*"
              element={
              <div className="h-screen flex items-center justify-center pt-20">
                  <h1 className="text-3xl font-bold text-zinc-500">
                    Page Coming Soon
                  </h1>
                </div>
              } />
            
          </Routes>
        </div>
        <Footer />
        <CookieBar />
      </div>
    </BrowserRouter>);

}