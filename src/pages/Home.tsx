import React from 'react';
import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Showcase } from '../components/Showcase';
import { Subscription } from '../components/Subscription';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { SectionSeam } from '../components/SectionSeam';
export function Home() {
  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden"
      style={{
        background: 'var(--paper)'
      }}>
      
      <Nav />
      <main>
        <Hero />
        <SectionSeam />
        <Features />
        <SectionSeam />
        <Showcase />
        <SectionSeam />
        <Subscription />
        <SectionSeam />
        <FAQ />
      </main>
      <Footer />
    </div>);

}