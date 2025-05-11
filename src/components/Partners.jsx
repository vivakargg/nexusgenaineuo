
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap } from "lucide-react";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Strategic <span className="gradient-text">Alliance</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We collaborate with industry leaders to bring you premier AI solutions, underpinned by trusted expertise and global standards.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-card rounded-xl p-8 md:p-12 border border-border shadow-2xl card-hover glow max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/3 flex flex-col items-center text-center"
            >
              <div className="p-5 rounded-full bg-gradient-to-br from-primary to-secondary inline-block shadow-lg mb-6 transform transition-transform hover:scale-110">
                <Zap className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Switzerland-based Microsoft Partner</h3>
              <p className="text-sm text-muted-foreground mb-4">Pioneering Excellence & Global Innovation</p>
              <div className="mt-2 w-full max-w-[200px] h-auto">
                 <img  class="w-full h-auto object-contain" alt="Official Microsoft Partner Network Logo - Advanced Specialization" src="https://images.unsplash.com/photo-1671944378859-08bcfa15a280" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:w-2/3"
            >
              <h4 className="text-3xl font-semibold mb-6 text-primary">
                Elevating Solutions Through Premier Partnership
              </h4>
              <p className="text-muted-foreground mb-6 text-lg">
                Our strategic alliance with a distinguished <span className="font-semibold text-foreground">Switzerland-based Microsoft Partner</span> empowers us to deliver AI solutions that epitomize quality, security, and innovation. This synergy melds our cutting-edge AI proficiency with their established excellence in enterprise technology services, ensuring you receive robust and future-ready solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-1" />
                  <span className="text-md">Access to Advanced Microsoft Cloud & AI Technologies, including Azure OpenAI.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-1" />
                  <span className="text-md">Adherence to Rigorous Switzerland Quality & Global Data Privacy Standards (GDPR compliant).</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-1" />
                  <span className="text-md">Integration with a Global Network of Certified Technology Experts and MVPs.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-1" />
                  <span className="text-md">Enhanced Solution Reliability, Scalability, and Enterprise-Grade Security.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
