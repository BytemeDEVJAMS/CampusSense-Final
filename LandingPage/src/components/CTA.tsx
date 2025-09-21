import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Star, Zap, Heart } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Epic background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Cyberpunk elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl neon-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/15 rounded-full blur-2xl neon-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/20 rounded-full blur-xl neon-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Glitch lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-white/20 blur-sm animate-pulse" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-white/15 blur-sm animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-10 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect border border-white/20">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white/90 font-medium">Join 10K+ students already winning</span>
            <Zap className="w-5 h-5 text-yellow-400 ml-2" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight">
              Ready to Be That
              <br />
              <span className="text-white/80 glitch-text">Smart Friend?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-medium">
              Stop wandering around campus like it's 2010. Join the CampusSense revolution and become the campus guru everyone asks for directions 🧭
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              variant="glass" 
              size="lg" 
              className="text-lg px-10 py-6 h-auto group bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl border border-white/20 shadow-glass font-bold"
            >
              <Smartphone className="w-6 h-6" />
              Launch CampusSense
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-6 h-auto border-white/30 bg-transparent text-white hover:bg-white/10 font-bold"
            >
              <Heart className="w-5 h-5" />
              Tell me more
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-white">10K+</div>
              <div className="text-white/60">Students vibing</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-white">24/7</div>
              <div className="text-white/60">Always updating</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-white">100%</div>
              <div className="text-white/60">Free forever</div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="pt-16 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} CampusSense. Made with 💜 by VIT students.
              </p>
              
              <div className="flex items-center space-x-6 text-white/50 text-sm">
                <span>Built different 🔥</span>
                <span>•</span>
                <span>Privacy first 🔒</span>
                <span>•</span>
                <span>No cap 💯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;