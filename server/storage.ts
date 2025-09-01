import { type User, type InsertUser, type Contact, type InsertContact, type CaseStudy, type InsertCaseStudy, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  markContactAsRead(id: string): Promise<void>;
  
  getCaseStudies(): Promise<CaseStudy[]>;
  getFeaturedCaseStudies(): Promise<CaseStudy[]>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  
  getTestimonials(): Promise<Testimonial[]>;
  getFeaturedTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private caseStudies: Map<string, CaseStudy>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.caseStudies = new Map();
    this.testimonials = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample case studies
    const sampleCaseStudies: CaseStudy[] = [
      {
        id: randomUUID(),
        title: "Fashion E-commerce Platform",
        industry: "E-commerce",
        challenge: "Low organic visibility and poor conversion rates in competitive fashion market",
        solution: "Comprehensive SEO strategy with technical optimizations and content marketing",
        results: "450% increase in organic traffic, 285% improvement in conversion rate",
        metrics: JSON.stringify({
          organicTraffic: "450%",
          keywordsRanked: "850+",
          conversionRate: "+285%"
        }),
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        clientName: "FashionForward Inc.",
        clientLogo: "",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "B2B Software Solution",
        industry: "SaaS",
        challenge: "Limited brand awareness and high customer acquisition costs",
        solution: "Multi-channel digital marketing approach with PPC and content strategy",
        results: "320% increase in lead generation, 60% reduction in CAC",
        metrics: JSON.stringify({
          leadGeneration: "320%",
          cacReduction: "-60%",
          sqlRate: "+180%"
        }),
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        clientName: "TechVenture Inc.",
        clientLogo: "",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Medical Practice Group",
        industry: "Healthcare",
        challenge: "Low local visibility and limited patient acquisition online",
        solution: "Local SEO optimization and reputation management strategy",
        results: "950% improvement in local rankings, 240% increase in new patients",
        metrics: JSON.stringify({
          localRankings: "950%",
          newPatients: "+240%",
          googleReviews: "4.9★"
        }),
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        clientName: "HealthCare Partners",
        clientLogo: "",
        featured: true,
        createdAt: new Date(),
      }
    ];

    sampleCaseStudies.forEach(caseStudy => {
      this.caseStudies.set(caseStudy.id, caseStudy);
    });

    // Sample testimonials
    const sampleTestimonials: Testimonial[] = [
      {
        id: randomUUID(),
        clientName: "Ross Mitchell",
        clientRole: "CEO",
        clientCompany: "TechVenture Inc.",
        rating: 5,
        testimonial: "DigitalGrow Pro transformed our online presence completely. Our organic traffic increased by 400% and we're now ranking #1 for our target keywords. The ROI has been incredible!",
        clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        clientName: "Sarah Chen",
        clientRole: "Founder",
        clientCompany: "E-commerce Solutions",
        rating: 5,
        testimonial: "Working with DigitalGrow Pro has been a game-changer for our business. Their team is responsive, professional, and delivers results that exceed expectations every time.",
        clientImage: "https://images.unsplash.com/photo-1494790108755-2616b5b7c2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        clientName: "Michael Rodriguez",
        clientRole: "Director",
        clientCompany: "Growth Dynamics",
        rating: 5,
        testimonial: "The expertise and dedication of the DigitalGrow Pro team is unmatched. They helped us scale from a local business to a national brand with their strategic approach.",
        clientImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60",
        featured: true,
        createdAt: new Date(),
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      company: insertContact.company || null,
      id,
      createdAt: new Date(),
      isRead: false,
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async markContactAsRead(id: string): Promise<void> {
    const contact = this.contacts.get(id);
    if (contact) {
      contact.isRead = true;
      this.contacts.set(id, contact);
    }
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getFeaturedCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values())
      .filter(cs => cs.featured)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async createCaseStudy(insertCaseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const id = randomUUID();
    const caseStudy: CaseStudy = {
      ...insertCaseStudy,
      imageUrl: insertCaseStudy.imageUrl || null,
      clientName: insertCaseStudy.clientName || null,
      clientLogo: insertCaseStudy.clientLogo || null,
      featured: insertCaseStudy.featured || null,
      id,
      createdAt: new Date(),
    };
    this.caseStudies.set(id, caseStudy);
    return caseStudy;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(t => t.featured)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...insertTestimonial,
      featured: insertTestimonial.featured || null,
      clientImage: insertTestimonial.clientImage || null,
      id,
      createdAt: new Date(),
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
