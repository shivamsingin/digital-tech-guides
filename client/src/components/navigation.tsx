import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import Logo from "./logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceItems = [
    { href: "/services", label: "All Services" },
    { href: "/local-seo", label: "Local SEO" },
    { href: "/ecommerce-seo", label: "E-commerce SEO" },
    { href: "/enterprise-seo", label: "Enterprise SEO" },
    { href: "/youtube-seo", label: "YouTube SEO" },
    { href: "/ppc-advertising", label: "PPC Advertising" },
    { href: "/social-media-marketing", label: "Social Media Marketing" },
    { href: "/web-development", label: "Web Development" },
    { href: "/email-marketing", label: "Email Marketing" },
    { href: "/content-marketing", label: "Content Marketing" },
    { href: "/mobile-marketing", label: "Mobile Marketing" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="bg-card shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo variant="navigation" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  data-testid={`nav-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location.startsWith("/services") || location.includes("-seo") || location.includes("-marketing") || location.includes("-development") || location.includes("-advertising")
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    data-testid="nav-services-dropdown"
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {serviceItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="cursor-pointer"
                        data-testid={`dropdown-${item.label.toLowerCase().replace(" ", "-")}`}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+1-555-123-4567"
              className="text-sm font-medium text-primary hidden sm:flex items-center"
              data-testid="phone-number"
            >
              <i className="fas fa-phone mr-2"></i>+1 (555) 123-4567
            </a>
            <Link href="/contact">
              <Button className="gradient-bg text-primary-foreground hover:opacity-90" data-testid="button-consultation">
                Free Consultation
              </Button>
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-lg font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                        onClick={() => setIsOpen(false)}
                        data-testid={`mobile-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                    
                    {/* Mobile Services Section */}
                    <div className="border-t border-border pt-4">
                      <div className="text-lg font-medium text-muted-foreground mb-2">Services</div>
                      <div className="space-y-2 pl-4">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block text-base transition-colors ${
                              isActive(item.href)
                                ? "text-primary"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                            onClick={() => setIsOpen(false)}
                            data-testid={`mobile-dropdown-${item.label.toLowerCase().replace(" ", "-")}`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href="tel:+1-555-123-4567"
                      className="text-lg font-medium text-primary flex items-center"
                      data-testid="mobile-phone-number"
                    >
                      <i className="fas fa-phone mr-2"></i>+1 (555) 123-4567
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
