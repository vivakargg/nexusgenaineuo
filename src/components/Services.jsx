
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Settings, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceItems = [
  {
    icon: <Brain className="h-12 w-12 text-primary" />,
    title: "AI Solutions Development",
    description: "We design and develop cutting-edge AI solutions tailored to your business needs, leveraging advanced models for data analysis, automation, and intelligent insights.",
    linkText: "Explore AI Solutions",
    linkHref: "#ai-solutions"
  },
  {
    icon: <BookOpen className="h-12 w-12 text-secondary" />,
    title: "AI Implementation Training",
    description: "Empower your team with the knowledge to implement and manage AI. Our comprehensive training programs cover everything from basic concepts to advanced AI integration strategies.",
    linkText: "Learn More About Training",
    linkHref: "#contact"
  },
  {
    icon: <Settings className="h-12 w-12 text-accent" />,
    title: "Custom Platform Building",
    description: "Need a specialized platform? We build robust, scalable, and AI-ready platforms from scratch, delivered at a reasonable rate to fit your budget and vision.",
    linkText: "Discuss Your Platform",
    linkHref: "#contact"
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Comprehensive <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From AI-powered solutions and expert training to custom platform development, we provide end-to-end services to drive your success.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-8 border border-border card-hover glow flex flex-col"
            >
              <div className="mb-6 p-4 rounded-lg bg-primary/10 inline-block self-start">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
              <Button asChild variant="link" className="p-0 self-start text-primary">
                <a href={service.linkHref}>{service.linkText} &rarr;</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
