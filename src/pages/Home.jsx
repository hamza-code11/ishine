import React, { useState } from 'react';
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../sections/HeroSection";
import BrandsSection from "../sections/BrandsSection";
import CategoryGrid from "../sections/CategoryGrid";
import ProductCardSection from "../sections/ProductCardSection";
import DiscountSection from "../sections/DiscountSection";
import FullWidthHeroSection from "../sections/FullWidthHeroSection";
import FeaturedProducts from "../sections/FeaturedProducts.jsx";

export default function Home() {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);


  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar
        categoryMenuOpen={categoryMenuOpen}
        onToggleCategory={() => setCategoryMenuOpen(prev => !prev)}
      />
      <main>
        <HeroSection categoryMenuOpen={categoryMenuOpen} />
        <section className="bg-white border-y border-slate-100 py-5">
          <div className="max-w-7xl mx-auto px-4">
         
          </div>
        </section>
        <BrandsSection />
        <CategoryGrid />
        <ProductCardSection />
        <DiscountSection />
        <FullWidthHeroSection />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}