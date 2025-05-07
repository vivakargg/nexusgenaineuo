import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "NextGenAiNova helped us implement a custom LLM solution that increased our customer service efficiency by 78%. Their expertise in AI and no-code platforms allowed us to deploy the solution in half the expected time.",
    author: "Sarah Johnson",
    title: "CTO, TechInnovate Inc."
  },
  {
    quote: "The cloud infrastructure and MLOps pipeline NextGenAiNova built for us has transformed how we develop and deploy AI models. We've reduced our deployment time from weeks to hours while maintaining rigorous security standards.",
    author: "Michael Rodriguez",
    title: "VP of Engineering, DataFlow Systems"
  },
  {
    quote: "As a startup, we needed an AI partner who could help us build secure, scalable solutions without breaking the bank. NextGenAiNova delivered beyond our expectations, helping us secure our Series A funding based on the strength of our AI technology.",
    author: "Priya Patel",
    title: "Founder, AIStartup"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    goToSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    goToSlide(newIndex);
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">What Our Clients Say</h2>
          <p className="text-lg text-neutral-800">
            Hear from businesses that have transformed with our AI consulting services.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                ref={trackRef}
                className="flex transition-transform duration-500 ease-in-out"
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <div className="flex items-center mb-6">
                        <div className="text-amber-400 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-lg italic text-neutral-800 mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-neutral-600 text-sm">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={prevSlide}
              disabled={isAnimating}
              variant="outline" 
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-white w-10 h-10 rounded-full shadow-md text-primary z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              onClick={nextSlide}
              disabled={isAnimating}
              variant="outline" 
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white w-10 h-10 rounded-full shadow-md text-primary z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isAnimating}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index 
                      ? "bg-primary opacity-100" 
                      : "bg-neutral-300 opacity-50 hover:bg-primary-light hover:opacity-75"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
