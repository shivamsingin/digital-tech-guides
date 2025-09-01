import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Search, 
  MousePointer, 
  Share2, 
  Code, 
  Mail, 
  PenTool,
  TrendingUp,
  Smartphone,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const serviceUrls = [
  "/local-seo", // SEO service maps to local SEO for now
  "/ppc-advertising",
  "/social-media-marketing", 
  "/web-development",
  "/email-marketing",
  "/content-marketing",
  "/mobile-marketing"
];

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Dominate search results and drive organic traffic with our comprehensive SEO strategies. We help your business rank higher, attract more qualified leads, and establish authority in your industry.",
    features: [
      "Comprehensive keyword research and analysis",
      "Technical SEO optimization and site audits",
      "On-page and off-page optimization",
      "Local SEO for location-based businesses",
      "Content optimization and strategy",
      "Link building and digital PR",
      "Monthly reporting and performance tracking"
    ],
    pricing: {
      starter: "$299/mo",
      professional: "$599/mo",
      enterprise: "$1,299/mo"
    },
    results: "Average 250% increase in organic traffic within 6 months"
  },
  {
    icon: MousePointer,
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Maximize your advertising ROI with targeted PPC campaigns across Google Ads, Facebook, LinkedIn, and other platforms. Get immediate visibility and qualified leads.",
    features: [
      "Google Ads campaign management",
      "Facebook and Instagram advertising",
      "LinkedIn B2B campaign optimization",
      "Landing page design and optimization",
      "Conversion tracking and analytics",
      "A/B testing and performance optimization",
      "Monthly strategy reviews and reporting"
    ],
    pricing: {
      starter: "$399/mo",
      professional: "$799/mo", 
      enterprise: "$1,599/mo"
    },
    results: "Average 340% return on ad spend (ROAS)"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build brand awareness, engage your audience, and drive conversions through strategic social media marketing across all major platforms.",
    features: [
      "Social media strategy development",
      "Content creation and curation",
      "Community management and engagement",
      "Paid social advertising campaigns",
      "Influencer partnership coordination",
      "Social media analytics and reporting",
      "Brand reputation monitoring"
    ],
    pricing: {
      starter: "$249/mo",
      professional: "$499/mo",
      enterprise: "$999/mo"
    },
    results: "Average 180% increase in social engagement and followers"
  },
  {
    icon: Code,
    title: "Web Development & Design",
    description: "Create stunning, high-converting websites that represent your brand professionally and drive business growth through exceptional user experience.",
    features: [
      "Custom website design and development",
      "Mobile-responsive and fast-loading sites",
      "E-commerce platform development",
      "Content management system integration",
      "Conversion rate optimization",
      "Website maintenance and updates",
      "Security and performance monitoring"
    ],
    pricing: {
      starter: "$1,999",
      professional: "$4,999",
      enterprise: "$9,999+"
    },
    results: "Average 65% improvement in conversion rates"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads, retain customers, and drive repeat business with personalized email marketing campaigns that deliver exceptional ROI.",
    features: [
      "Email campaign strategy and planning",
      "Template design and development",
      "List building and segmentation",
      "Marketing automation setup",
      "A/B testing and optimization",
      "Performance tracking and analytics",
      "Compliance and deliverability management"
    ],
    pricing: {
      starter: "$199/mo",
      professional: "$399/mo",
      enterprise: "$799/mo"
    },
    results: "Average 4,200% ROI on email marketing campaigns"
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Engage your audience and establish thought leadership with high-quality content that educates, entertains, and converts.",
    features: [
      "Content strategy development",
      "Blog writing and optimization",
      "Video content creation",
      "Infographic and visual content design",
      "Content distribution and promotion",
      "Performance measurement and optimization",
      "Editorial calendar management"
    ],
    pricing: {
      starter: "$349/mo",
      professional: "$699/mo",
      enterprise: "$1,399/mo"
    },
    results: "Average 300% increase in qualified leads through content"
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy & Consulting",
    description: "Develop comprehensive digital transformation strategies that align all marketing channels for maximum impact and sustainable growth.",
    features: [
      "Digital marketing audit and assessment",
      "Competitive analysis and market research",
      "Multi-channel strategy development",
      "KPI setting and performance frameworks",
      "Technology stack recommendations",
      "Team training and development",
      "Ongoing strategic consulting"
    ],
    pricing: {
      starter: "$599/mo",
      professional: "$1,199/mo",
      enterprise: "$2,399/mo"
    },
    results: "Average 220% improvement in overall marketing ROI"
  },
  {
    icon: Smartphone,
    title: "Mobile Marketing",
    description: "Reach your audience where they spend most of their time with targeted mobile marketing campaigns and app optimization strategies.",
    features: [
      "App store optimization (ASO)",
      "Mobile advertising campaigns",
      "SMS and push notification marketing",
      "Mobile website optimization",
      "Location-based marketing",
      "Mobile analytics and attribution",
      "Cross-platform campaign coordination"
    ],
    pricing: {
      starter: "$299/mo",
      professional: "$599/mo",
      enterprise: "$1,199/mo"
    },
    results: "Average 185% increase in mobile conversions"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-bg text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="services-hero-title">
            Comprehensive Digital Marketing Services
          </h1>
          <p className="text-xl text-white/80 mb-8" data-testid="services-hero-description">
            From SEO and PPC to social media and web development, we offer everything you need to succeed online
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              data-testid="button-get-started"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                  data-testid={`service-section-${index}`}
                >
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-sm">
                        #{index + 1} Service
                      </Badge>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground" data-testid={`service-title-${index}`}>
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`service-description-${index}`}>
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted p-6 rounded-xl">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Starter</div>
                          <div className="text-lg font-bold text-primary">{service.pricing.starter}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Professional</div>
                          <div className="text-lg font-bold text-secondary">{service.pricing.professional}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Enterprise</div>
                          <div className="text-lg font-bold text-accent">{service.pricing.enterprise}</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 pt-4">
                      <div className="text-sm text-muted-foreground">
                        <strong className="text-secondary">Results:</strong> {service.results}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link href={serviceUrls[index]}>
                          <Button 
                            variant="outline" 
                            className="w-full sm:w-auto bg-white text-blue-600 border-blue-600 hover:bg-blue-50" 
                            data-testid={`button-learn-more-${index}`}
                          >
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button 
                            className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700" 
                            data-testid={`button-get-quote-${index}`}
                          >
                            Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${
                          index % 2 === 0 ? '1460925895917-afdab827c52f' : '1553877522-43269d4ea984'
                        }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`}
                        alt={`${service.title} illustration`}
                        className="w-full h-64 object-cover"
                        data-testid={`service-image-${index}`}
                      />
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="services-cta-title">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/80 mb-8" data-testid="services-cta-description">
            Let's discuss your goals and create a custom strategy that delivers results
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 text-lg"
              data-testid="button-start-project-services"
            >
              Start Your Project Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
