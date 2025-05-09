
import React from "react";
import { motion } from "framer-motion";
import { Star, ThumbsUp, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Alisha Khan",
    role: "Lead AI Researcher, Innovatech Labs",
    image: "alisha-khan",
    stars: 5,
    quote: "NextGenAINova's platform has been pivotal in our research. The advanced AI models and the ability to integrate complex datasets, including 3D visualizations, have accelerated our discovery process significantly. Their support is top-notch.",
    highlight: "Accelerated discovery with 3D visualizations."
  },
  {
    name: "Marcus Cole",
    role: "CEO, FutureBuild Construction",
    image: "marcus-cole",
    stars: 5,
    quote: "The custom platform NextGenAINova built for us revolutionized how we manage projects. The AI-driven insights and educational modules for our team have been invaluable. The pricing was very reasonable for the value delivered.",
    highlight: "Revolutionized project management."
  },
  {
    name: "Sofia Petrova",
    role: "Head of Product, EduSpark",
    image: "sofia-petrova",
    stars: 4,
    quote: "We partnered with NextGenAINova for their AI education services. Their tailored training programs have upskilled our team remarkably, enabling us to incorporate AI into our educational products effectively. Highly recommend their teaching solutions.",
    highlight: "Effectively upskilled our team."
  },
  {
    name: "Kenji Tanaka",
    role: "Chief Architect, QuantumLeap Solutions",
    image: "kenji-tanaka",
    stars: 5,
    quote: "The reliability and scalability of the AI solutions from NextGenAINova, backed by their Swiss Microsoft Partner affiliation, gave us the confidence to migrate our core systems. The transition was seamless, and the performance gains are impressive.",
    highlight: "Seamless migration and performance gains."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Success Stories from <span className="gradient-text">Our Clients</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Hear from industry leaders who have transformed their businesses with NextGenAINova's expertise in AI solutions, education, and platform development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 card-hover glow flex flex-col"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-muted-foreground italic text-lg mb-4 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-auto pt-4 border-t border-border/50">
                <div className="flex items-center text-sm text-primary">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  <span>{testimonial.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-muted/30 px-6 py-3 rounded-full shadow-sm">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-md font-medium">Join over 1,000 satisfied innovators and businesses.</span>
            <div className="flex -space-x-2">
              {['A', 'B', 'C', 'D', 'E'].map((letter, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/70 to-secondary/70 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  {letter}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
