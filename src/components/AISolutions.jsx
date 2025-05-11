
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Users, Zap, FileText, Headphones as Headset } from 'lucide-react';

const AISolutions = () => {
  return (
    <section id="ai-solutions" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Engage, Support, and Grow with <span className="gradient-text">Intelligent AI</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our AI solutions are designed to enhance customer interactions, streamline support, and uncover new opportunities for your business.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Multi-Conversational Website Bots</h3>
                  <p className="text-muted-foreground">
                    Deploy smart chatbots that engage visitors in meaningful conversations, answer queries, and guide them through your offerings.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10">
                  <Headset className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cost-Effective AI Customer Support</h3>
                  <p className="text-muted-foreground">
                    Automate responses to common customer issues, freeing up your human agents for complex cases and significantly reducing support costs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automated Lead Generation & Qualification</h3>
                  <p className="text-muted-foreground">
                    Our AI identifies potential leads from interactions, qualifies them based on predefined criteria, and seamlessly integrates with your CRM.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button size="lg" className="mr-4">Explore AI Solutions</Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl transform -rotate-6"></div>
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
                <div className="p-6 bg-card/80 backdrop-blur-sm border-b border-border">
                  <div className="flex items-center">
                    <Bot className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">AI-Powered Assistant Example</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">User (SMB Owner) asks:</p>
                    <p className="font-medium">"How can I identify my most valuable customer segments based on recent purchase history and engagement?"</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">AI Response (Customer Segmentation):</p>
                        <div className="bg-muted/30 rounded-lg p-4">
                          <p className="text-sm">
                            "Based on your data, I've identified three key segments:
                            <br />1. <strong>High-Value Repeat Buyers:</strong> Frequent purchasers with high average order value. (Recommend: Loyalty programs, exclusive offers)
                            <br />2. <strong>Recently Engaged Prospects:</strong> Showed interest in specific services but haven't purchased. (Recommend: Targeted follow-up campaigns)
                            <br />3. <strong>Occasional Large Spenders:</strong> Infrequent but high-value transactions. (Recommend: Personalized outreach for big-ticket items)"
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
                        <FileText className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">AI Assistant (Legal Context Example):</p>
                        <div className="bg-muted/30 rounded-lg p-4">
                           <p className="text-sm">
                            "User asks: 'Summarize the key changes in the new data privacy law effective Q3 2025.'
                            <br />AI provides a concise summary, highlighting critical compliance points and potential impacts, drawing from its continuously updated legal knowledge base."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
