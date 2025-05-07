import { Phone, Mail, MapPin } from "lucide-react";
import { FOUNDER_INFO } from "@/lib/constants";

const ContactItem = ({ 
  icon: Icon, 
  title, 
  children 
}: { 
  icon: React.ElementType; 
  title: string; 
  children: React.ReactNode 
}) => (
  <div className="flex items-center">
    <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mr-3">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <p className="font-medium">{title}</p>
      {children}
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg mb-6 bg-neutral-100">
                <div className="aspect-[4/5] relative">
                  <img 
                    key="founder-image"
                    src={`/images/founder.jpg?cache=${Math.random()}`}
                    alt="Vivakar Gazzela, Founder of NextGenAiNova" 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <span className="text-primary font-medium uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Meet Our Founder</h2>
              <p className="text-lg text-neutral-800 mb-6">
                Vivakar Gazzela founded NextGenAiNova with a vision to democratize access to cutting-edge AI technologies for businesses of all sizes. With extensive experience in AI development, cloud infrastructure, and cybersecurity, Vivakar has helped numerous organizations transform their operations through intelligent automation.
              </p>
              <p className="text-lg text-neutral-800 mb-8">
                Based in {FOUNDER_INFO.location}, NextGenAiNova works with clients globally to deliver AI solutions that drive measurable business results. Our team of experts combines deep technical knowledge with strategic business acumen to ensure every AI implementation delivers maximum value.
              </p>
              
              <div className="space-y-4">
                <ContactItem icon={Phone} title="Phone">
                  <p>
                    <a 
                      href={`tel:${FOUNDER_INFO.phone}`} 
                      className="text-primary hover:text-primary-dark"
                    >
                      {FOUNDER_INFO.phoneFormatted}
                    </a>
                  </p>
                </ContactItem>
                
                <ContactItem icon={Mail} title="Email">
                  <p>
                    <a 
                      href={`mailto:${FOUNDER_INFO.email}`} 
                      className="text-primary hover:text-primary-dark"
                    >
                      {FOUNDER_INFO.email}
                    </a>
                  </p>
                </ContactItem>
                
                <ContactItem icon={MapPin} title="Location">
                  <p>{FOUNDER_INFO.location}</p>
                </ContactItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
