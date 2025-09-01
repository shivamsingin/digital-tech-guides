import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  PenTool, 
  BookOpen, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Search,
  Users,
  Target
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "SEO-Optimized Content",
    description: "Content that ranks well in search engines and drives organic traffic"
  },
  {
    icon: Users,
    title: "Audience Research",
    description: "Deep understanding of your target audience and their content preferences"
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Comprehensive content strategies aligned with your business goals"
  },
  {
    icon: BookOpen,
    title: "Multi-Format Content",
    description: "Diverse content types including blogs, videos, infographics, and more"
  }
];

const contentTypes = [
  "Blog Posts & Articles",
  "Website Copy", 
  "Social Media Content",
  "Email Newsletters",
  "Video Scripts",
  "Infographics",
  "Case Studies",
  "White Papers",
  "Product Descriptions",
  "Press Releases"
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$599",
    period: "/month",
    description: "Perfect for small businesses starting content marketing",
    features: [
      "4 blog posts per month",
      "Basic keyword research",
      "Content calendar planning",
      "Social media promotion",
      "Monthly performance report",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$1,199",
    period: "/month",
    description: "Ideal for growing businesses needing more content",
    features: [
      "8 blog posts per month",
      "Advanced SEO optimization",
      "Content distribution strategy",
      "Social media content creation",
      "Email newsletter content",
      "Bi-weekly strategy calls",
      "Detailed analytics reports",
      "Phone & email support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$2,399",
    period: "/month",
    description: "For large businesses with extensive content needs",
    features: [
      "16+ pieces of content per month",
      "Multi-format content creation",
      "Advanced content distribution",
      "Influencer collaboration",
      "Video content creation",
      "Content audit & optimization",
      "Dedicated content manager",
      "Weekly strategy sessions",
      "Custom content workflows"
    ],
    popular: false
  }
];

const benefits = [
  "Improved search engine rankings",
  "Increased brand awareness and authority",
  "Higher engagement with target audience",
  "More qualified leads and conversions",
  "Cost-effective long-term marketing",
  "Enhanced customer education and trust"
];

export default function ContentMarketing() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <PenTool className="w-16 h-16 mx-auto text-orange-200 mb-4" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Content Marketing Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Create compelling, valuable content that attracts, engages, and converts your 
              target audience while building long-term brand authority and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Get Free Content Audit
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Content Marketing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Content Marketing?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Content marketing is a strategic approach focused on creating and distributing 
                valuable, relevant, and consistent content to attract and retain a clearly 
                defined audience — and ultimately drive profitable customer action.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our content marketing experts develop comprehensive strategies that position 
                your brand as an industry authority, improve your search engine rankings, 
                and nurture prospects throughout their buyer's journey.
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
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Content creation workspace"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Content ROI</div>
                    <div className="text-lg font-bold text-orange-600">+220%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Content Types We Create
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create diverse content formats to engage your audience across all channels
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {contentTypes.map((type, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <h3 className="text-sm font-semibold text-gray-900">{type}</h3>
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
              Our Content Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive content marketing services to grow your brand authority
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-orange-600" />
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
              Content Marketing Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable content marketing solutions for every business size
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative flex flex-col h-full ${tier.popular ? 'border-orange-500 border-2' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-orange-600">{tier.price}</span>
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
                        className={`w-full ${tier.popular ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-white text-orange-600 border border-orange-600 hover:bg-orange-50'}`}
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Content Authority?
          </h2>
          <p className="text-xl mb-8">
            Let our content marketing experts create valuable content that drives engagement and conversions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Start Your Content Strategy
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
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
