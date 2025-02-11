import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Innovating Indonesia's Future with Cutting-Edge Technology
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading provider of power systems, digital transformation, and defense solutions.
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <Button size="lg">Request a Consultation</Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline">Explore Our Solutions</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
