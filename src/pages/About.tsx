
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              About Us
            </h1>
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-xl">
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                At LoopMind, we don't just build chatbots — we build intelligent systems that rethink how businesses run.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                From AI-powered conversations to full-scale process automation, we help brands create smarter, faster, and more human digital experiences. Whether it's a virtual assistant, an AI receptionist, or something completely custom — if it loops, we automate it.
              </p>
              
              <p className="text-lg leading-relaxed">
                This is just the beginning. Welcome to the Loop.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
