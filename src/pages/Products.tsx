
import React, { useState, useEffect } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProductType } from '@/types/product';
import { Search } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products);
  
  // Extract unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  useEffect(() => {
    // Filter products based on search term and category
    const result = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory]);
  
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-ayu-beige py-16 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 text-center">
            Our Products
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium Ayurvedic products crafted with care to support your wellness journey.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row gap-6 justify-between mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-ayu-sage focus:border-ayu-green"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-ayu-green hover:bg-ayu-green/90 text-white"
                    : "border-ayu-sage text-foreground hover:bg-ayu-cream"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
