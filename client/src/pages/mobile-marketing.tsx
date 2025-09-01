import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Smartphone, 
  MapPin, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Bell,
  MessageSquare,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "App Store Optimization",
    description: "Optimize your app listing to increase downloads and visibility in app stores"
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Engage users with personalized and timely push notification campaigns"
  },
  {
    icon: MessageSquare,
    title: "SMS Marketing",
    description: "Direct communication with customers through targeted SMS campaigns"
  },
  {
    icon: MapPin,
    title: "Location-Based Marketing",
    description: "Reach customers based on their geographic location and behavior"
  }
];

const services = [
  "App Store Optimization (ASO)",
  "Mobile App Marketing", 
  "SMS & Text Marketing",
  "Push Notification Campaigns",
  "Location-Based Advertising",
  "Mobile-First Website Design",
  "In-App Advertising",
  "Mobile Analytics & Attribution",
  "Cross-Platform Campaigns",
  "Mobile User Experience Optimization"
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for small businesses entering mobile marketing",
    features: [
      "Basic ASO optimization",
      "2 SMS campaigns per month",
      "Push notification setup",
      "Mobile analytics setup",
      "Monthly performance report",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$999",
    period: "/month",
    description: "Ideal for growing businesses with mobile apps",
    features: [
      "Advanced ASO optimization",
      "8 SMS campaigns per month",
      "Advanced push notifications",
      "Location-based targeting",
      "In-app advertising management",
      "Bi-weekly optimization",
      "Detailed analytics reports",
      "Phone & email support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$1,999",
    period: "/month",
    description: "For large businesses with complex mobile needs",
    features: [
      "Complete mobile marketing suite",
      "Unlimited SMS campaigns",
      "Advanced automation workflows",
      "Multi-location targeting",
      "Cross-platform campaign management",
      "Custom mobile attribution",
      "Dedicated account manager",
      "Weekly strategy calls",
      "Priority support"
    ],
    popular: false
  }
];

const benefits = [
  "Higher engagement rates than desktop",
  "Immediate and direct customer reach",
  "Location-based targeting capabilities",
  "Real-time communication opportunities",
  "Better customer retention and loyalty",
  "Higher conversion rates on mobile devices"
];

export default function MobileMarketing() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Smartphone className="w-16 h-16 mx-auto text-indigo-200 mb-4" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Mobile Marketing Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Reach your audience where they spend most of their time with targeted 
              mobile marketing campaigns and app optimization strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Get Free Mobile Audit
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Mobile Marketing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Mobile Marketing?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Mobile marketing is a multi-channel digital marketing strategy aimed at reaching 
                your target audience on their smartphones, tablets, and other mobile devices 
                through websites, email, SMS, social media, and mobile applications.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mobile marketing experts create comprehensive strategies that leverage the 
                unique capabilities of mobile devices, including location services, push 
                notifications, and app-based interactions to drive engagement and conversions.
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
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Mobile marketing analytics"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Mobile Conversions</div>
                    <div className="text-lg font-bold text-indigo-600">+185%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mobile Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile marketing solutions to reach your audience on any device
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <h3 className="text-sm font-semibold text-gray-900">{service}</h3>
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
              Our Mobile Marketing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced mobile marketing features to maximize your reach and engagement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-indigo-600" />
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
              Mobile Marketing Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible mobile marketing solutions for businesses of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative flex flex-col h-full ${tier.popular ? 'border-indigo-500 border-2' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-indigo-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-indigo-600">{tier.price}</span>
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
                        className={`w-full ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'}`}
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Dominate Mobile Marketing?
          </h2>
          <p className="text-xl mb-8">
            Let our mobile marketing experts create campaigns that reach your audience wherever they are
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Start Your Mobile Campaign
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
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
