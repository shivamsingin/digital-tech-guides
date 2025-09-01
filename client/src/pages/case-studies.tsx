import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CaseStudyCard from "@/components/case-study-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { TrendingUp, Users, Award, Globe } from "lucide-react";
import type { CaseStudy } from "@shared/schema";

const stats = [
  {
    icon: TrendingUp,
    value: "340%",
    label: "Average ROI",
    description: "Return on investment across all campaigns"
  },
  {
    icon: Users,
    value: "1M+",
    label: "Leads Generated",
    description: "Quality leads generated for our clients"
  },
  {
    icon: Award,
    value: "98%",
    label: "Client Retention",
    description: "Long-term partnerships with our clients"
  },
  {
    icon: Globe,
    value: "5M+",
    label: "Keywords Ranked",
    description: "Keywords ranking on first page of Google"
  }
];

export default function CaseStudies() {
  const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"],
  });

  const industries = caseStudies ? [...new Set(caseStudies.map(cs => cs.industry))] : [];

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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Discover how we've helped businesses across industries achieve remarkable results 
            through strategic digital marketing campaigns.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Featured Success Story
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="text-sm">E-commerce</Badge>
                  <Badge variant="outline" className="text-sm">SEO</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Fashion Retailer Achieves 400% Revenue Growth
                </h3>
                <p className="text-lg text-gray-600">
                  A leading fashion retailer struggled with online visibility and conversion rates. 
                  Through comprehensive SEO optimization and content strategy, we helped them achieve 
                  remarkable growth in organic traffic and sales.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">400%</div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">250%</div>
                    <div className="text-sm text-gray-600">Traffic Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">180%</div>
                    <div className="text-sm text-gray-600">Conversion Boost</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="E-commerce success story"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Growth</div>
                    <div className="text-lg font-bold text-green-600">400%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center" data-testid={`stat-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2 stats-counter" data-testid={`stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1" data-testid={`stat-label-${index}`}>
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground" data-testid={`stat-description-${index}`}>
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="default" className="px-4 py-2 cursor-pointer" data-testid="filter-all">
              All Industries
            </Badge>
            {industries.map((industry, index) => (
              <Badge 
                key={industry} 
                variant="outline" 
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid={`filter-${industry.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-muted h-80 rounded-xl"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies?.map((caseStudy, index) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="methodology-title">
              Our Proven Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="methodology-description">
              Every successful campaign follows our time-tested approach to digital marketing excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-3" data-testid="methodology-step-1-title">Analysis</h3>
                <p className="text-sm text-muted-foreground" data-testid="methodology-step-1-description">
                  Deep dive into your business, market, and competition to identify opportunities
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-secondary-foreground font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-3" data-testid="methodology-step-2-title">Strategy</h3>
                <p className="text-sm text-muted-foreground" data-testid="methodology-step-2-description">
                  Develop a comprehensive plan with clear objectives and success metrics
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-3" data-testid="methodology-step-3-title">Execution</h3>
                <p className="text-sm text-muted-foreground" data-testid="methodology-step-3-description">
                  Implement campaigns with precision across all relevant digital channels
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-3" data-testid="methodology-step-4-title">Optimization</h3>
                <p className="text-sm text-muted-foreground" data-testid="methodology-step-4-description">
                  Continuously monitor, test, and optimize for maximum performance and ROI
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="case-studies-cta-title">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-white/80 mb-8" data-testid="case-studies-cta-description">
            Let's create a case study for your business that showcases remarkable growth and success
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg"
              data-testid="button-start-success-story"
            >
              Start Your Success Story
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
