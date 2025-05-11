
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
    question: "What data is NextGenAINova's AI trained on?",
    answer: "Our AI models are trained on a diverse and extensive range of datasets, carefully curated for relevance and quality. This includes vast repositories of publicly available information, specialized industry-specific data, and, where applicable and with explicit consent, anonymized data from user interactions to improve specific functionalities. For personal AI assistants dealing with sensitive fields like law or medicine, training involves rigorously vetted professional literature, case studies, and regularly updated official guidelines to ensure accuracy and reliability."
  },
  {
    question: "What is the accuracy of your AI models?",
    answer: "Accuracy is a key focus at NextGenAINova. Our models achieve high levels of accuracy, which varies depending on the specific task and the complexity of the data. For instance, our conversational AI for customer support typically resolves over 80% of common queries accurately on the first interaction. For more specialized tasks like legal or medical information retrieval, we aim for precision and recall rates exceeding 90-95% on validated test sets. We continuously monitor and refine our models to maintain and improve these accuracy benchmarks, incorporating user feedback and new data."
  },
  {
    question: "How do multi-conversational bots engage website visitors?",
    answer: "Our multi-conversational bots are designed to provide a natural and engaging experience. They can understand context over multiple turns of conversation, ask clarifying questions, and personalize interactions based on visitor behavior. They can proactively offer assistance, guide users to relevant information, qualify leads, and even complete simple transactions, all while maintaining a human-like conversational flow."
  },
  {
    question: "How does AI customer support save costs?",
    answer: "AI-powered customer support significantly reduces costs by automating responses to frequently asked questions and routine issues. This means fewer human agents are needed for tier-1 support, lowering staffing costs. Bots can operate 24/7, reducing the need for after-hours support staff. They also improve first-contact resolution rates, minimizing follow-ups and escalations, which further optimizes operational expenses."
  },
  {
    question: "How does AI assist in lead generation?",
    answer: "Our AI analyzes website visitor interactions in real-time to identify patterns and behaviors indicative of potential leads. It can engage visitors with targeted questions, qualify their interest and needs, collect contact information, and even schedule demos or appointments. This automated process ensures no potential lead is missed and provides your sales team with pre-qualified prospects, increasing conversion rates."
  },
  {
    question: "How do personal AI assistants handle complex, ever-updating information like laws or medical knowledge?",
    answer: "Personal AI assistants for specialized fields are built on knowledge bases that are continuously updated with the latest information from verified sources. We employ sophisticated data ingestion and validation pipelines. The AI uses Natural Language Processing (NLP) and understanding (NLU) to interpret complex queries and retrieve the most relevant and current information, often providing sources or confidence scores for its answers."
  },
  {
    question: "How does customer segmentation for SMBs work?",
    answer: "Our AI analyzes various data points for Small to Medium Businesses (SMBs), such as their industry, size, online presence, stated needs (from interactions), and pain points. It then groups similar SMBs into distinct segments. This allows you to tailor your marketing messages, product offerings, and sales approaches more effectively to each segment, increasing relevance and engagement."
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
            Find answers to common questions about NextGenAINova's AI solutions and capabilities.
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
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pt-2 pb-4">
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
            className="inline-flex bg-card border border-border rounded-lg p-6 shadow-lg"
          >
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">Contact our support team</h3>
              <p className="text-muted-foreground mb-4">
                Our experts are available to answer any questions you might have.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                <a href={`mailto:vivakar@nextgenainova.com?subject=Support Inquiry`} className="text-primary hover:underline">
                  vivakar@nextgenainova.com
                </a>
                <span className="text-muted-foreground hidden sm:inline">|</span>
                <a href="tel:+91-9160484986" className="text-primary hover:underline">
                  +91-9160484986
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
