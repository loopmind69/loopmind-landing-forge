
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PricingSection = () => {
  const plans = [
    {
      title: 'ChatBot',
      features: [
        'Intelligent conversation handling',
        '24/7 automated responses',
        'Basic analytics dashboard',
        'Multi-platform integration',
        'Custom knowledge base',
        'Basic customer support'
      ]
    },
    {
      title: 'ChatBot + Voice Assistant',
      features: [
        'All ChatBot features',
        'Voice interaction capabilities',
        'Speech-to-text processing',
        'Natural voice responses',
        'Call routing & management',
        'Voice analytics & insights'
      ]
    },
    {
      title: 'ChatBot + Voice + Custom Automation',
      features: [
        'All previous features',
        'Custom workflow automation',
        'Advanced integrations',
        'Personalized AI training',
        'Database integrations',
        'Advanced AI model training',
        '90 days support & maintenance'
      ]
    },
    {
      title: 'Fully Custom Plan',
      features: [
        'Bespoke AI solution design',
        'Enterprise-grade security',
        'Dedicated development team',
        'Custom infrastructure',
        'White-label options',
        'Complete automation ecosystem',
        'Priority support & maintenance'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Choose Your AI Solution
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From simple chatbots to enterprise-grade custom solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="glass-card border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 relative group">
              {/* Plan icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 theme-gradient rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-md"></div>
                </div>
              </div>
              
              <CardHeader className="text-center pb-4 pt-10">
                <CardTitle className="text-lg font-bold text-white mb-4">
                  {plan.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 text-gray-300">
                      <div className="w-2 h-2 theme-gradient rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild
                  className="w-full theme-gradient hover:opacity-90 transition-opacity text-white border-0"
                >
                  <a 
                    href="https://wa.me/+917905538458" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Get Quote</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
