import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Globe, Users } from "lucide-react";

const locations = [
  {
    city: "New York",
    address: "1801 Century Park East, 24th Floor",
    fullAddress: "New York, NY 10001, United States",
    phone: "+1 (555) 123-4567",
    email: "business@digitalgrowpro.com",
    hours: "Mon-Fri 9AM-6PM EST",
    mapLink: "https://maps.google.com",
    color: "primary"
  },
  {
    city: "London", 
    address: "Level 4, 114 William Street",
    fullAddress: "London EC2A 4PF, United Kingdom",
    phone: "+44 20 7123 4567",
    email: "business@digitalgrowpro.com",
    hours: "Mon-Fri 9AM-6PM GMT",
    mapLink: "https://maps.google.com",
    color: "secondary"
  },
  {
    city: "Singapore",
    address: "68 Circular Road, #02-01",
    fullAddress: "Singapore River, 049422, SG",
    phone: "+65 6123 4567", 
    email: "business@digitalgrowpro.com",
    hours: "Mon-Fri 9AM-6PM SGT",
    mapLink: "https://maps.google.com",
    color: "accent"
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our experts",
    action: "tel:+1-555-123-4567",
    actionText: "+1 (555) 123-4567",
    color: "primary"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours",
    action: "mailto:business@digitalgrowpro.com",
    actionText: "business@digitalgrowpro.com",
    color: "secondary"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team instantly",
    action: "#",
    actionText: "Start Chat",
    color: "accent"
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a free consultation call",
    action: "#",
    actionText: "Book Now",
    color: "primary"
  }
];

export default function Contact() {
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
            Get In Touch
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Ready to transform your digital presence? Let's discuss your goals and create a 
            custom strategy that delivers results.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Let's Start a Conversation
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">business@digitaltechguides.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Website</div>
                    <div className="text-gray-600">www.digitaltechguides.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Business Hours</div>
                    <div className="text-gray-600">Mon-Fri: 9AM-6PM EST</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Customer service team"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-600">Support Team</div>
                    <div className="text-lg font-bold text-blue-600">24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="contact-methods-title">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="contact-methods-description">
              Choose the method that works best for you
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="card-hover text-center" data-testid={`contact-method-${index}`}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-${method.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`h-6 w-6 text-${method.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2" data-testid={`contact-method-title-${index}`}>
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4" data-testid={`contact-method-description-${index}`}>
                      {method.description}
                    </p>
                    <a
                      href={method.action}
                      className={`inline-flex items-center text-${method.color} font-medium hover:text-${method.color}/80 transition-colors`}
                      data-testid={`contact-method-action-${index}`}
                    >
                      {method.actionText}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="contact-form-section-title">
              Send Us a Message
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-form-section-description">
              Fill out the form below and we'll get back to you within 24 hours with a customized strategy for your business
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="locations-title">
              Our Global Presence
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="locations-description">
              Visit us at one of our offices worldwide or connect with us virtually
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="card-hover" data-testid={`location-card-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-${location.color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <MapPin className={`text-${location.color} h-8 w-8`} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`location-city-${index}`}>
                    {location.city}
                  </h3>
                  <div className="space-y-3 text-muted-foreground mb-6">
                    <p className="text-sm" data-testid={`location-address-${index}`}>
                      {location.address}<br />
                      {location.fullAddress}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <a
                      href={`tel:${location.phone.replace(/\s/g, '')}`}
                      className={`flex items-center justify-center text-${location.color} font-medium hover:text-${location.color}/80 transition-colors`}
                      data-testid={`location-phone-${index}`}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {location.phone}
                    </a>
                    <a
                      href={`mailto:${location.email}`}
                      className={`flex items-center justify-center text-${location.color} font-medium hover:text-${location.color}/80 transition-colors`}
                      data-testid={`location-email-${index}`}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      {location.email}
                    </a>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4" />
                      <span className="text-sm" data-testid={`location-hours-${index}`}>{location.hours}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-6"
                    variant="outline"
                    asChild
                    data-testid={`button-directions-${index}`}
                  >
                    <a href={location.mapLink} target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="faq-description">
              Get quick answers to common questions about our services
            </p>
          </div>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-3" data-testid="faq-question-1">
                  How quickly can we start seeing results?
                </h3>
                <p className="text-muted-foreground" data-testid="faq-answer-1">
                  While SEO typically takes 3-6 months to show significant results, PPC and social media campaigns can generate leads within the first week. We provide monthly reports to track progress and adjust strategies as needed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-3" data-testid="faq-question-2">
                  Do you work with businesses in my industry?
                </h3>
                <p className="text-muted-foreground" data-testid="faq-answer-2">
                  We have experience across virtually every industry, from healthcare and finance to e-commerce and technology. Our strategies are customized to your specific industry requirements and target audience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-3" data-testid="faq-question-3">
                  What's included in the free consultation?
                </h3>
                <p className="text-muted-foreground" data-testid="faq-answer-3">
                  Our free consultation includes a comprehensive audit of your current digital presence, competitive analysis, identification of growth opportunities, and a customized strategy outline with no obligation to proceed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="contact-cta-title">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8" data-testid="contact-cta-description">
            Don't wait another day to start improving your digital presence. Contact us now and let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg"
              asChild
              data-testid="button-call-now"
            >
              <a href="tel:+1-555-123-4567">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
              asChild
              data-testid="button-email-us"
            >
              <a href="mailto:business@digitalgrowpro.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
