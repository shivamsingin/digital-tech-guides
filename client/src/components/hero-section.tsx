import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Play, Rocket, Trophy, Star, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20">
                <Trophy className="mr-2 h-4 w-4 text-yellow-400" />
                #1 Rated SEO Agency 2024
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Digital Tech Guides
                </span>
                <span className="block mt-2">SEO Excellence</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                An exclusive global SEO agency that drives exceptional results. We help businesses achieve 
                <span className="font-semibold text-white"> 300%+ growth </span>
                through strategic digital marketing and proven SEO techniques.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-blue-200">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span>250+ Reviews</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span>Google Partner</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Case Studies
                </Button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">95%</div>
                <div className="text-sm text-blue-200">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">1000+</div>
                <div className="text-sm text-blue-200">Projects Completed</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image and Stats */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Digital marketing team collaboration"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">Average ROI</div>
                    <div className="text-2xl font-bold text-gray-900">340%</div>
                  </div>
                </div>
              </div>
              
              {/* Download Case Studies Card */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-white/20 max-w-xs">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Download SEO Case Studies</div>
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Download Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
