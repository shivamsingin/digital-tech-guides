import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import CaseStudies from "@/pages/case-studies";
import Contact from "@/pages/contact";
import LocalSEO from "@/pages/local-seo";
import EcommerceSEO from "@/pages/ecommerce-seo";
import EnterpriseSEO from "@/pages/enterprise-seo";
import YouTubeSEO from "@/pages/youtube-seo";
import PPCAdvertising from "@/pages/ppc-advertising";
import SocialMediaMarketing from "@/pages/social-media-marketing";
import WebDevelopment from "@/pages/web-development";
import EmailMarketing from "@/pages/email-marketing";
import ContentMarketing from "@/pages/content-marketing";
import MobileMarketing from "@/pages/mobile-marketing";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/local-seo" component={LocalSEO} />
      <Route path="/ecommerce-seo" component={EcommerceSEO} />
      <Route path="/enterprise-seo" component={EnterpriseSEO} />
      <Route path="/youtube-seo" component={YouTubeSEO} />
      <Route path="/ppc-advertising" component={PPCAdvertising} />
      <Route path="/social-media-marketing" component={SocialMediaMarketing} />
      <Route path="/web-development" component={WebDevelopment} />
      <Route path="/email-marketing" component={EmailMarketing} />
      <Route path="/content-marketing" component={ContentMarketing} />
      <Route path="/mobile-marketing" component={MobileMarketing} />
      <Route path="/about" component={About} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
