import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  ShoppingCart, 
  Search, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Award,
  Target,
  BarChart3,
  Users,
  Globe,
  Zap,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Product Page Optimization",
    description: "Optimize individual product pages for better search visibility and conversions"
  },
  {
    icon: ShoppingCart,
    title: "Category Page SEO",
    description: "Improve category page rankings to drive more qualified traffic"
  },
  {
    icon: TrendingUp,
    title: "Site Structure Optimization",
    description: "Optimize your e-commerce site architecture for better search engine crawling"
  },
  {
    icon: Globe,
    title: "Shopping Feed Optimization",
    description: "Optimize product feeds for Google Shopping and other platforms"
  },
  {
    icon: Users,
    title: "Product Review Management",
    description: "Manage and optimize product reviews for better search rankings"
  },
  {
    icon: Shield,
    title: "E-commerce Link Building",
    description: "Build quality backlinks specifically for e-commerce websites"
  }
];

const pricing = [
  {
    name: "Starter",
    price: "$399",
    period: "/month",
    description: "Perfect for small online stores",
    features: [
      "Product page optimization (up to 100 products)",
      "Basic category page SEO",
      "Site structure optimization",
      "Monthly performance reports",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$799",
    period: "/month",
    description: "Ideal for growing e-commerce businesses",
    features: [
      "Everything in Starter",
      "Product page optimization (up to 500 products)",
      "Advanced category page SEO",
      "Shopping feed optimization",
      "Product review management",
      "E-commerce link building",
      "Weekly performance updates",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$1,599",
    period: "/month",
    description: "For large e-commerce operations",
    features: [
      "Everything in Professional",
      "Unlimited product optimization",
      "Advanced analytics & reporting",
      "Competitor analysis",
      "Custom e-commerce strategies",
      "Dedicated account manager",
      "24/7 support"
    ],
    popular: false
  }
];

const caseStudies = [
  {
    title: "Fashion E-commerce Platform",
    industry: "Fashion & Apparel",
    results: "200% increase in e-commerce revenue",
    description: "Optimized product pages and category structure for a major fashion retailer"
  },
  {
    title: "Electronics Store",
    industry: "Electronics",
    results: "350% boost in organic traffic",
    description: "Improved product visibility and shopping feed optimization for electronics store"
  },
  {
    title: "Home & Garden Store",
    industry: "Home & Garden",
    results: "180% improvement in conversion rates",
    description: "Enhanced product page SEO and user experience for home improvement store"
  }
];

const stats = [
  { number: "200%", label: "Average increase in e-commerce revenue" },
  { number: "500+", label: "Products optimized per month" },
  { number: "48hrs", label: "Initial optimization timeline" },
  { number: "98%", label: "Client satisfaction rate" }
];

export default function EcommerceSEO() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <ShoppingCart className="w-16 h-16 mx-auto text-blue-200 mb-4" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              E-commerce SEO Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Optimize your online store for search engines and drive more qualified traffic 
              to increase sales and revenue. Our e-commerce SEO strategies are designed to 
              boost your product visibility and conversion rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Free E-commerce SEO Audit
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is E-commerce SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is E-commerce SEO?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                E-commerce SEO is the practice of optimizing your online store to rank higher 
                in search engine results for product-related keywords. This includes optimizing 
                product pages, category pages, and your overall site structure.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The goal is to increase organic traffic to your product pages, improve user 
                experience, and ultimately drive more sales through search engine visibility.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Product page optimization</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Category page SEO</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="E-commerce SEO optimization"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Online Store</div>
                    <div className="text-xl font-bold text-blue-600">SEO Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive E-commerce SEO Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our e-commerce SEO services cover every aspect needed to boost your online store's performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              E-commerce SEO Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your online store's size and needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`border-2 flex flex-col h-full ${plan.popular ? 'border-blue-600 shadow-xl' : 'border-gray-200'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-2">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{plan.description}</p>
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link href="/contact">
                      <Button className={`w-full text-white ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}>
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              E-commerce SEO Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped online stores increase their sales and visibility
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">{study.industry}</Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-3">{study.description}</p>
                    <div className="text-2xl font-bold text-blue-600">{study.results}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our E-commerce SEO Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in e-commerce SEO and understand the unique challenges of online stores
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">E-commerce Experts</h3>
              <p className="text-gray-600">Specialized in online store optimization strategies</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Proven Results</h3>
              <p className="text-gray-600">Track record of increasing e-commerce sales</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Product Focus</h3>
              <p className="text-gray-600">Optimize individual products and categories</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Implementation</h3>
              <p className="text-gray-600">Quick optimization for immediate results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost Your Online Store?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our e-commerce SEO strategies can help you increase your online sales 
            and dominate product search results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free E-commerce SEO Audit
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
