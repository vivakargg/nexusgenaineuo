import { CheckCircle2, ArrowRight } from "lucide-react";

const ServiceCard = ({ 
  iconSrc, 
  title, 
  description, 
  features, 
  bgGradient,
  buttonGradient
}: {
  iconSrc: string;
  title: string;
  description: string;
  features: string[];
  bgGradient: string;
  buttonGradient: string;
}) => (
  <div className={`relative overflow-hidden rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-100 ${bgGradient} group`}>
    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500"></div>
    <div className="mb-6 w-16 h-16 relative z-10 bg-white/10 rounded-lg p-3 backdrop-blur-sm ring-1 ring-white/20 shadow-lg">
      <img src={iconSrc} alt={title} className="w-full h-full object-contain drop-shadow-lg" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-white/90 mb-4">
      {description}
    </p>
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start text-white/90">
          <CheckCircle2 className="h-5 w-5 text-white mt-0.5 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a href="#contact" className={`text-white font-medium inline-flex items-center hover:opacity-90 ${buttonGradient} py-2 px-4 rounded-lg text-sm transition-all duration-300 backdrop-blur-sm`}>
      Learn more <ArrowRight className="ml-2 h-4 w-4" />
    </a>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      iconSrc: "/images/ai-development.svg",
      title: "AI Tech Development",
      description: "Crafting smart, scalable solutions using the latest in generative AI, LLMs, and edge intelligence.",
      features: [
        "Custom LLM implementation",
        "Edge AI solutions",
        "Generative AI applications"
      ],
      bgGradient: "bg-gradient-to-br from-blue-700 to-blue-500",
      buttonGradient: "bg-blue-600 hover:bg-blue-700"
    },
    {
      iconSrc: "/images/no-code.svg",
      title: "No-Code/Low-Code Platforms",
      description: "Empowering businesses to innovate rapidly without writing a single line of code.",
      features: [
        "Visual development tools",
        "Process automation",
        "Rapid prototyping"
      ],
      bgGradient: "bg-gradient-to-br from-purple-700 to-fuchsia-600",
      buttonGradient: "bg-purple-600 hover:bg-purple-700"
    },
    {
      iconSrc: "/images/cloud-mlops.svg",
      title: "Cloud Infrastructure & MLOps",
      description: "Automating model training, deployment, and monitoring across secure, cost-efficient cloud-native environments.",
      features: [
        "CI/CD for ML models",
        "Kubernetes orchestration",
        "Model monitoring"
      ],
      bgGradient: "bg-gradient-to-br from-cyan-700 to-emerald-600",
      buttonGradient: "bg-teal-600 hover:bg-teal-700"
    },
    {
      iconSrc: "/images/cybersecurity.svg",
      title: "Cybersecurity by Design",
      description: "Embedding zero-trust architecture and AI-driven threat detection into every layer of digital transformation.",
      features: [
        "Zero-trust implementation",
        "AI threat detection",
        "Secure DevOps practices"
      ],
      bgGradient: "bg-gradient-to-br from-red-700 to-orange-600",
      buttonGradient: "bg-red-600 hover:bg-red-700"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 opacity-10 z-0">
        <img 
          src="/images/circuit-pattern.svg" 
          alt="" 
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-medium uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Comprehensive AI Consulting Services</h2>
          <p className="text-lg text-neutral-800">
            We provide end-to-end solutions to transform your business with cutting-edge AI technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
