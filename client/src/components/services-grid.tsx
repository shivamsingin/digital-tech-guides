import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Search, 
  MousePointer, 
  Share2, 
  Code, 
  Mail, 
  PenTool,
  TrendingUp,
  Smartphone
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your organic visibility and drive qualified traffic with our proven SEO strategies and techniques.",
    price: "From $299/mo",
    color: "primary",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
    href: "/local-seo"
  },
  {
    icon: MousePointer,
    title: "Pay-Per-Click Advertising",
    description: "Maximize your ROI with targeted PPC campaigns across Google, Facebook, and other platforms.",
    price: "From $399/mo",
    color: "accent",
    features: ["Google Ads", "Facebook Ads", "Landing Pages", "Conversion Tracking"],
    href: "/ppc-advertising"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage your audience across all major social media platforms.",
    price: "From $249/mo",
    color: "secondary",
    features: ["Content Creation", "Community Management", "Paid Social", "Analytics"],
    href: "/social-media-marketing"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Create stunning, responsive websites that convert visitors into customers and drive business growth.",
    price: "From $1,999",
    color: "primary",
    features: ["Custom Design", "Mobile Responsive", "CMS Integration", "E-commerce"],
    href: "/web-development"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with personalized email campaigns that drive conversions.",
    price: "From $199/mo",
    color: "accent",
    features: ["Campaign Design", "Automation", "Segmentation", "A/B Testing"],
    href: "/email-marketing"
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Engage your audience with compelling content that builds trust and drives profitable customer action.",
    price: "From $349/mo",
    color: "secondary",
    features: ["Blog Writing", "Video Content", "Infographics", "Content Strategy"],
    href: "/content-marketing"
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    description: "Comprehensive digital transformation planning to align all marketing channels for maximum impact.",
    price: "From $599/mo",
    color: "primary",
    features: ["Market Analysis", "Competitor Research", "Growth Planning", "KPI Setting"],
    href: "/services"
  },
  {
    icon: Smartphone,
    title: "Mobile Marketing",
    description: "Reach your audience where they are with targeted mobile marketing campaigns and app promotion.",
    price: "From $299/mo",
    color: "accent",
    features: ["App Store Optimization", "Mobile Ads", "SMS Marketing", "Push Notifications"],
    href: "/mobile-marketing"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            Our Digital Marketing Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
            Comprehensive solutions to elevate your online presence and drive measurable business growth
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-hover group" data-testid={`service-card-${index}`}>
                <CardContent className="p-8">
                  <div className={`w-12 h-12 bg-${service.color}/10 rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className={`text-${service.color} h-6 w-6`} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold text-${service.color}`} data-testid={`service-price-${index}`}>
                      {service.price}
                    </span>
                    <Link href={service.href}>
                      <Button
                        variant="ghost"
                        className={`text-${service.color} font-medium hover:text-${service.color}/80`}
                        data-testid={`button-learn-more-${index}`}
                      >
                        Learn More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
