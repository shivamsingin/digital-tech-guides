import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Code, 
  Smartphone, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  Palette
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Unique, brand-focused designs that stand out from the competition"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description: "Responsive websites that work perfectly on all devices and screen sizes"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Fast-loading websites optimized for speed and user experience"
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Ongoing security updates and maintenance to keep your site running smoothly"
  }
];

const technologies = [
  "React", "Next.js", "Vue.js", "Angular", "WordPress", "Shopify", 
  "Webflow", "Node.js", "Python", "PHP", "MongoDB", "PostgreSQL"
];

const pricingTiers = [
  {
    name: "Starter Website",
    price: "$2,999",
    period: "",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "Google Analytics setup",
      "3 months free maintenance",
      "Basic hosting included"
    ],
    popular: false
  },
  {
    name: "Professional Website",
    price: "$5,999",
    period: "",
    description: "Ideal for growing businesses needing more features",
    features: [
      "Up to 15 pages",
      "Custom design & branding",
      "Advanced SEO optimization",
      "E-commerce functionality",
      "Content management system",
      "Social media integration",
      "6 months free maintenance",
      "Premium hosting included",
      "SSL certificate"
    ],
    popular: true
  },
  {
    name: "Enterprise Solution",
    price: "$12,999",
    period: "+",
    description: "For large businesses with complex requirements",
    features: [
      "Unlimited pages",
      "Custom web application",
      "Advanced integrations",
      "Multi-language support",
      "Advanced security features",
      "Performance optimization",
      "12 months free maintenance",
      "Dedicated hosting",
      "24/7 support",
      "Custom training"
    ],
    popular: false
  }
];

const benefits = [
  "Professional brand representation online",
  "Improved user experience and engagement",
  "Better search engine rankings",
  "Increased conversion rates",
  "Mobile accessibility for all users",
  "Scalable platform for business growth"
];

export default function WebDevelopment() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Code className="w-16 h-16 mx-auto text-purple-200 mb-4" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Web Development & Design Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Create stunning, high-converting websites that represent your brand professionally 
              and drive business growth through exceptional user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Get Free Website Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Web Development Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Web Development & Design
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your website is often the first impression customers have of your business. 
                We create beautiful, functional websites that not only look great but also 
                drive conversions and support your business goals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experienced developers and designers work together to create 
                custom solutions that are fast, secure, and optimized for search engines. 
                From simple business websites to complex web applications, we've got you covered.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Web development workspace"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Conversion Rate</div>
                    <div className="text-lg font-bold text-purple-600">+65%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the latest technologies to build modern, scalable websites
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <h3 className="text-sm font-semibold text-gray-900">{tech}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development services to bring your vision to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Web Development Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for professional web development services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative flex flex-col h-full ${tier.popular ? 'border-purple-500 border-2' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-purple-600">{tier.price}</span>
                      <span className="text-gray-600">{tier.period}</span>
                    </div>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                  <div className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <Link href="/contact">
                      <Button 
                        className={`w-full ${tier.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50'}`}
                      >
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl mb-8">
            Let our expert developers create a stunning website that drives results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Your Project
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
