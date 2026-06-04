import React, { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import CompanyStory from './components/companystory';
import Products from './components/products';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import WhatsAppButton from './components/whatsappbutton';
import ProductModal from './components/productmodal';

const HarmonyGreenCoffee = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Apply body styles globally
  React.useEffect(() => {
    // Reset all default margins and padding
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    document.body.style.lineHeight = '1.6';
    document.body.style.color = '#333';

    // Make sure the root div spans full width
    const rootDiv = document.getElementById('root');
    if (rootDiv) {
      rootDiv.style.margin = '0';
      rootDiv.style.padding = '0';
      rootDiv.style.width = '100%';
      rootDiv.style.minHeight = '100vh';
    }

    return () => {
      // Cleanup on unmount
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.fontFamily = '';
      document.body.style.lineHeight = '';
      document.body.style.color = '';
      if (rootDiv) {
        rootDiv.style.margin = '';
        rootDiv.style.padding = '';
        rootDiv.style.width = '';
        rootDiv.style.minHeight = '';
      }
    };
  }, []);

  const testimonials = [
    {
      text: "I have been doing business with Eugenia and Harmony Green Coffee since its inception.  The coffees and service have always been top notch and have allowed me to provide a quality product/service to my customers.  Eugenia has always been prompt and professional and I would recommend anyone needing green coffee beans to check out Harmony Green Coffee.",
      author: "Bob Knabe - Owner at Knothole Coffee Roasters"
    },
    {
      text: "As a major green coffee supplier for us for the last 4 years Harmony has contributed to our growth, by delivering on time purchase orders, being competitive with reasonable pricing and the most important complying with the Quality agreed, and excellent customer service.",
      author: "Ricardo Acevedo - CEO at Rino Specialty Coffee Roasters"
    },
    {
      text: "We have known María Eugenia for approximately 13 years in the green coffee business. And Harmony Green Coffee LLC has been our ally since its inception. We have always counted on Maria Eugenia's experience and ability to have our product on time, covering all the needs in the different qualities of coffee that our company requires.\n\nPunctuality, having the security of contracts, responsibility and good management from coffee samples to final delivery, are remarkable virtues of the company. An excellent support that guarantees the established quality and prices. Seriousness and organization are visible qualities at Harmony and live up to its name.",
      author: "Owners at That Coffee LLC"
    },
    {
      text: "On behalf of Mia Coffee Distributors AKA MIACORP LLC, we have been working with Eugenia from Harmony Coffee since 2022, and our experience has been exceptional. The quality of the green coffee she provides is exactly as promised consistent, reliable, and outstanding.\n\nEugenia always ensures we receive samples to evaluate before purchasing, and once roasted, the coffee exceeds expectations every time. Her responsiveness is truly impressive. Whenever we send a purchase order, she replies the same day and promptly releases the coffee, which helps us keep our operations running smoothly. In addition, her customer service is excellent. Eugenia is extremely knowledgeable and always available to answer any questions we have about coffee, providing detailed and helpful information. We highly recommend Harmony Coffee to anyone looking for quality products and dependable service.",
      author: "Mari Suarez- MIACORP LLC"
    }
  ];

  const products = [
    {
      name: "Colombia Arabica (Excelso EP; Supremo Scr 17/18)",
      description: "Main characteristics: Medium to Full body, bright acidity, well-balanced, smooth, clean and rich aftertaste.\n\nProcessing: Fully washed\n\nAltitude: 1200-2000 meters above sea level\n\nRegion: Huila, Antioquia, Tolima, Cauca, Santander, Narino\n\nHarvest Months: Year-round (Main crop Sep to Dec)",
      image: "/colombia_flag.png",
    },
    {
      name: "Brazil Arabica Natural",
      description: "CERRADO NY 2/3 SCR 17/18 SSFC:\n\nScreen 17/18 (Large bean size)\n\nSSGC - Strictly Soft Fine Cup\n\nNY 2/3 (No more than 8 - 12 visible defects in a 300-gram sample)\n\nMain characteristics: Sweet, with full body, low acidity with nuts, caramel and chocolate notes.\n\nProcessing: Natural\n\nAltitude: 500-1200 meters above sea level\n\nRegion: Sul de Minas, Cerrado Mineiro\n\nHarvest Months: May through September (Main)",
      image: "/brazil_flag.png",
    },
    {
      name: "Uganda Robusta (Scr 15,17,18)",
      description: "Main characteristics: Heavy, full-bodied, and bold profile, often featuring chocolate, spicy, and nutty flavors with low acidity. Ideal for espresso blends, instant coffee.\n\nProcessing: Natural\n\nAltitude: 1000 to 1,300 meters, contributing to their natural high caffeine content and robust flavor profile.\n\nRegion: Western Uganda & Lake Victoria Basin\n\nHarvest Months: November - January (Main Crop Robusta).",
      image: "/uganda_flag.png",
    },
    {
      name: "Vietnam Wet Polished (Scr 16) Robusta",
      description: "Screen 16 Grade 1: Ensures a minimum of 90% above screen 16 and a maximum moisture content of 12.5%.\n\nMain characteristics: Exceptionally clean, bright, and uniform appearance, achieved by removing the silver skin through a wet polishing technique.\n\nProcessing: Natural\n\nAltitude: between 400m and 1, 600m\n\nRegion: Central Highlands in regions like Dak Lak(Premium Robusta)\n\nHarvest Months: October to April, with the peak season from November to January",
      image: "/vietnam_flag.webp",
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openWhatsApp = () => {
    const phoneNumber = "17542143075";
    const message = "Hello! I'm interested in your coffee products.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };


  return (
    <>
      <Navbar />
      <Hero />
      <CompanyStory />
      <Products products={products} />
      <Testimonials
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        onSetCurrent={setCurrentTestimonial}
      />
      <Footer />
      <WhatsAppButton onClick={openWhatsApp} />
    </>
  );
};

export default HarmonyGreenCoffee;