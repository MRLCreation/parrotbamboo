
import React from 'react';
import { Send, Linkedin, Twitter, MessageSquare, Headphones } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function ContactSection() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="section-padding bg-dark relative">
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">{t('contactUs')}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('getInTouch')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            {t('sendUsMessage')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glassmorphism rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">{t('sendUsMessage')}</h3>
            
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">{t('yourName')}</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-dark-lighter border border-gray-700 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block w-full p-3"
                  placeholder={t('yourName')}
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">{t('yourEmail')}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-dark-lighter border border-gray-700 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block w-full p-3"
                  placeholder={t('yourEmail')}
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">{t('yourMessage')}</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="bg-dark-lighter border border-gray-700 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block w-full p-3"
                  placeholder={t('yourMessage')}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-medium flex items-center justify-center gap-2 hover-scale w-full"
              >
                {t('sendMessage')} <Send size={16} />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('connectWithUs')}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-lighter glow-border flex-shrink-0">
                  <Headphones className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{t('scheduleCall')}</h4>
                  <p className="text-gray-300 mb-4">
                    {t('bookMeeting')}
                  </p>
                  <a 
                    href="#" 
                    className="text-neon-purple hover:underline inline-flex items-center gap-1"
                  >
                    {t('bookMeeting')} <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-lighter glow-border flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{t('joinCommunity')}</h4>
                  <p className="text-gray-300 mb-4">
                    {t('joinTelegram')}
                  </p>
                  <a 
                    href="#" 
                    className="text-neon-blue hover:underline inline-flex items-center gap-1"
                  >
                    {t('joinTelegram')} <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4">{t('followUs')}</h4>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
