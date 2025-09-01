import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TeamMemberCard from "@/components/team-member-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Award, Globe, Target, Heart, Lightbulb } from "lucide-react";

const teamMembers = [
  {
    name: "David Thompson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emma Wilson",
    role: "Chief Marketing Officer",
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
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Chen",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sophie Rodriguez",
    role: "Analytics Manager",
    image: "https://images.unsplash.com/photo-1494790108755-2616b5b7c2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Wilson",
    role: "SEO Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rachel Kim",
    role: "Content Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  }
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every campaign is designed with clear objectives and measurable outcomes. We focus on metrics that matter to your business bottom line."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We work as an extension of your team, always putting your business goals and satisfaction first."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of digital marketing trends and continuously adapt our strategies to leverage the latest technologies and platforms."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in transparent communication and collaborative partnerships that foster long-term business relationships."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from strategy development to campaign execution and reporting."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "With offices worldwide, we understand local markets while maintaining a global perspective on digital marketing trends."
  }
];

export default function About() {
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
            About Digital Tech Guides
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            We're a team of passionate digital marketers dedicated to helping businesses succeed online 
            through strategic SEO and digital marketing solutions.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2002, Digital Tech Guides has been at the forefront of digital marketing 
                innovation. We started as a small team of SEO enthusiasts and have grown into a 
                comprehensive digital marketing agency.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is simple: to help businesses of all sizes achieve their digital marketing 
                goals through data-driven strategies, innovative solutions, and exceptional service.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">1000+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration meeting"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Award Winning</div>
                    <div className="text-lg font-bold text-yellow-600">2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="values-title">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="values-description">
              These principles guide everything we do and define who we are as a company
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center" data-testid={`value-card-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`value-title-${index}`}>
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`value-description-${index}`}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="team-section-title">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="team-section-description">
              Our diverse team of specialists brings together expertise from across the digital marketing spectrum
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="stats-title">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="stats-description">
              These metrics represent the real impact we've made for our clients over the years
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 stats-counter" data-testid="stat-years">22+</div>
              <div className="text-muted-foreground">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2 stats-counter" data-testid="stat-projects">1000+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2 stats-counter" data-testid="stat-clients-total">6000+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 stats-counter" data-testid="stat-keywords-ranked">5M+</div>
              <div className="text-muted-foreground">Keywords Ranked</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="about-cta-title">
            Want to Join Our Success Stories?
          </h2>
          <p className="text-xl text-white/80 mb-8" data-testid="about-cta-description">
            Let's work together to achieve your digital marketing goals and grow your business
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg"
              data-testid="button-get-started-about"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
