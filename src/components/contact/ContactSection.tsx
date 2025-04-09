
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import GlobalPresence from './GlobalPresence';

export default function ContactSection() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-neon-purple/30 to-neon-blue/20 blur-3xl -top-20 -right-20"></div>
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/30 blur-3xl -bottom-10 -left-10 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ContactHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Form - takes 3 columns on desktop */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          
          {/* Contact Info - takes 2 columns on desktop */}
          <div className="lg:col-span-2 space-y-6">
            <ContactInfo />
          </div>
        </div>
        
        <GlobalPresence />
      </div>
    </section>
  );
}
