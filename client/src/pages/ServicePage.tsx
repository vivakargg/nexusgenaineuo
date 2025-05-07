import { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import { apiRequest } from '@/lib/queryClient';
import { ServicePage as ServicePageType } from '@/lib/auth';
import { ServiceTemplate } from '@/components/services/ServiceTemplate';

const ServicePage = () => {
  const [, params] = useRoute('/services/:slug');
  const [service, setService] = useState<ServicePageType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      fetchService(params.slug);
    }
  }, [params?.slug]);

  const fetchService = async (slug: string) => {
    try {
      const response = await apiRequest('GET', `/api/services/${slug}`);
      const data = await response.json();
      setService(data);
    } catch (error) {
      console.error('Failed to fetch service:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 flex items-center justify-center">
        <div className="text-white text-xl">Service not found</div>
      </div>
    );
  }

  return <ServiceTemplate service={service} />;
};

export default ServicePage; 