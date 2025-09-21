import { Eye, MapPin, Clock, Brain, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Sees Everything 👁️",
    description: "Our AI literally watches campus foot traffic 24/7. It's giving Big Brother but make it helpful.",
    gradient: "from-primary to-primary-glow",
    shadow: "neon"
  },
  {
    icon: Sparkles,
    title: "Heatmaps That Actually Slap 🔥", 
    description: "Real-time crowd visualization that's cleaner than your Spotify Wrapped. No cap.",
    gradient: "from-secondary to-secondary-glow",
    shadow: "cyan"
  },
  {
    icon: Zap,
    title: "Big Brain Energy ⚡",
    description: "Make moves with data. Skip the queues, find study spots, avoid the chaos. It's giving main character energy.",
    gradient: "from-accent to-accent-glow",
    shadow: "green"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary/30 mb-6">
            <span className="text-sm text-muted-foreground">How we're changing the game 🎮</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
            How <span className="gradient-text-neon">CampusSense</span>
            <br />
            <span className="text-foreground">Actually Works</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three steps to becoming the smartest person on campus (literally)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`group glass-effect hover:shadow-${feature.shadow} transition-all duration-500 hover-lift border-border/20 bg-card/10 backdrop-blur-xl`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-${feature.shadow}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full neon-pulse opacity-50" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary rounded-full neon-pulse opacity-40" style={{ animationDelay: '1s' }} />
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground font-medium">
            Basically, we turned campus navigation into a science 🧪
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;