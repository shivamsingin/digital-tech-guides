import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Share2, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  MessageCircle,
  Heart,
  Eye
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community Building",
    description: "Build engaged communities around your brand across all social platforms"
  },
  {
    icon: MessageCircle,
    title: "Content Strategy",
    description: "Compelling content that drives engagement and builds brand awareness"
  },
  {
    icon: Heart,
    title: "Influencer Partnerships",
    description: "Strategic collaborations with influencers to expand your reach"
  },
  {
    icon: Eye,
    title: "Social Media Analytics",
    description: "Detailed insights and performance tracking across all platforms"
  }
];

const platforms = [
  "Facebook",
  "Instagram", 
  "Twitter/X",
  "LinkedIn",
  "TikTok",
  "YouTube",
  "Pinterest",
  "Snapchat"
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$399",
    period: "/month",
    description: "Perfect for small businesses starting their social presence",
    features: [
      "2 social media platforms",
      "8 posts per month",
      "Basic content creation",
      "Community management",
      "Monthly analytics report",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$799",
    period: "/month",
    description: "Ideal for growing businesses seeking engagement",
    features: [
      "4 social media platforms",
      "20 posts per month",
      "Custom graphics & videos",
      "Advanced community management",
      "Influencer outreach",
      "Bi-weekly analytics reports",
      "Social media advertising setup",
      "Phone & email support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$1,599",
    period: "/month",
    description: "For large businesses with complex social needs",
    features: [
      "All major social platforms",
      "40+ posts per month",
      "Premium content creation",
      "24/7 community management",
      "Influencer campaign management",
      "Real-time analytics dashboard",
      "Advanced social advertising",
      "Dedicated account manager",
      "Crisis management support"
    ],
    popular: false
  }
];

const benefits = [
  "Increased brand awareness and recognition",
  "Direct engagement with your target audience",
  "Cost-effective marketing channel",
  "Real-time customer feedback and insights",
  "Enhanced customer loyalty and retention",
  "Improved search engine rankings"
];

export default function SocialMediaMarketing() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Share2 className="w-16 h-16 mx-auto text-pink-200 mb-4" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Social Media Marketing Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Build meaningful connections with your audience and grow your brand through 
              strategic social media marketing that drives engagement and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                  Get Free Social Media Audit
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Social Media Marketing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Social Media Marketing?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Social media marketing involves creating and sharing content on social media 
                platforms to achieve your marketing and branding goals. It's about building 
                relationships, increasing brand awareness, and driving website traffic.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our social media experts develop comprehensive strategies that align with your 
                business objectives, create engaging content, and manage your online community 
                to build lasting relationships with your customers.
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
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Social media marketing dashboard"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-pink-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Engagement Rate</div>
                    <div className="text-lg font-bold text-pink-600">+180%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platforms We Manage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you succeed across all major social media platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900">{platform}</h3>
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
              Our Social Media Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive social media management services to grow your online presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-pink-600" />
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
              Social Media Marketing Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan to grow your social media presence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative flex flex-col h-full ${tier.popular ? 'border-pink-500 border-2' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-pink-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-pink-600">{tier.price}</span>
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
                        className={`w-full ${tier.popular ? 'bg-pink-600 text-white hover:bg-pink-700' : 'bg-white text-pink-600 border border-pink-600 hover:bg-pink-50'}`}
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Your Social Media Presence?
          </h2>
          <p className="text-xl mb-8">
            Let our social media experts create engaging campaigns that build your brand and drive results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                Start Your Social Campaign
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
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
