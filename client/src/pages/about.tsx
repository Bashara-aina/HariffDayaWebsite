import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap, Phone } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Technology & Innovation",
    description: "Pushing boundaries with cutting-edge solutions and innovative approaches"
  },
  {
    icon: Users,
    title: "Spirit of Locals",
    description: "Proud to be an Indonesian company serving global standards"
  },
  {
    icon: Award,
    title: "Service Excellence",
    description: "Committed to delivering exceptional service and support"
  }
];

export default function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-8">About Hariff DTE</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Hariff DTE is a leading technology company specializing in power systems, 
                digital transformation, and defense solutions. With years of experience and 
                expertise, we deliver innovative solutions that help businesses and 
                organizations thrive in the digital age.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence and innovation has made us a trusted partner 
                for businesses across Indonesia and beyond. We combine local insights with 
                global standards to provide solutions that meet the unique needs of our clients.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                alt="Professional team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Certifications & Partners</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Phone className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Telkomsel Certified Partner</h3>
                <p className="text-gray-600">Official technology solutions provider</p>
              </div>
            </div>
            <p className="text-gray-600">
              Our partnerships and certifications demonstrate our commitment to quality 
              and excellence in delivering technology solutions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1573496130141-209d200cebd8"
              alt="Team collaboration"
              className="rounded-lg"
            />
            <div className="flex items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Expert Professionals</h3>
                <p className="text-gray-600">
                  Our team consists of highly skilled professionals with extensive 
                  experience in power systems, digital transformation, and defense 
                  solutions. We are committed to delivering excellence and innovation 
                  in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}