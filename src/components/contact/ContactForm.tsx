
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from "@/components/ui/use-toast";
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

export default function ContactForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
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
    <Card className="bg-dark-lighter/50 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-neon-purple/5 transition-all duration-300">
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
  );
}
