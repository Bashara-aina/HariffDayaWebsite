import { Card, CardContent } from "@/components/ui/card";
import { Battery, Network, Shield } from "lucide-react";

const features = [
  {
    icon: Battery,
    title: "Power Systems",
    description: "Advanced solar panels, UPS solutions, and VRLA batteries for reliable power infrastructure."
  },
  {
    icon: Network,
    title: "Digital Transformation",
    description: "Comprehensive network management systems and IoT solutions for modern enterprises."
  },
  {
    icon: Shield,
    title: "Defense Solutions",
    description: "State-of-the-art defense and security systems with cutting-edge technology."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
