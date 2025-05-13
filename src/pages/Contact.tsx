
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactDetails = [
    {
      icon: <Mail className="text-ayu-green" />,
      title: "Email Us",
      details: "info@ayuspirit.com",
      action: "mailto:info@ayuspirit.com"
    },
    {
      icon: <Phone className="text-ayu-green" />,
      title: "Call Us",
      details: "+1 (234) 567-890",
      action: "tel:+1234567890"
    },
    {
      icon: <MapPin className="text-ayu-green" />,
      title: "Visit Us",
      details: "123 Wellness Avenue, Harmony City, 12345",
      action: "https://maps.google.com"
    },
    {
      icon: <Clock className="text-ayu-green" />,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      action: null
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-ayu-beige py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to us using any of the methods below.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-serif font-medium mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Whether you have a question about our products, need help with an order, or want to discuss wholesale opportunities, our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="w-12 h-12 bg-ayu-green/10 rounded-full flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-lg">{item.title}</h3>
                      {item.action ? (
                        <a 
                          href={item.action} 
                          className="text-gray-600 hover:text-ayu-green"
                          target={item.action.startsWith('http') ? '_blank' : undefined}
                          rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif font-medium mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-ayu-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <h3 className="text-lg font-medium mb-2">What are shipping costs and times?</h3>
              <p className="text-gray-600">We offer free standard shipping on all orders over $50. Delivery typically takes 3-5 business days depending on your location.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <h3 className="text-lg font-medium mb-2">Do you offer international shipping?</h3>
              <p className="text-gray-600">Yes, we ship to select international destinations. Shipping costs and delivery times vary by country.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <h3 className="text-lg font-medium mb-2">What is your return policy?</h3>
              <p className="text-gray-600">If you're not satisfied with your purchase, we accept returns within 30 days of delivery for a full refund or exchange.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
