
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard = ({ quote, author, role, image }: TestimonialProps) => {
  return (
    <Card className="border border-ayu-sage/20 shadow-sm h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <svg 
          className="text-ayu-sage w-10 h-10 mb-4" 
          fill="currentColor"
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.729-1.327-.949-.559-.22-1.266-.33-2.122-.33h-.597v-3.793c1.505.017 2.683.326 3.534.928 1.25.894 1.875 2.32 1.875 4.273v2.088h-.673zm6.839 0c0-.88-.23-1.618-.69-2.217-.326-.42-.775-.74-1.344-.956-.57-.217-1.286-.322-2.148-.322h-.555v-3.793c1.487.017 2.662.322 3.522.917 1.268.894 1.901 2.32 1.901 4.284v2.088h-.686z" />
        </svg>
        
        <p className="text-gray-600 mb-4 flex-grow italic">"{quote}"</p>
        
        <div className="flex items-center mt-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={image} 
              alt={author} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-foreground">{author}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
