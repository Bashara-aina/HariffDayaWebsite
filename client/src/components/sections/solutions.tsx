import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Link } from "wouter";

const solutions = [
  {
    title: "Power Systems",
    image: "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285",
    description: "Reliable and efficient power solutions for your infrastructure needs",
    features: [
      "Solar Panel Systems",
      "UPS Solutions",
      "VRLA Batteries",
      "Power Management"
    ]
  },
  {
    title: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "Comprehensive digital solutions to modernize your business",
    features: [
      "Network Management",
      "IoT Integration",
      "System Monitoring",
      "Data Analytics"
    ]
  },
  {
    title: "Defense Solutions",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Advanced security and defense systems for critical infrastructure",
    features: [
      "Security Systems",
      "Access Control",
      "Surveillance",
      "Threat Detection"
    ]
  }
];

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of innovative solutions designed to meet the evolving 
            needs of modern businesses and organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              key={activeIndex}
              src={solutions[activeIndex].image}
              alt={solutions[activeIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">{solutions[activeIndex].title}</h3>
              <p className="text-gray-200">{solutions[activeIndex].description}</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <Card
                key={solution.title}
                className={`cursor-pointer transition-colors ${
                  activeIndex === index ? "border-primary" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <CardHeader>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}

            <Link href="/products">
              <Button className="w-full">Explore All Solutions</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
