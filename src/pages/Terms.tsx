
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Terms & Conditions
            </h1>
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-xl">
            <div className="prose prose-lg text-gray-300 max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Service Agreement</h2>
                <p>By engaging LoopMind's AI automation services, you agree to our comprehensive terms of service. These terms govern the relationship between LoopMind and our clients, ensuring clear expectations and professional service delivery.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                <p>All custom AI models and automation systems developed remain the intellectual property of the client upon full payment completion. LoopMind retains rights to general methodologies and non-client-specific technologies used in the development process.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Service Delivery</h2>
                <p>Project timelines and deliverables will be outlined in individual service agreements. LoopMind commits to delivering high-quality AI automation solutions within agreed timeframes, with regular progress updates and milestone reviews.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Support & Maintenance</h2>
                <p>Ongoing support periods are defined by the selected service plan. Support includes bug fixes, performance optimization, and minor updates. Major feature additions or system overhauls may require separate agreements.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p>LoopMind's liability is limited to the total amount paid for services. We are not responsible for indirect damages, business interruption, or consequential losses arising from the use of our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                <p>Either party may terminate services with appropriate notice as specified in individual contracts. Upon termination, clients retain ownership of completed work and LoopMind will provide reasonable assistance for service transition.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
