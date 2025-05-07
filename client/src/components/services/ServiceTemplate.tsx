import { ServicePage } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { ChevronRight, Check } from 'lucide-react';

interface ServiceTemplateProps {
  service: ServicePage;
}

export function ServiceTemplate({ service }: ServiceTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          {service.coverImage && (
            <img
              src={service.coverImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {service.icon && (
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-16 h-16 mb-6"
              />
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/80">
              {service.content.split('\\n')[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="prose prose-invert">
            {service.content.split('\\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Features & Benefits */}
          <div className="space-y-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <Check className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Benefits
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <ChevronRight className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/80 mb-6">
                Contact us today to learn how we can help transform your business
                with {service.title}.
              </p>
              <Button size="lg" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 