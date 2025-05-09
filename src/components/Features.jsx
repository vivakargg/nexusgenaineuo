
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Cloud, Shield, BarChart, Layers, RefreshCw, Brain, Box as Cube } from 'lucide-react';
import { Button } from "@/components/ui/button";

const featureItems = [
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: "Advanced AI Models",
    description: "Leverage state-of-the-art AI models trained on vast datasets for intelligent insights and automation."
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Intelligent Automation",
    description: "Automate complex tasks and workflows using our powerful AI-driven automation tools."
  },
  {
    icon: <Cube className="h-10 w-10 text-primary" />,
    title: "3D Model Visualization",
    description: "Integrate and visualize complex 3D models for enhanced data representation and interactive experiences."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Rapid Processing",
    description: "Experience high-speed data processing and analysis with our optimized AI infrastructure."
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "Cloud Integration",
    description: "Seamlessly integrate with popular cloud services and APIs for extended functionality."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Enterprise Security",
    description: "Bank-level security with encryption at rest and in transit to protect your data."
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Insightful Analytics",
    description: "Comprehensive analytics and reporting to derive actionable insights from your data."
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Customizable Solutions",
    description: "Tailor our AI solutions to fit your specific business needs and requirements."
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-primary" />,
    title: "Continuous Updates",
    description: "Regular updates with new AI capabilities, improvements, and security patches."
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Powerful <span className="gradient-text">AI Features</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the tools and capabilities that make NextGenAINova the leading platform for AI-powered solutions and 3D visualizations.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 border border-border card-hover glow flex flex-col"
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 inline-block self-start">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-card border border-border rounded-xl p-8 md:p-12 card-hover glow flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Visualize with <span className="gradient-text">Interactive 3D Models</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Bring your data to life. Our platform supports seamless integration of 3D models, allowing for immersive visualizations and deeper understanding of complex datasets. Perfect for simulations, product showcases, and advanced analytics.
            </p>
            <Button variant="outline">Learn More About 3D</Button>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md h-64 bg-muted/50 rounded-lg flex items-center justify-center border border-dashed border-primary/50">
              <Cube size={64} className="text-primary opacity-30" />
              <p className="absolute text-sm text-muted-foreground">Interactive 3D Model Placeholder</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
