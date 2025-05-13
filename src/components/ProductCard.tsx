
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProductType } from '@/types/product';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border border-ayu-sage/20 hover:shadow-md transition-shadow duration-300 group h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-ayu-cream">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-2 right-2 bg-ayu-green px-2 py-1 text-xs font-medium rounded text-white">
            {product.badge}
          </span>
        )}
      </div>
      
      <CardContent className="p-5 flex flex-col flex-grow">
        <div className="mb-auto">
          <h3 className="font-serif font-medium text-lg mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2 mb-2">{product.description}</p>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-ayu-green font-semibold">
            ${product.price.toFixed(2)}
          </span>
          <Link to={`/products/${product.id}`}>
            <Button variant="outline" className="text-ayu-green border-ayu-green hover:bg-ayu-green hover:text-white">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
