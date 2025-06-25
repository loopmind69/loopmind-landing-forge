
import { Sparkles, Bot, User, Zap } from 'lucide-react';

const ComingSoon = () => {
  const upcomingFeatures = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'AI Receptionist',
      description: 'Never miss a call with our intelligent virtual receptionist'
    },
    {
      icon: <User className="h-8 w-8" />,
      title: 'AI Personal Assistant',
      description: 'Your personal AI companion for scheduling and task management'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Smart Automations',
      description: 'More intelligent workflows and automated business processes'
    }
  ];

  return (
    <section id="coming-soon" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">
              What's Coming
            </h2>
            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The future of AI automation is just around the corner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 text-sm text-blue-400 font-semibold">
                Coming Soon...
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Stay tuned for more exciting updates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
