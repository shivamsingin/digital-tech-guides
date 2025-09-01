import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  MapPin, 
  Search, 
  Star, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Phone,
  Mail,
  Calendar,
  Award,
  Target,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Google My Business Optimization",
    description: "Complete GMB profile setup and optimization for maximum local visibility"
  },
  {
    icon: Search,
    title: "Local Keyword Research",
    description: "Target location-specific keywords that drive local customers to your business"
  },
  {
    icon: Users,
    title: "Local Citation Building",
    description: "Build consistent business listings across all major directories and platforms"
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Monitor and manage your online reputation to build trust with local customers"
  },
  {
    icon: TrendingUp,
    title: "Local Content Creation",
    description: "Create location-specific content that resonates with your local audience"
  },
  {
    icon: Target,
    title: "Local Link Building",
    description: "Build quality backlinks from local businesses and organizations"
  }
];

const pricing = [
  {
    name: "Starter",
    price: "$199",
    period: "/month",
    description: "Perfect for small local businesses",
    features: [
      "Google My Business optimization",
      "Basic local keyword research",
      "Citation building (50+ directories)",
      "Monthly performance reports",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$399",
    period: "/month",
    description: "Ideal for growing local businesses",
    features: [
      "Everything in Starter",
      "Advanced local keyword research",
      "Citation building (100+ directories)",
      "Review management & monitoring",
      "Local content creation (2/month)",
      "Local link building",
      "Weekly performance updates",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$799",
    period: "/month",
    description: "For multi-location businesses",
    features: [
      "Everything in Professional",
      "Multi-location optimization",
      "Advanced analytics & reporting",
      "Competitor analysis",
      "Local PR campaigns",
      "Dedicated account manager",
      "24/7 support"
    ],
    popular: false
  }
];

const caseStudies = [
  {
    title: "Local Restaurant Chain",
    industry: "Food & Beverage",
    results: "950% improvement in local rankings",
    description: "Helped a local restaurant chain dominate local search results across 5 locations"
  },
  {
    title: "Dental Practice",
    industry: "Healthcare",
    results: "400% increase in new patients",
    description: "Optimized local SEO for a dental practice, resulting in significant patient growth"
  },
  {
    title: "Auto Repair Shop",
    industry: "Automotive",
    results: "300% boost in local visibility",
    description: "Improved local search presence for an auto repair business in a competitive market"
  }
];

const stats = [
  { number: "300%", label: "Average increase in local search visibility" },
  { number: "50+", label: "Local directories optimized" },
  { number: "24hrs", label: "Response time for local queries" },
  { number: "95%", label: "Client satisfaction rate" }
];

export default function LocalSEO() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <MapPin className="w-16 h-16 mx-auto text-blue-200 mb-4" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Local SEO Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Dominate local search results and attract customers in your area with our comprehensive 
              local SEO strategies. Get found by local customers when they search for your services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Free Local SEO Audit
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

      {/* What is Local SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Local SEO?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Local SEO is the practice of optimizing your online presence to attract more business 
                from relevant local searches. When someone searches for services in your area, 
                local SEO helps your business appear in the results.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This includes optimizing your Google My Business profile, building local citations, 
                managing reviews, and creating location-specific content that resonates with your 
                local audience.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Google My Business optimization</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Local keyword targeting</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Local SEO optimization"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Local Search</div>
                    <div className="text-xl font-bold text-blue-600">#1 Ranking</div>
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
              Comprehensive Local SEO Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our local SEO services cover every aspect needed to dominate local search results
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
              Local SEO Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your local business needs and budget
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
              Local SEO Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped local businesses dominate their local search results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Why Choose Our Local SEO Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in local SEO and have helped hundreds of businesses dominate their local markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">Certified local SEO specialists with years of experience</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Proven Results</h3>
              <p className="text-gray-600">Track record of delivering measurable local SEO improvements</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Local Focus</h3>
              <p className="text-gray-600">Specialized in local search optimization strategies</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ongoing Support</h3>
              <p className="text-gray-600">Continuous optimization and support for long-term success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Dominate Local Search?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our local SEO strategies can help you attract more local customers 
            and grow your business in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Local SEO Audit
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
