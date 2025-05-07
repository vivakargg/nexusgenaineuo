import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";

const PricingCard = ({ 
  plan, 
  isPopular 
}: { 
  plan: typeof PRICING_PLANS[number]; 
  isPopular: boolean 
}) => {
  const isFree = plan.priceValue === 0;
  const isEnterprise = plan.id === 'enterprise';
  
  let cardClasses = "backdrop-blur-md bg-white/10 border-white/20";
  let badgeClasses = "";
  
  if (isPopular) {
    cardClasses = "backdrop-blur-md bg-blue-900/30 border-blue-400/30 transform scale-105 z-10";
    badgeClasses = "bg-gradient-to-r from-blue-500 to-cyan-400";
  } else if (isFree) {
    cardClasses = "backdrop-blur-md bg-emerald-900/20 border-emerald-400/30";
    badgeClasses = "bg-gradient-to-r from-emerald-500 to-green-400";
  }
  
  return (
    <div className={`pricing-card rounded-xl border shadow-xl hover:shadow-blue-900/20 hover:shadow-2xl transition-all duration-300 ${cardClasses}`}>
      {isPopular && (
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${badgeClasses} text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg`}>
          Most Popular
        </div>
      )}
      {isFree && (
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${badgeClasses} text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg`}>
          Limited Spots
        </div>
      )}
      <div className="p-6 md:p-8 border-b border-white/10">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{plan.name}</h3>
        <p className="text-slate-300 mb-4 text-sm md:text-base">{plan.description}</p>
        <div className="flex items-end mb-6">
          <span className={`text-3xl md:text-4xl font-bold text-white ${isFree ? "bg-gradient-to-br from-emerald-400 to-green-300 bg-clip-text text-transparent" : ""}`}>
            {plan.price}
          </span>
          {plan.priceUnit && <span className="text-slate-300 ml-2 mb-1">{plan.priceUnit}</span>}
        </div>
        {isEnterprise ? (
          <a href="#contact">
            <Button 
              variant="default" 
              className={`w-full bg-gradient-to-r shadow-lg shadow-blue-900/30 ${
                isPopular ? "from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600" : "from-slate-700 to-slate-600 hover:from-slate-800 hover:to-slate-700"
              }`}
            >
              {plan.buttonText}
            </Button>
          </a>
        ) : (
          <Link href={`/checkout/${plan.id}`}>
            <Button 
              variant="default" 
              className={`w-full shadow-lg ${
                isPopular 
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-blue-900/30" 
                  : isFree
                    ? "bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 shadow-emerald-900/30"
                    : "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-800 hover:to-slate-700 shadow-slate-900/20"
              }`}
            >
              {plan.buttonText}
            </Button>
          </Link>
        )}
      </div>
      <div className="p-8">
        <h4 className="font-semibold mb-4 text-white">What's included:</h4>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start text-slate-300">
              <CheckCircle2 className={`h-5 w-5 mt-0.5 mr-2 flex-shrink-0 ${
                isPopular ? "text-blue-400" : isFree ? "text-emerald-400" : "text-slate-400"
              }`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/wave-pattern.svg" 
          alt="" 
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-medium uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white">Choose Your AI Journey</h2>
          <p className="text-lg text-slate-300">
            Flexible pricing options designed to fit businesses at every stage of AI adoption.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard 
              key={plan.id} 
              plan={plan} 
              isPopular={index === 2} 
            />
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-slate-300 mb-6">
            Need a custom solution? We offer flexible packages tailored to your specific needs and goals.
          </p>
          <a href="#contact" className="inline-flex items-center font-medium bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:opacity-90 transition duration-300">
            Contact us for custom pricing <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
