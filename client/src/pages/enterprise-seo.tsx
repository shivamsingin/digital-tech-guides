import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Building2, 
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
  Shield,
  Cpu,
  Database
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Enterprise Technical SEO",
    description: "Advanced technical optimization for large-scale websites and applications"
  },
  {
    icon: Database,
    title: "Large-scale Content Strategy",
    description: "Comprehensive content planning and optimization for enterprise websites"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Reporting",
    description: "Enterprise-level reporting with custom dashboards and insights"
  },
  {
    icon: Target,
    title: "Competitive Analysis",
    description: "Deep competitive research and market positioning strategies"
  },
  {
    icon: Globe,
    title: "Enterprise Link Building",
    description: "Strategic link building campaigns for large organizations"
  },
  {
    icon: Shield,
    title: "Custom SEO Tools",
    description: "Bespoke SEO tools and automation for enterprise needs"
  }
];

const pricing = [
  {
    name: "Starter",
    price: "$1,999",
    period: "/month",
    description: "For growing enterprise businesses",
    features: [
      "Enterprise technical SEO audit",
      "Basic content strategy development",
      "Monthly performance reports",
      "Email support",
      "Basic competitive analysis"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$3,999",
    period: "/month",
    description: "Ideal for established enterprises",
    features: [
      "Everything in Starter",
      "Advanced content strategy",
      "Custom analytics dashboards",
      "Weekly performance updates",
      "Advanced competitive analysis",
      "Enterprise link building",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$7,999",
    period: "/month",
    description: "For large enterprise operations",
    features: [
      "Everything in Professional",
      "Custom SEO tools development",
      "Dedicated account manager",
      "24/7 support",
      "Custom reporting",
      "Enterprise automation",
      "White-label solutions"
    ],
    popular: false
  }
];

const caseStudies = [
  {
    title: "Fortune 500 Tech Company",
    industry: "Technology",
    results: "400% increase in organic conversions",
    description: "Optimized enterprise website with 10,000+ pages and complex architecture"
  },
  {
    title: "Global E-commerce Platform",
    industry: "E-commerce",
    results: "250% boost in organic revenue",
    description: "Implemented enterprise SEO strategy across multiple international markets"
  },
  {
    title: "Healthcare Enterprise",
    industry: "Healthcare",
    results: "300% improvement in lead generation",
    description: "Optimized enterprise healthcare platform with strict compliance requirements"
  }
];

const stats = [
  { number: "400%", label: "Average increase in organic conversions" },
  { number: "10,000+", label: "Pages optimized per project" },
  { number: "30 days", label: "Initial optimization timeline" },
  { number: "99%", label: "Client retention rate" }
];

export default function EnterpriseSEO() {
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
            <Building2 className="w-16 h-16 mx-auto text-blue-200 mb-4" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Enterprise SEO Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Scale your enterprise SEO efforts with comprehensive strategies designed for large 
              organizations. Dominate search results across multiple markets and languages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Enterprise SEO Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  View Enterprise Case Studies
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

      {/* What is Enterprise SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Enterprise SEO?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Enterprise SEO is a comprehensive approach to search engine optimization designed 
                for large organizations with complex websites, multiple locations, and diverse 
                product/service offerings.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                It involves managing large-scale SEO campaigns, coordinating across multiple 
                teams, implementing enterprise-level tools, and maintaining consistent SEO 
                performance across all digital properties.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Multi-site management</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Enterprise tools integration</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Enterprise SEO optimization"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Enterprise</div>
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
              Enterprise SEO Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our enterprise SEO services are designed to handle the complexity and scale of large organizations
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
              Enterprise SEO Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the enterprise plan that matches your organization's scale and requirements
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
              Enterprise SEO Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped large enterprises scale their SEO performance
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
              Why Choose Our Enterprise SEO Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of enterprise SEO and deliver scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Enterprise Expertise</h3>
              <p className="text-gray-600">Specialized in large-scale SEO optimization</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Advanced Analytics</h3>
              <p className="text-gray-600">Enterprise-level reporting and insights</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Custom Solutions</h3>
              <p className="text-gray-600">Tailored strategies for your organization</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Scalable Results</h3>
              <p className="text-gray-600">Performance that grows with your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Scale Your Enterprise SEO?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise SEO strategies can help you achieve scalable growth 
            and dominate search results in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Enterprise Consultation
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
