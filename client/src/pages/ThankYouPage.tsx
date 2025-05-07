import { Link } from "wouter";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | NextGenAiNova</title>
        <meta name="description" content="Thank you for your purchase. We're excited to work with you on your AI journey." />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
          <p className="text-xl mb-8">
            We're excited to partner with you on your AI journey. Our team will contact you shortly to schedule your first strategy session and get started on implementing your selected services.
          </p>
          <p className="text-lg mb-12">
            In the meantime, feel free to prepare any questions or specific needs you'd like to discuss during our initial consultation.
          </p>
          <div className="space-x-4">
            <Link href="/">
              <Button size="lg">
                Return to Home
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYouPage;
