
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  image
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16">
      <div 
        className="absolute inset-0 z-0 bg-ayu-light"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ayu-light via-ayu-light/90 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 hero-text-shadow animate-fadeIn">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-slideUp">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-ayu-green hover:bg-ayu-green/90 text-white animate-slideUp"
            >
              <Link to={buttonLink}>
                {buttonText}
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-ayu-green text-ayu-green hover:bg-ayu-green hover:text-white animate-slideUp"
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
