import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20 md:py-28">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/90" />
        <img 
          src="/images/tech-grid.svg" 
          alt="" 
          className="w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/logo.png" 
              alt="NextGenAiNova" 
              className="h-24 w-auto object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Build Smarter. Scale Faster. Secure Everything.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-neutral-100 max-w-3xl mx-auto">
            NextGenAiNova is your AI innovation partner—delivering expert consulting in AI development, no-code platforms, cloud infrastructure, MLOps, and cybersecurity. From prototype to production, we accelerate your journey to intelligent enterprise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                Let's Build Together
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white border-white backdrop-blur-sm">
                Book a Free Strategy Call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
