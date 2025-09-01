import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesGrid from "@/components/services-grid";
import CaseStudyCard from "@/components/case-study-card";
import TestimonialCard from "@/components/testimonial-card";
import TeamMemberCard from "@/components/team-member-card";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Search, Target, Cog, TrendingUp, Calendar, Download, Clock, Shield } from "lucide-react";
import type { CaseStudy, Testimonial } from "@shared/schema";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Research",
    description: "We analyze your business, competitors, and target audience to develop the perfect strategy.",
  },
  {
    icon: Target,
    title: "Strategy & Planning", 
    description: "Creating a comprehensive roadmap with clear objectives and measurable KPIs.",
  },
  {
    icon: Cog,
    title: "Execution & Development",
    description: "Implementing campaigns across all digital channels with precision and creativity.",
  },
  {
    icon: TrendingUp,
    title: "Optimization & Growth",
    description: "Continuous monitoring, testing, and optimization for maximum performance.",
  },
];

const teamMembers = [
  {
    name: "David Thompson",
    role: "SEO Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emma Wilson",
    role: "PPC Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Alex Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Lisa Park",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
];

const awards = [
  { name: "Forbes", description: "Best Agency 2024", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=60" },
  { name: "Clutch", description: "Top 100 Agency", image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=60" },
  { name: "Google Partner", description: "Certified Partner", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=60" },
  { name: "Entrepreneur", description: "Top Digital Agency", image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=60" },
  { name: "Good Firms", description: "Best SEO Company", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=60" },
  { name: "Inc 5000", description: "Fastest Growing", image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=60" },
];

export default function Home() {
  const { data: caseStudies, isLoading: caseStudiesLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies/featured"],
  });

  const { data: testimonials, isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials/featured"],
  });

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
        
        {/* Hero Image */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
            alt="Digital marketing success"
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="hero-title">
                Digital Tech Guides SEO Excellence
              </h1>
              <p className="text-xl mb-8 text-white/90" data-testid="hero-description">
                Transform your business with data-driven SEO strategies that deliver measurable results. 
                We help businesses dominate search rankings and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Get Free SEO Audit
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="SEO optimization dashboard"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-600">Traffic Growth</div>
                      <div className="text-2xl font-bold text-green-600">+300%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="process-title">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="process-description">
              From being a startup to becoming an online enterprise, here's how we'll get you live
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center space-y-4" data-testid={`process-step-${index}`}>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="text-primary-foreground h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold" data-testid={`process-step-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`process-step-description-${index}`}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Case Studies Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="case-studies-title">
              Outstanding Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="case-studies-description">
              Having generated over 1 million leads and 1,000+ success stories, we're dedicated to delivering exceptional outcomes
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {caseStudiesLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-muted-foreground/20 h-64 rounded-xl"></div>
                </div>
              ))
            ) : (
              caseStudies?.slice(0, 3).map((caseStudy, index) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
              ))
            )}
          </div>
          <div className="text-center">
            <Link href="/case-studies">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-view-all-cases"
              >
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-semibold text-lg" data-testid="about-badge">Who We Are</span>
                <h2 className="text-4xl font-bold text-foreground" data-testid="about-title">
                  We're No Ordinary Digital Marketing Agency
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description-1">
                  DigitalGrow Pro is a full-service digital marketing agency that specializes in generating leads and driving sales for startups and SMBs. We believe that every business deserves a chance to thrive online, and we're here to make that happen for you.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description-2">
                  Our team of 50+ certified experts combines creativity with data-driven strategies to deliver measurable results. We don't just create campaigns; we build sustainable growth engines for your business.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-experience">22+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-secondary mb-2" data-testid="stat-cases">1000+</div>
                  <div className="text-sm text-muted-foreground">Case Studies</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-clients">6K+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-leads">1M+</div>
                  <div className="text-sm text-muted-foreground">Leads Generated</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional office workspace"
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="about-image"
              />
              <div className="absolute -bottom-8 -right-8 bg-card text-card-foreground p-6 rounded-xl shadow-xl border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1" data-testid="google-badge">Google</div>
                  <div className="text-sm text-muted-foreground mb-2">Certified Partner</div>
                  <div className="flex text-yellow-400 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-sm"></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="awards-title">
              Recognized Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="awards-description">
              Awarded by top publications and industry authorities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {awards.map((award, index) => (
              <div key={index} className="text-center space-y-2" data-testid={`award-${index}`}>
                <img
                  src={award.image}
                  alt={award.name}
                  className="mx-auto h-8 w-auto grayscale hover:grayscale-0 transition-all"
                />
                <div className="text-xs text-muted-foreground">{award.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="testimonials-title">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="testimonials-description">
              Don't take our word for it - see what our satisfied clients have to share
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonialsLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-muted-foreground/20 h-64 rounded-xl"></div>
                </div>
              ))
            ) : (
              testimonials?.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))
            )}
          </div>
          <div className="text-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-view-reviews">
              <i className="fab fa-google mr-2"></i>View All 250+ Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="team-title">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="team-description">
              Our world-class team of 50+ digital marketing experts brings together decades of experience and cutting-edge expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/about">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-full-team">
                Meet Our Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold" data-testid="cta-title">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto" data-testid="cta-description">
              Schedule a free consultation with our digital marketing experts and discover how we can transform your online presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg"
                  data-testid="button-book-consultation"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                data-testid="button-seo-audit"
              >
                <Download className="mr-2 h-5 w-5" />
                Get Free SEO Audit
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 pt-4">
              <div className="flex items-center text-white/80">
                <Clock className="mr-2 h-4 w-4" />
                <span className="text-sm">No commitment required</span>
              </div>
              <div className="flex items-center text-white/80">
                <Shield className="mr-2 h-4 w-4" />
                <span className="text-sm">100% confidential</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
