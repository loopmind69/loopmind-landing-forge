
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Refund = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Refund Policy
            </h1>
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-xl">
            <div className="prose prose-lg text-gray-300 max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Refund Eligibility</h2>
                <p>Refunds are available within 14 days of project initiation if no development work has commenced. Once active development begins, refunds are calculated based on completed milestones and delivered work. All refund requests must be submitted in writing with specific reasons.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Partial Refunds</h2>
                <p>For partially completed projects, refunds are calculated based on delivered milestones minus any setup costs, planning time, and completed development work. Clients retain ownership of all completed components and documentation.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Processing Time</h2>
                <p>Approved refunds are processed within 5-10 business days to the original payment method. Bank transfer refunds may take additional time depending on financial institutions. We provide confirmation and tracking information for all refund transactions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Non-Refundable Items</h2>
                <p>Setup fees, discovery calls, consultation time, and third-party service costs are non-refundable. Custom AI model training costs are also non-refundable once training has commenced. These policies will be clearly communicated before project initiation.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution</h2>
                <p>We encourage direct communication to resolve any concerns before formal refund requests. Our team is committed to client satisfaction and will work to address issues promptly. For unresolved disputes, we offer mediation services through neutral third parties.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Refund;
