
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X, BookOpen, Settings } from "lucide-react";

const pricingPlans = [
  {
    name: "AI Solutions Starter",
    price: "$49",
    description: "Perfect for individuals and small AI projects",
    features: [
      "Basic AI Model Access",
      "Limited API Calls",
      "1 Concurrent Project",
      "Community Support",
      "5GB Data Storage",
    ],
    notIncluded: [
      "Advanced AI Models",
      "Higher API Limits",
      "Team Collaboration",
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    name: "AI Solutions Pro",
    price: "$99",
    description: "Ideal for professional AI applications and teams",
    features: [
      "Everything in AI Starter",
      "Advanced AI Models",
      "Increased API Calls",
      "5 Concurrent Projects",
      "Priority Support",
      "20GB Data Storage",
      "Team Collaboration (up to 5)",
    ],
    notIncluded: [
      "Enterprise Security Features",
      "Dedicated AI Resources",
    ],
    popular: true,
    buttonText: "Get Started",
    buttonVariant: "default",
  },
  {
    name: "Custom Services",
    price: "Contact Us",
    description: "Tailored AI training and platform development",
    features: [
      "Custom AI Implementation Training",
      "Bespoke Platform Development",
      "Dedicated Project Manager",
      "Scalable Architecture Design",
      "Ongoing Support & Maintenance",
      "Flexible Pricing Options"
    ],
    notIncluded: [],
    popular: false,
    buttonText: "Request a Quote",
    buttonVariant: "outline",
    icon: <div className="flex items-center justify-center space-x-2 mb-2"><BookOpen className="h-5 w-5 text-secondary" /><Settings className="h-5 w-5 text-accent" /></div>
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Flexible <span className="gradient-text">Pricing Options</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the plan that fits your needs, from AI solutions to custom training and platform development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-card border ${
                plan.popular ? "border-primary" : "border-border"
              } rounded-xl overflow-hidden shadow-lg relative card-hover flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                {plan.icon && <div className="mb-2">{plan.icon}</div>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Contact Us" && <span className="text-muted-foreground ml-2">/month</span>}
                </div>
                <p className="text-muted-foreground mb-6 flex-grow">{plan.description}</p>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full mb-6 mt-auto"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
                
                <div className="space-y-3">
                  <p className="font-medium">Included features:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium mt-4">Not included:</p>
                      {plan.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-start text-muted-foreground">
                          <X className="h-5 w-5 text-muted-foreground mr-2 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            All plans are customizable. Contact us for a tailored package that perfectly fits your requirements.
          </p>
          <Button size="lg" variant="outline">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
