import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const subscribeFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  planId: z.string(),
  additionalInfo: z.string().optional(),
});

export type SubscribeFormValues = z.infer<typeof subscribeFormSchema>;

export function useSubscribeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      planId: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: SubscribeFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/subscribe", data);
      
      if (!response.ok) {
        throw new Error("Failed to submit subscription request");
      }
      
      toast({
        title: "Subscription request submitted!",
        description: "We'll get back to you shortly to set up your account.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Subscription error:", error);
      
      toast({
        title: "Error submitting request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit,
  };
}
