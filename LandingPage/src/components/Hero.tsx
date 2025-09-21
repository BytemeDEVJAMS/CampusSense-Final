import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Zap } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh animate-pulse" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl neon-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl neon-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/20 rounded-full blur-xl neon-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary/30 mb-4">
                <Zap className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm text-muted-foreground">VIT's first AI campus tracker ✨</span>
              </div>
              
              <h1 className="text-5xl lg:text-8xl font-black leading-tight tracking-tight">
                <span className="gradient-text-neon glitch-text">CampusSense</span>
                <br />
                <span className="text-foreground">Navigate VIT</span>
                <br />
                <span className="text-primary">Smarter.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl font-medium">
                Skip the crowds, find the vibes. Real-time campus intel that actually hits different 🔥
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                  href="/ui.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                      <Button 
                        variant="hero" 
                        size="lg" 
                        className="text-lg px-8 py-6 h-auto group font-bold"
                      >
                        <Smartphone className="w-5 h-5" />
                        Launch App
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
              
              
            </div>

            
          </div>
          
          {/* Right Column - Phone Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroPhone} 
                alt="CampusSense app showing live campus heatmap with neon interface"
                className="w-80 lg:w-96 h-auto float-intense neon-glow rounded-3xl"
              />
              
              {/* Cyberpunk floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-primary rounded-lg rotate-12 neon-pulse opacity-80" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-secondary rounded-full neon-pulse opacity-70" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/3 -right-12 w-10 h-10 bg-gradient-accent rounded-lg -rotate-12 neon-pulse opacity-60" style={{ animationDelay: '2s' }} />
              
              {/* Glitch lines */}
              <div className="absolute top-1/4 left-0 w-full h-px bg-primary/50 blur-sm animate-pulse" />
              <div className="absolute bottom-1/3 left-0 w-full h-px bg-secondary/50 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;