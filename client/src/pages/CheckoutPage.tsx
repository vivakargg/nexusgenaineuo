import { useEffect, useState } from "react";
import { useRoute, Link, useLocation } from "wouter";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PRICING_PLANS } from "@/lib/constants";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";

// Form schema for signup
const signupFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().optional(),
});

type SignupFormValues = z.infer<typeof signupFormSchema>;

const RegistrationForm = ({ 
  plan, 
  onSuccess 
}: { 
  plan: typeof PRICING_PLANS[number],
  onSuccess: () => void 
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, navigate] = useLocation();
  
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/subscribe", {
        ...data,
        planId: plan.id,
        additionalInfo: data.message,
      });
      
      if (response.ok) {
        toast({
          title: "Registration Successful",
          description: "Thank you for your interest. We'll contact you shortly.",
        });
        onSuccess();
      } else {
        const errorData = await response.json();
        toast({
          title: "Registration Failed",
          description: errorData.error || "Failed to process your request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register for {plan.name} Plan</CardTitle>
        <CardDescription>
          Fill out this form to apply for the {plan.name} plan. Our team will contact you soon.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Company Ltd." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tell us about your project (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Brief description of your project or requirements" 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : `Register for ${plan.name} Plan`}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

const PlanDetails = ({ plan }: { plan: typeof PRICING_PLANS[number] }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>{plan.name} Plan</CardTitle>
      <CardDescription>
        {plan.description}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-end mb-4">
        <span className="text-3xl font-bold">{plan.price}</span>
        {plan.priceUnit && <span className="text-neutral-600 ml-2 mb-1">{plan.priceUnit}</span>}
      </div>
      <h4 className="font-semibold mb-3">What's included:</h4>
      <ul className="space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const CheckoutPage = () => {
  const [match, params] = useRoute("/checkout/:planId");
  const [plan, setPlan] = useState<typeof PRICING_PLANS[number] | null>(null);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);

  useEffect(() => {
    if (params?.planId) {
      const selectedPlan = PRICING_PLANS.find(p => p.id === params.planId);
      if (selectedPlan) {
        setPlan(selectedPlan);
      }
    }
  }, [params]);
  
  if (!plan) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Plan not found</h1>
          <p className="mb-6">The requested plan could not be found.</p>
          <Link href="/#pricing">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Pricing
            </Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const handleRegistrationSuccess = () => {
    setRegistrationSuccessful(true);
  };

  // Get custom title based on plan type
  const getPageTitle = () => {
    if (plan.id === 'free-poc') {
      return "Apply for Free POC";
    } else if (plan.id === 'enterprise') {
      return "Request Enterprise Quote";
    } else {
      return `Register for ${plan.name} Plan`;
    }
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle()} | NextGenAiNova</title>
        <meta name="description" content={`Register for the ${plan.name} Plan with NextGenAiNova.`} />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/#pricing" className="inline-flex items-center text-primary hover:text-primary/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Pricing
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">{getPageTitle()}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <PlanDetails plan={plan} />
            </div>
            
            <div>
              {registrationSuccessful ? (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
                    <p className="mb-6">
                      {plan.id === 'free-poc' 
                        ? "Thank you for your interest in our Free POC program. We'll review your application and contact you shortly."
                        : "Thank you for your registration. Our team will contact you soon to discuss the next steps."}
                    </p>
                    <Link href="/">
                      <Button>Return to Home</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <RegistrationForm 
                  plan={plan} 
                  onSuccess={handleRegistrationSuccess} 
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
