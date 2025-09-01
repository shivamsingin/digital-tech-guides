import { Link } from "wouter";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Logo variant="footer" />
            <p className="text-background/70" data-testid="footer-description">
              Your trusted partner for digital marketing excellence. We help businesses grow through innovative strategies and proven results.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors"
                data-testid="social-facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors"
                data-testid="social-twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors"
                data-testid="social-linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-colors"
                data-testid="social-instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" data-testid="footer-services-title">Services</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="/services" className="hover:text-background transition-colors" data-testid="footer-link-seo">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-background transition-colors" data-testid="footer-link-ppc">
                  PPC Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-background transition-colors" data-testid="footer-link-social">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-background transition-colors" data-testid="footer-link-web">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-background transition-colors" data-testid="footer-link-content">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-background transition-colors" data-testid="footer-link-email">
                  Email Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" data-testid="footer-company-title">Company</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="/about" className="hover:text-background transition-colors" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-background transition-colors" data-testid="footer-link-team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-background transition-colors" data-testid="footer-link-cases">
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors" data-testid="footer-link-careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors" data-testid="footer-link-blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors" data-testid="footer-link-press">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" data-testid="footer-contact-title">Contact Info</h4>
            <div className="space-y-3 text-background/70">
              <div className="flex items-center">
                <i className="fas fa-phone mr-3 text-primary"></i>
                <span data-testid="footer-phone">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3 text-primary"></i>
                <span data-testid="footer-email">business@digitaltechguides.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock mr-3 text-primary"></i>
                <span data-testid="footer-hours">Mon-Fri 9AM-6PM EST</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm" data-testid="footer-copyright">
              © 2024 Digital Tech Guides. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors" data-testid="footer-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors" data-testid="footer-terms">
                Terms of Service
              </a>
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors" data-testid="footer-cookies">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
