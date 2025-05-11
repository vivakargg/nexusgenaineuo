
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, MessageSquare, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
      <div className="blob top-20 left-1/4"></div>
      <div className="blob bottom-20 right-1/4"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Intelligent AI</span> for Business Growth & Personalized Assistance
            </h1>
            <p className="text-xl text-muted-foreground mb-2 max-w-xl">
              Empower your website with multi-conversational AI bots, automate customer support, generate leads, and provide personalized AI assistants for complex tasks.
            </p>
            <p className="text-sm text-muted-foreground mb-8 max-w-xl">
              Proud partners with a leading Swiss-based Microsoft Partner, delivering excellence and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Discover Our AI
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:vivakar@nextgenainova.com?subject=Demo Request for NextGenAINova">Request a Demo</a>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Conversational AI Bots</h3>
                  <p className="text-sm text-muted-foreground">Engage website visitors 24/7</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium">Customer Segmentation</h3>
                  <p className="text-sm text-muted-foreground">Tailor solutions for SMBs</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium">Lead Generation</h3>
                  <p className="text-sm text-muted-foreground">Convert visitors into leads</p>
                </div>
              </div>

               <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Personal AI Assistants</h3>
                  <p className="text-sm text-muted-foreground">Handle complex, dynamic info</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative flex justify-center items-center"
          >
            <div className="relative z-10 glow w-full max-w-md h-auto aspect-square">
              <img  class="w-full h-full object-contain floating" alt="Abstract 3D AI representation" src="https://images.unsplash.com/photo-1677442136019-21780ecad995" />
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
