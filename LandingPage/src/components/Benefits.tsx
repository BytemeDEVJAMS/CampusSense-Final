import { Users, BookOpen, Shield, TrendingUp, Coffee, Wifi } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Skip the Chaos 🏃‍♀️",
    description: "Avoid those awkward moments when you walk into a packed canteen. We'll show you where it's actually chill.",
    features: ["Real-time crowd tracking", "Queue predictions", "Peak hour alerts"],
    reverse: false,
    accent: "primary"
  },
  {
    icon: BookOpen,
    title: "Study Spots That Hit Different 📚",
    description: "Find your perfect study sanctuary. No more wandering around like a lost freshman looking for an empty table.",
    features: ["Library seat availability", "Quiet zone mapping", "Study group recommendations"],
    reverse: true,
    accent: "secondary"
  },
  {
    icon: Shield,
    title: "Safety First, Always 🛡️",
    description: "Choose routes with good vibes and proper lighting. Your parents will thank us for keeping you safe.",
    features: ["Safe route suggestions", "Well-lit path mapping", "Emergency location sharing"],
    reverse: false,
    accent: "accent"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-secondary/30 mb-6">
            <TrendingUp className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm text-muted-foreground">Why everyone's obsessed 💯</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
            Your Campus,
            <br />
            <span className="gradient-text-neon">Completely Optimized</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another app. We're your campus survival guide that actually gets it.
          </p>
        </div>

        <div className="space-y-32 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const accentColor = benefit.accent as 'primary' | 'secondary' | 'accent';
            
            return (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${benefit.reverse ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Text Content */}
                <div className={`space-y-8 ${benefit.reverse ? 'lg:col-start-2' : ''}`}>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-${accentColor} shadow-${accentColor === 'primary' ? 'neon' : accentColor === 'secondary' ? 'cyan' : 'green'}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-${accentColor} neon-pulse`} />
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Content */}
                <div className={`relative ${benefit.reverse ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-video glass-effect rounded-3xl border border-border/20 overflow-hidden relative group">
                    {/* Animated content area */}
                    <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-card/20 flex items-center justify-center">
                      <div className="text-center space-y-6 p-8">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-${accentColor} mx-auto flex items-center justify-center float-intense`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-muted-foreground font-medium text-sm">
                          Interactive preview coming soon ✨
                        </p>
                      </div>
                    </div>
                    
                    {/* Cyberpunk grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
                    
                    {/* Glowing corners */}
                    <div className={`absolute top-4 left-4 w-3 h-3 rounded-full bg-${accentColor} neon-pulse opacity-60`} />
                    <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-${accentColor} neon-pulse opacity-40`} style={{ animationDelay: '1s' }} />
                    <div className={`absolute bottom-4 left-4 w-2 h-2 rounded-full bg-${accentColor} neon-pulse opacity-50`} style={{ animationDelay: '2s' }} />
                    <div className={`absolute bottom-4 right-4 w-3 h-3 rounded-full bg-${accentColor} neon-pulse opacity-30`} style={{ animationDelay: '1.5s' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-6 glass-effect px-8 py-4 rounded-2xl border border-border/20">
            <Coffee className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium">Made by students, for students</span>
            <Wifi className="w-6 h-6 text-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;