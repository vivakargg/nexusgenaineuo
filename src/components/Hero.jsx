
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, BookOpen, Settings, Briefcase, Box as Cube } from 'lucide-react';

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
              <span className="gradient-text">Next Generation</span> AI Solutions, Education & Platform Development
            </h1>
            <p className="text-xl text-muted-foreground mb-2 max-w-xl">
              Revolutionize your workflow with our cutting-edge AI solutions, immersive 3D model integration, and expert AI education. We build custom platforms at reasonable rates.
            </p>
            <p className="text-sm text-muted-foreground mb-8 max-w-xl">
              Proud partners with a leading Swiss-based Microsoft Partner, delivering excellence and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:vivakar@nextgenainova.com?subject=Demo Request for NextGenAINova">View Demo</a>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Advanced AI</h3>
                  <p className="text-sm text-muted-foreground">State-of-the-art models</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium">AI Education</h3>
                  <p className="text-sm text-muted-foreground">Learn to implement AI</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                  <Settings className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium">Platform Building</h3>
                  <p className="text-sm text-muted-foreground">Custom solutions</p>
                </div>
              </div>

               <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Cube className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">3D Model Integration</h3>
                  <p className="text-sm text-muted-foreground">Visualize complex data</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 glow">
              <div className="code-window w-full max-w-xl mx-auto">
                <div className="code-header">
                  <div className="code-dot bg-red-500"></div>
                  <div className="code-dot bg-yellow-500"></div>
                  <div className="code-dot bg-green-500"></div>
                  <div className="ml-4 text-xs text-gray-400">nextgen-services.js</div>
                </div>
                <div className="code-body">
                  <pre className="text-sm">
                    <code>
                      <span className="text-blue-400">import</span> <span className="text-green-400">{ "{" } AI, Education, Platform, Model3D { "}" }</span> <span className="text-blue-400">from</span> <span className="text-orange-400">'nextgenainova'</span>;
                      
                      <span className="text-gray-500">// AI Solution</span>
                      <span className="text-blue-400">const</span> <span className="text-yellow-400">aiModel</span> = <span className="text-blue-400">new</span> <span className="text-purple-400">AI</span>({"{"} <span className="text-green-400">model</span>: <span className="text-orange-400">'advanced-pro'</span> {"}"});
                      aiModel.<span className="text-yellow-400">analyze</span>(yourData);

                      <span className="text-gray-500">// AI Education</span>
                      <span className="text-blue-400">const</span> <span className="text-yellow-400">course</span> = <span className="text-blue-400">new</span> <span className="text-purple-400">Education</span>({"{"} <span className="text-green-400">topic</span>: <span className="text-orange-400">'AI Implementation'</span> {"}"});
                      course.<span className="text-yellow-400">startLearning</span>();
                      
                      <span className="text-gray-500">// Custom Platform Development</span>
                      <span className="text-blue-400">const</span> <span className="text-yellow-400">customPlatform</span> = <span className="text-blue-400">new</span> <span className="text-purple-400">Platform</span>({"{"}
                        <span className="text-green-400">type</span>: <span className="text-orange-400">'SaaS'</span>,
                        <span className="text-green-400">features</span>: [<span className="text-orange-400">'AI'</span>, <span className="text-orange-400">'3DModels'</span>]
                      {"}"});
                      customPlatform.<span className="text-yellow-400">build</span>();

                      <span className="text-gray-500">// 3D Model Visualization</span>
                      <span className="text-blue-400">const</span> <span className="text-yellow-400">viewer</span> = <span className="text-blue-400">new</span> <span className="text-purple-400">Model3D</span>({"{"} <span className="text-green-400">source</span>: <span className="text-orange-400">'/models/complex-data.glb'</span> {"}"});
                      viewer.<span className="text-yellow-400">render</span>(<span className="text-orange-400">'#viewer-container'</span>);
                    </code>
                  </pre>
                </div>
              </div>
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
