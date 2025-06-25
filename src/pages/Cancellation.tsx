
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cancellation = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Cancellation Policy
            </h1>
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-xl">
            <div className="prose prose-lg text-gray-300 max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Cancellation Process</h2>
                <p>Projects can be cancelled with appropriate notice periods as defined in service agreements. Standard notice period is 7 days for ongoing projects. Emergency cancellations may be accommodated but could incur additional fees for work already in progress.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Processing Time</h2>
                <p>Approved refunds are processed within 5-10 business days to the original payment method. Bank transfer refunds may take additional time depending on financial institutions. We provide confirmation and tracking information for all refund transactions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Partial Refunds</h2>
                <p>For partially completed projects, refunds are calculated based on delivered milestones minus any setup costs, planning time, and completed development work. Clients retain ownership of all completed components and documentation.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cancellation;
