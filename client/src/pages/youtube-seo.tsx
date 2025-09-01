import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Youtube, 
  Search, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Award,
  Target,
  BarChart3,
  Users,
  Play,
  Zap,
  Shield,
  Eye,
  ThumbsUp
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "YouTube Keyword Research",
    description: "Find the best keywords that will help your videos rank higher"
  },
  {
    icon: Play,
    title: "Video Title Optimization",
    description: "Create compelling titles that improve click-through rates and rankings"
  },
  {
    icon: Eye,
    title: "Thumbnail Design & Optimization",
    description: "Design eye-catching thumbnails that increase video views"
  },
  {
    icon: TrendingUp,
    title: "Playlist Optimization",
    description: "Organize videos into optimized playlists for better discovery"
  },
  {
    icon: Users,
    title: "Channel Optimization",
    description: "Optimize your entire YouTube channel for maximum visibility"
  },
  {
    icon: BarChart3,
    title: "Video Content Strategy",
    description: "Develop a strategic content plan that drives engagement and growth"
  }
];

const pricing = [
  {
    name: "Starter",
    price: "$199",
    period: "/month",
    description: "Perfect for small YouTube channels",
    features: [
      "YouTube keyword research (10 keywords)",
      "Video title optimization (5 videos/month)",
      "Basic thumbnail optimization",
      "Monthly performance reports",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$399",
    period: "/month",
    description: "Ideal for growing YouTube channels",
    features: [
      "Everything in Starter",
      "YouTube keyword research (25 keywords)",
      "Video title optimization (15 videos/month)",
      "Advanced thumbnail design",
      "Playlist optimization",
      "Channel optimization",
      "Weekly performance updates",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$799",
    period: "/month",
    description: "For large YouTube operations",
    features: [
      "Everything in Professional",
      "Unlimited keyword research",
      "Unlimited video optimization",
      "Custom thumbnail designs",
      "Advanced analytics & reporting",
      "Competitor analysis",
      "Dedicated account manager",
      "24/7 support"
    ],
    popular: false
  }
];

const caseStudies = [
  {
    title: "Tech Review Channel",
    industry: "Technology",
    results: "250% increase in YouTube views",
    description: "Optimized video titles and thumbnails for a tech review channel"
  },
  {
    title: "Fitness Instructor",
    industry: "Health & Fitness",
    results: "400% boost in subscribers",
    description: "Improved channel optimization and content strategy for fitness videos"
  },
  {
    title: "Cooking Channel",
    industry: "Food & Cooking",
    results: "180% improvement in watch time",
    description: "Enhanced playlist optimization and keyword targeting for cooking content"
  }
];

const stats = [
  { number: "250%", label: "Average increase in YouTube views" },
  { number: "15+", label: "Videos optimized per month" },
  { number: "72hrs", label: "Initial optimization timeline" },
  { number: "96%", label: "Client satisfaction rate" }
];

export default function YouTubeSEO() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Play className="w-16 h-16 mx-auto text-red-200 mb-4" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              YouTube SEO Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Optimize your YouTube channel and videos to rank higher in search results, 
              increase views, and grow your subscriber base with our specialized YouTube SEO strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Get Free YouTube SEO Audit
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  View YouTube Case Studies
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
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is YouTube SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is YouTube SEO?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                YouTube SEO is the practice of optimizing your videos and channel to rank higher 
                in YouTube's search results and recommendations. This includes optimizing video 
                titles, descriptions, tags, thumbnails, and overall channel strategy.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The goal is to increase video visibility, drive more organic views, and grow 
                your subscriber base through search engine optimization techniques specific to YouTube.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Video title optimization</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Thumbnail design</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="YouTube SEO optimization"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <Play className="w-8 h-8 text-red-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">YouTube</div>
                    <div className="text-xl font-bold text-red-600">SEO Ready</div>
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
              Comprehensive YouTube SEO Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our YouTube SEO services cover every aspect needed to boost your channel's performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="w-12 h-12 text-red-600" />
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
              YouTube SEO Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your YouTube channel's size and goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`border-2 flex flex-col h-full ${plan.popular ? 'border-red-600 shadow-xl' : 'border-gray-200'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-2">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-red-600">{plan.price}</span>
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
                      <Button className={`w-full text-white ${plan.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-700'}`}>
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
              YouTube SEO Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped YouTube channels increase their views and subscribers
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
                    <div className="text-2xl font-bold text-red-600">{study.results}</div>
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
              Why Choose Our YouTube SEO Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in YouTube optimization and understand what makes videos rank higher
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">YouTube Experts</h3>
              <p className="text-gray-600">Specialized in YouTube platform optimization</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Proven Results</h3>
              <p className="text-gray-600">Track record of increasing YouTube performance</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Video Focus</h3>
              <p className="text-gray-600">Optimize individual videos and entire channels</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quick Results</h3>
              <p className="text-gray-600">See improvements in views and engagement fast</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Dominate YouTube?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our YouTube SEO strategies can help you increase your views, 
            subscribers, and channel growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Get Free YouTube SEO Audit
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
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
