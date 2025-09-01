import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  MousePointer, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  DollarSign,
  Users
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Strategic Campaign Planning",
    description: "Comprehensive keyword research and competitor analysis to maximize ROI"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Tracking",
    description: "Real-time performance monitoring with detailed conversion tracking"
  },
  {
    icon: DollarSign,
    title: "Budget Optimization",
    description: "Smart bid management and budget allocation for maximum efficiency"
  },
  {
    icon: Users,
    title: "Audience Targeting",
    description: "Precise demographic and behavioral targeting for better conversions"
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for small businesses starting with PPC",
    features: [
      "Google Ads campaign setup",
      "Up to 2 campaigns",
      "Basic keyword research",
      "Monthly performance reports",
      "Email support",
      "Landing page recommendations"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$999",
    period: "/month",
    description: "Ideal for growing businesses seeking expansion",
    features: [
      "Google & Bing Ads management",
      "Up to 5 campaigns",
      "Advanced keyword research",
      "Bi-weekly optimization",
      "Conversion tracking setup",
      "A/B testing",
      "Phone & email support",
      "Quarterly strategy reviews"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$2,499",
    period: "/month",
    description: "For large businesses with complex needs",
    features: [
      "Multi-platform campaign management",
      "Unlimited campaigns",
      "Advanced audience targeting",
      "Weekly optimization",
      "Custom conversion tracking",
      "Advanced A/B testing",
      "Dedicated account manager",
      "Monthly strategy calls",
      "Custom reporting dashboard"
    ],
    popular: false
  }
];

const benefits = [
  "Immediate visibility in search results",
  "Precise targeting and budget control",
  "Measurable ROI and performance tracking",
  "Quick testing of keywords and audiences",
  "Complement to organic SEO efforts",
  "Flexible campaign adjustments"
];

export default function PPCAdvertising() {
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
            <MousePointer className="w-16 h-16 mx-auto text-blue-200 mb-4" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              PPC Advertising Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Drive immediate, targeted traffic to your website with expertly managed 
              pay-per-click campaigns. Get instant visibility and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Free PPC Audit
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

      {/* What is PPC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is PPC Advertising?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Pay-Per-Click (PPC) advertising is a digital marketing model where you pay only 
                when someone clicks on your ad. It's the fastest way to get your business in 
                front of potential customers who are actively searching for your products or services.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our PPC experts create and manage high-performing campaigns across Google Ads, 
                Bing Ads, and social media platforms to maximize your return on investment and 
                drive qualified traffic to your website.
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="PPC advertising dashboard"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Average ROAS</div>
                    <div className="text-lg font-bold text-green-600">4.2x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our PPC Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive PPC management services designed to maximize your advertising ROI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              PPC Management Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs and budget
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative flex flex-col h-full ${tier.popular ? 'border-blue-500 border-2' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-blue-600">{tier.price}</span>
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
                        className={`w-full ${tier.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}`}
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Drive Immediate Results?
          </h2>
          <p className="text-xl mb-8">
            Let our PPC experts create high-converting campaigns that deliver measurable ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your PPC Campaign
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
