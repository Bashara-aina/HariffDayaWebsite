import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Hariff DTE</h3>
            <p className="text-gray-600">
              Leading technology company in power systems, digital transformation, and defense solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/products#power">Power Systems</Link></li>
              <li><Link href="/products#digital">Digital Transformation</Link></li>
              <li><Link href="/products#defense">Defense Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="not-italic">
              <p>Email: info@hariffdte.com</p>
              <p>Phone: +62 123 456 789</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Hariff DTE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
