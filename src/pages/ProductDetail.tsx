
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { ProductType } from '@/types/product';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    setTimeout(() => {
      if (id) {
        const foundProduct = products.find(p => p.id === Number(id));
        setProduct(foundProduct || null);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  const handleContactClick = () => {
    toast({
      title: "Product Inquiry",
      description: `Your inquiry about ${product?.name} has been noted. Please complete the contact form for more information.`,
    });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-pulse">
          <p className="text-gray-500">Loading product details...</p>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen pt-20 container mx-auto px-4">
        <div className="text-center py-16">
          <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
          <p className="text-gray-500 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-ayu-green hover:bg-ayu-green/90 text-white">
            <Link to="/products">Browse All Products</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10">
        <Link to="/products" className="inline-flex items-center text-ayu-green hover:text-ayu-green/80 mb-6">
          <ArrowLeft size={18} className="mr-1" />
          <span>Back to Products</span>
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-ayu-cream rounded-lg overflow-hidden">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div>
            {product.badge && (
              <span className="inline-block bg-ayu-green text-white px-3 py-1 rounded-full text-sm mb-4">
                {product.badge}
              </span>
            )}
            
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-2">{product.name}</h1>
            
            <p className="text-2xl text-ayu-green font-medium mb-6">${product.price.toFixed(2)}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Description</h3>
              <p className="text-gray-600">{product.detailedDescription || product.description}</p>
            </div>
            
            {product.ingredients && (
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Ingredients</h3>
                <ul className="text-gray-600">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-1">• {ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {product.benefits && (
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Benefits</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-ayu-green mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {product.usage && (
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-2">Suggested Usage</h3>
                <p className="text-gray-600">{product.usage}</p>
              </div>
            )}
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-ayu-green hover:bg-ayu-green/90 text-white"
                onClick={handleContactClick}
              >
                Inquire About This Product
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-ayu-green text-ayu-green hover:bg-ayu-green hover:text-white"
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
