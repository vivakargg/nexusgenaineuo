
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Users } from "lucide-react";

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
            Our Strategic <span className="gradient-text">Partnerships</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We collaborate with industry leaders to bring you the best AI solutions, backed by trusted expertise and global standards.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-xl p-8 md:p-12 border border-border shadow-xl card-hover glow max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8 flex justify-center">
              <div className="p-6 rounded-full bg-gradient-to-br from-primary to-secondary inline-block shadow-lg">
                <Briefcase className="h-16 w-16 text-white" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Partnered with a Premier Swiss-based Microsoft Partner
              </h3>
              <p className="text-muted-foreground mb-6">
                Our collaboration with a leading Swiss-based company, recognized as a Microsoft Partner, allows us to deliver AI solutions that meet the highest standards of quality, security, and innovation. This partnership combines our AI expertise with their established excellence in technology services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Access to Microsoft Technologies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Swiss Quality Standards</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Global Expertise Network</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Enhanced Solution Reliability</span>
                </div>
              </div>
              <div className="mt-6">
                <img  class="h-8" alt="Microsoft Partner Logo" src="https://images.unsplash.com/photo-1671944378859-08bcfa15a280" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
