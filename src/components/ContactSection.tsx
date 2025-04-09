
import React, { useState } from 'react';
import { Send, Linkedin, Twitter, MessageSquare, Headphones, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from 'emailjs-com';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(false);
  
  // Define form validation schema with Zod
  const formSchema = z.object({
    name: z.string().min(1, { message: t('pleaseCompleteAllFields') }),
    email: z.string().email({ message: t('pleaseEnterValidEmail') }),
    message: z.string().min(1, { message: t('pleaseCompleteAllFields') })
  });
  
  // Initialize react-hook-form with schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
  });
  
  // Form submission handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
      to_email: 'rendercreativezone@gmail.com'
    };
    
    try {
      // Using the provided template ID
      await emailjs.send(
        'service_id', // Replace with your EmailJS service ID
        'template_3fe3rlx', // Your provided template ID
        templateParams,
        'user_id' // Replace with your EmailJS user ID
      );
      
      toast({
        title: t('messageSent'),
        description: t('thankYouForMessage'),
      });
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: t('errorSendingMessage'),
        description: t('pleaseTryAgainLater'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-neon-purple/30 to-neon-blue/20 blur-3xl -top-20 -right-20"></div>
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/30 blur-3xl -bottom-10 -left-10 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4 animate-fade-in">{t('contactUs')}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">{t('getInTouch')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            {t('sendUsMessage')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Form - takes 3 columns on desktop */}
          <Card className="lg:col-span-3 bg-dark-lighter/50 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-neon-purple/5 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">{t('sendUsMessage')}</CardTitle>
              <CardDescription className="text-gray-400">{t('sendUsMessage')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">{t('yourName')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('yourName')} 
                              className="bg-dark-lighter border border-gray-700 text-white placeholder:text-gray-500 focus:border-neon-purple" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">{t('yourEmail')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('yourEmail')} 
                              className="bg-dark-lighter border border-gray-700 text-white placeholder:text-gray-500 focus:border-neon-purple" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">{t('yourMessage')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t('yourMessage')} 
                              className="bg-dark-lighter border border-gray-700 text-white min-h-32 placeholder:text-gray-500 focus:border-neon-purple" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                  >
                    {isLoading ? t('sending') : t('sendMessage')} 
                    {!isLoading && <Send size={18} className="ml-2" />}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Contact Info - takes 2 columns on desktop */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            <Card className="bg-dark-lighter/50 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-neon-blue/5 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 flex flex-col gap-8">
                {/* Office Location */}
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple p-0.5 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-neon-blue group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Office Location</h4>
                    <p className="text-gray-400">
                      Global Remote Team <br />
                      Web3 Innovation Hub
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue p-0.5 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                      <Mail className="w-5 h-5 text-neon-purple group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Email Us</h4>
                    <a href="mailto:rendercreativezone@gmail.com" className="text-gray-400 hover:text-neon-purple transition-colors">
                      rendercreativezone@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Schedule Call */}
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-yellow to-neon-purple p-0.5 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                      <Headphones className="w-5 h-5 text-neon-yellow group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">{t('scheduleCall')}</h4>
                    <p className="text-gray-400 mb-3">
                      {t('bookMeeting')}
                    </p>
                    <a 
                      href="#" 
                      className="px-4 py-2 bg-dark border border-neon-yellow/30 text-neon-yellow rounded-md hover:bg-neon-yellow/10 transition-all inline-flex items-center gap-2"
                    >
                      {t('bookMeeting')} <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Removed the "Follow Us" section as requested by the user */}
          </div>
        </div>
        
        {/* Map or global presence - mobile-friendly */}
        <div className="rounded-xl overflow-hidden relative h-64 md:h-96 bg-dark-lighter/50 backdrop-blur-lg border border-white/10 group hover:border-neon-blue/30 transition-all duration-500">
          {/* Stylized World Map Visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-dashed border-neon-blue/30 animate-spin" style={{ animationDuration: '30s' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 rounded-full border-2 border-dashed border-neon-purple/30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-dashed border-neon-yellow/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              
              {/* Location markers */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-neon-blue rounded-full pulse-glow"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-neon-purple rounded-full pulse-glow"></div>
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-neon-yellow rounded-full pulse-glow"></div>
              <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-neon-blue rounded-full pulse-glow"></div>
            </div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-dark/0 via-dark/50 to-dark/80">
            <div className="text-center p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Global Web3 Presence</h3>
              <p className="text-gray-300 max-w-lg">
                Our team works remotely across multiple time zones to provide you with round-the-clock Web3 innovation and support.
              </p>
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
