
import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Users, 
  DollarSign, 
  Zap, 
  Brain, 
  Shield, 
  BarChart, 
  Layers, 
  RefreshCw,
  UserCheck,
  FileText
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const featureItems = [
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Multi-Conversational Bots",
    description: "Engage any customer visiting your website with intelligent, multi-turn conversational AI bots, available 24/7."
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Automated Customer Support",
    description: "Reduce operational costs and improve customer satisfaction with AI-powered bots handling support queries efficiently."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "AI-Powered Lead Generation",
    description: "Proactively identify and qualify leads from website interactions, boosting your sales pipeline."
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: "Personal AI Assistants",
    description: "Provide individuals with sophisticated AI assistants capable of handling complex, ever-updating information (e.g., legal, medical contexts)."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "SMB Customer Segmentation",
    description: "Understand your Small to Medium Business customers better by segmenting them based on characteristics and pain points for targeted solutions."
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Advanced AI Models",
    description: "Leverage state-of-the-art AI models trained for diverse applications, ensuring high accuracy and relevance."
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Customizable Solutions",
    description: "Tailor our AI solutions to fit your specific business needs, workflows, and integration requirements."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Ensure data privacy and compliance with robust security measures built into our AI platforms."
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-primary" />,
    title: "Continuous Learning & Improvement",
    description: "Our AI models continuously learn and adapt, providing increasingly accurate and effective assistance over time."
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
            Transformative <span className="gradient-text">AI Capabilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Explore how NextGenAINova's intelligent solutions can revolutionize customer engagement, automate processes, and provide deep insights for your business.
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
      </div>
    </section>
  );
};

export default Features;
