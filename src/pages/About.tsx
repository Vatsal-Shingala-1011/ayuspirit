
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Quality & Purity",
      description: "We source the finest ingredients and maintain strict quality control standards throughout our production process."
    },
    {
      title: "Traditional Wisdom",
      description: "Our formulations are inspired by ancient Ayurvedic texts and traditional knowledge passed down through generations."
    },
    {
      title: "Modern Science",
      description: "We combine traditional wisdom with scientific research to create products that meet contemporary wellness needs."
    },
    {
      title: "Sustainability",
      description: "We are committed to sustainable sourcing and environmentally friendly packaging to minimize our ecological footprint."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-ayu-beige py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 text-center">
            Our Story
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Discover the journey behind AyuSpirit and our mission to bring authentic Ayurvedic wellness to modern living.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Our Beginning</h2>
              <p className="text-gray-600 mb-5">
                AyuSpirit began with a simple vision: to make authentic Ayurvedic wellness accessible to everyone. Founded in 2018 by Dr. Anita Sharma, a practitioner of Ayurvedic medicine with over 15 years of experience, our journey started with a small collection of handcrafted herbal formulations.
              </p>
              <p className="text-gray-600">
                What began as a passion project quickly grew into something much larger as more people discovered the benefits of our products. Today, AyuSpirit offers a comprehensive range of wellness solutions that honor ancient wisdom while meeting the needs of modern lifestyles.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1562546106-b9cb3a76a206"
                alt="Ayurvedic herbs and ingredients"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-ayu-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-ayu-green/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-ayu-green" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
                alt="Herbal product preparation"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Our Process</h2>
              <p className="text-gray-600 mb-5">
                Each AyuSpirit product is crafted following authentic Ayurvedic principles combined with modern techniques to ensure maximum efficacy. We carefully select organic and wildcrafted herbs, many of which are sourced directly from trusted farmers.
              </p>
              <p className="text-gray-600 mb-5">
                Our formulations undergo rigorous quality testing at every stage of production. We prioritize small-batch processing to maintain the integrity of our ingredients and ensure that each product delivers consistent benefits.
              </p>
              <p className="text-gray-600">
                From herb to shelf, we maintain transparent practices and uphold the highest standards to bring you wellness products you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-ayu-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">Become Part of Our Story</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            We're on a mission to help people discover the time-tested benefits of Ayurvedic wellness in their everyday lives.
          </p>
          <Button 
            asChild 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-ayu-green"
          >
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
