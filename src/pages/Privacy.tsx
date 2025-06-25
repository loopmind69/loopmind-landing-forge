
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Privacy Policy
            </h1>
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-xl">
            <div className="prose prose-lg text-gray-300 max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Collection</h2>
                <p>We collect only necessary information to provide our AI automation services effectively. This includes contact information, business requirements, and technical specifications needed for project delivery. We do not collect personal data beyond what is required for professional service provision.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Usage</h2>
                <p>Client data is used exclusively for service delivery and improvement purposes. We analyze usage patterns to enhance our AI models and automation systems, but all client-specific information remains confidential and is never shared with third parties without explicit consent.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p>Enterprise-grade security measures protect all client information and AI models. We employ encryption, secure access controls, and regular security audits to ensure data integrity. Our infrastructure complies with industry standards for data protection and security.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                <p>Integration with external APIs is handled with strict privacy controls. We only share necessary data for service functionality and ensure all third-party providers meet our security standards. Client consent is required for any external data sharing.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                <p>We retain client data only as long as necessary for service provision and legal compliance. Upon request or contract termination, we securely delete or return all client data according to agreed specifications.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p>Clients have the right to access, modify, or delete their data at any time. We provide transparent reporting on data usage and maintain open communication about privacy practices. Contact us at hello@loopmind.ai for any privacy-related inquiries.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
