
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What makes NextGenAINova different from other AI platforms?",
    answer: "NextGenAINova combines cutting-edge AI technology with a specialized Node.js development environment. Unlike general-purpose AI tools, our platform is specifically designed for developers, with features like context-aware code completion, automated refactoring, and seamless deployment options. Our AI models are trained on vast repositories of high-quality code to provide the most relevant and accurate suggestions."
  },
  {
    question: "Do I need to be an AI expert to use the platform?",
    answer: "Not at all! NextGenAINova is designed to be intuitive and accessible for developers of all skill levels. The AI features work seamlessly in the background, providing suggestions and optimizations without requiring any AI expertise. You can focus on writing code while our AI handles the complex tasks of understanding context, suggesting improvements, and optimizing performance."
  },
  {
    question: "Can I integrate NextGenAINova with my existing tools and workflows?",
    answer: "Absolutely! NextGenAINova is built with integration in mind. We support seamless connections with popular version control systems like GitHub and GitLab, CI/CD pipelines, project management tools, and more. Our platform also offers APIs that allow you to extend functionality and connect with custom tools in your workflow."
  },
  {
    question: "How secure is my code on the NextGenAINova platform?",
    answer: "Security is our top priority. We implement bank-level encryption for all data, both in transit and at rest. Your code is never shared with third parties, and we maintain strict access controls. Our Enterprise plan includes additional security features like private deployments, audit logs, and compliance certifications for regulated industries."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer tiered support based on your plan. All users have access to our comprehensive documentation and community forums. Professional plan users receive priority email support with faster response times. Enterprise customers benefit from 24/7 dedicated support, including phone and video assistance, as well as a dedicated account manager for personalized guidance."
  },
  {
    question: "Can I try NextGenAINova before committing to a subscription?",
    answer: "Yes! We offer a 14-day free trial with full access to all features in our Professional plan. No credit card is required to start your trial. This gives you ample time to explore the platform, test the AI capabilities, and see how NextGenAINova can enhance your development workflow before making a decision."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Find answers to common questions about NextGenAINova's platform and services.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex bg-card border border-border rounded-lg p-6"
          >
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">Contact our support team</h3>
              <p className="text-muted-foreground mb-4">
                Our experts are available to answer any questions you might have.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:underline">
                  support@nextgenainova.com
                </a>
                <span className="text-muted-foreground">|</span>
                <a href="#" className="text-primary hover:underline">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
