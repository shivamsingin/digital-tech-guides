import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Mail, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Target,
  BarChart3,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Advanced Segmentation",
    description: "Precise audience targeting based on behavior, demographics, and preferences"
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Automated workflows that nurture leads and drive conversions"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Detailed insights and reporting to optimize campaign performance"
  },
  {
    icon: Users,
    title: "List Management",
    description: "Professional list building and maintenance for maximum deliverability"
  }
];

const campaignTypes = [
  "Welcome Series",
  "Newsletter Campaigns", 
  "Promotional Emails",
  "Abandoned Cart Recovery",
  "Re-engagement Campaigns",
  "Product Recommendations",
  "Event Invitations",
  "Survey & Feedback"
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small businesses starting with email marketing",
    features: [
      "Up to 2,500 subscribers",
      "4 campaigns per month",
      "Basic email templates",
      "List segmentation",
      "Basic analytics",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "Ideal for growing businesses needing more features",
    features: [
      "Up to 10,000 subscribers",
      "12 campaigns per month",
      "Custom email design",
      "Advanced segmentation",
      "A/B testing",
      "Marketing automation",
      "Detailed analytics",
      "Phone & email support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$1,199",
    period: "/month",
    description: "For large businesses with complex email needs",
    features: [
      "Unlimited subscribers",
      "Unlimited campaigns",
      "Premium custom designs",
      "Advanced automation workflows",
      "Predictive analytics",
      "Dedicated IP address",
      "Priority support",
      "Account manager",
      "Custom integrations"
    ],
    popular: false
  }
];

const benefits = [
  "Highest ROI among digital marketing channels",
  "Direct communication with your audience",
  "Personalized messaging at scale",
  "Automated nurturing sequences",
  "Detailed performance tracking",
  "Cost-effective customer retention"
];

export default function EmailMarketing() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Mail className="w-16 h-16 mx-auto text-green-200 mb-4" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Email Marketing Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Nurture leads, retain customers, and drive repeat business with personalized 
              email marketing campaigns that deliver exceptional ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Get Free Email Audit
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Email Marketing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Email Marketing?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Email marketing is a direct marketing channel that allows businesses to share 
                new products, sales, and updates with customers on their contact list. 
                It's one of the highest ROI marketing channels available.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our email marketing experts create personalized campaigns that engage your 
                audience, build relationships, and drive conversions. From welcome series 
                to promotional campaigns, we help you stay connected with your customers.
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
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Email marketing dashboard"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Average ROI</div>
                    <div className="text-lg font-bold text-green-600">4,200%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Email Campaign Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create various types of email campaigns to meet your business goals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {campaignTypes.map((type, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900">{type}</h3>
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
              Our Email Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive email marketing services to grow your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
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
              Email Marketing Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable email marketing solutions for businesses of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative flex flex-col h-full ${tier.popular ? 'border-green-500 border-2' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-green-600">{tier.price}</span>
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
                        className={`w-full ${tier.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'}`}
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost Your Email Marketing ROI?
          </h2>
          <p className="text-xl mb-8">
            Let our email marketing experts create campaigns that engage your audience and drive results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start Your Email Campaign
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
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
