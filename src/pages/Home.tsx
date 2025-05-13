
import React from 'react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = products.slice(0, 3);
  
  return (
    <>
      <Hero 
        title="Natural Wellness Inspired By Ayurvedic Traditions"
        subtitle="Discover our premium collection of herbal products crafted for modern living while honoring ancient wisdom."
        buttonText="Explore Products"
        buttonLink="/products"
        image="https://images.unsplash.com/photo-1631000047593-6939c7705c9a"
      />
      
      <section className="bg-ayu-cream py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Featured Products</h2>
            <p className="text-gray-600">Discover our most popular products, carefully crafted with premium ingredients to support your wellness journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-ayu-green hover:bg-ayu-green/90 text-white">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Inspired by Ayurvedic Wisdom</h2>
              <p className="text-gray-600 mb-5">
                At AyuSpirit, we blend ancient Ayurvedic principles with modern wellness practices to create products that nurture balance in body, mind, and spirit.
              </p>
              <p className="text-gray-600 mb-8">
                Each of our products is thoughtfully formulated with premium herbs and botanicals, sourced from trusted organic farms and processed with care to preserve their natural goodness.
              </p>
              <Button asChild variant="outline" className="border-ayu-green text-ayu-green hover:bg-ayu-green hover:text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513315945-4f9b307d875d"
                alt="Ayurvedic ingredients"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-ayu-beige p-4 md:p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-serif text-xl mb-2 text-ayu-green">100% Natural</p>
                <p className="text-sm text-gray-600">No artificial ingredients, preservatives or additives</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-ayu-beige">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Discover the experiences of those who have incorporated AyuSpirit into their wellness routines.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The Ashwagandha supplement has been a game-changer for my stress levels. I feel more balanced and energetic throughout the day."
              author="Sarah Johnson"
              role="Yoga Instructor"
              image="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
            />
            <TestimonialCard 
              quote="I've tried many turmeric supplements, but AyuSpirit's Turmeric & Ginger Tonic is by far the most effective for my joint pain."
              author="Michael Robinson"
              role="Fitness Coach"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            />
            <TestimonialCard 
              quote="The Rose & Sandalwood Face Oil has transformed my skin. It's moisturizing without feeling heavy, and the scent is divine."
              author="Emily Chen"
              role="Skincare Enthusiast"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-ayu-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Join Our Wellness Journey</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Subscribe to our newsletter for exclusive offers, wellness tips, and new product announcements.
          </p>
          
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md flex-grow text-foreground focus:outline-none"
              required
            />
            <Button className="bg-white text-ayu-green hover:bg-ayu-cream whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
