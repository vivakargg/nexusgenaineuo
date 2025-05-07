const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description: "We analyze your business needs, technical landscape, and growth objectives to develop a tailored AI roadmap.",
      bgColor: "bg-primary",
      lineColor: "bg-primary"
    },
    {
      number: 2,
      title: "Design & Development",
      description: "Our experts create scalable, future-proof solutions using cutting-edge AI technologies and best practices.",
      bgColor: "bg-secondary",
      lineColor: "bg-secondary"
    },
    {
      number: 3,
      title: "Implementation & Optimization",
      description: "We deploy, test, and continuously optimize your AI solutions to deliver maximum business impact.",
      bgColor: "bg-accent",
      lineColor: ""
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider">Our Approach</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">How We Deliver Results</h2>
          <p className="text-lg text-neutral-800">
            Our proven methodology ensures we deliver consistent value at every step of your AI journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-md relative z-10">
                <div className={`w-12 h-12 flex items-center justify-center ${step.bgColor} text-white rounded-full font-bold text-xl mb-6`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-neutral-800">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className={`hidden md:block absolute top-1/2 left-full w-16 h-0.5 ${step.lineColor} transform -translate-y-1/2 -translate-x-5 z-0`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
