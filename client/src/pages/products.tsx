import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Battery, Cloud, Shield, Sun, Power, Network, Bot, Monitor, Lock } from "lucide-react";

const products = [
  {
    category: "Power Systems",
    id: "power",
    description: "Advanced power solutions for reliable infrastructure",
    items: [
      {
        icon: Sun,
        title: "Solar Panel Systems",
        description: "High-efficiency solar panels with advanced power conversion technology",
        specs: ["High conversion efficiency", "Weather resistant", "25-year warranty"]
      },
      {
        icon: Power,
        title: "UPS Solutions",
        description: "Uninterruptible power supply systems for critical applications",
        specs: ["Online double conversion", "N+1 redundancy", "Advanced battery management"]
      },
      {
        icon: Battery,
        title: "VRLA Batteries",
        description: "Valve Regulated Lead Acid batteries for reliable backup power",
        specs: ["Maintenance-free design", "Long service life", "High discharge rate"]
      }
    ]
  },
  {
    category: "Digital Transformation",
    id: "digital",
    description: "Comprehensive digital solutions for modern enterprises",
    items: [
      {
        icon: Network,
        title: "Network Management System",
        description: "Integrated platform for network monitoring and management",
        specs: ["Real-time monitoring", "Automated alerts", "Performance analytics"]
      },
      {
        icon: Cloud,
        title: "IoT Gateways",
        description: "Secure and reliable IoT connectivity solutions",
        specs: ["Multi-protocol support", "Edge computing", "Remote management"]
      },
      {
        icon: Monitor,
        title: "Monitoring Systems",
        description: "Advanced monitoring solutions for critical infrastructure",
        specs: ["24/7 surveillance", "AI-powered analytics", "Custom reporting"]
      }
    ]
  },
  {
    category: "Defense Solutions",
    id: "defense",
    description: "State-of-the-art defense and security systems",
    items: [
      {
        icon: Shield,
        title: "Security Systems",
        description: "Comprehensive security solutions for sensitive installations",
        specs: ["Advanced encryption", "Biometric authentication", "Intrusion detection"]
      },
      {
        icon: Lock,
        title: "Access Control",
        description: "Sophisticated access management systems",
        specs: ["Multi-factor authentication", "Audit trails", "Integration capabilities"]
      },
      {
        icon: Bot,
        title: "Automated Systems",
        description: "AI-powered defense automation solutions",
        specs: ["Smart monitoring", "Threat detection", "Automated response"]
      }
    ]
  }
];

export default function Products() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Products & Solutions</h1>
        
        <div className="space-y-24">
          {products.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-4">{category.category}</h2>
              <p className="text-gray-600 mb-8">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <Card key={item.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <item.icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <ul className="space-y-2 mb-6">
                        {item.specs.map((spec) => (
                          <li key={spec} className="text-sm text-gray-600">
                            • {spec}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full">
                        Request Information
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
