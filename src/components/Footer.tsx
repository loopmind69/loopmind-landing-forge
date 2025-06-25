
import { MessageCircle, Linkedin } from 'lucide-react';

const Footer = () => {
  const policyContent = {
    'About Us': `At LoopMind, we don't just build chatbots — we build intelligent systems that rethink how businesses run.

From AI-powered conversations to full-scale process automation, we help brands create smarter, faster, and more human digital experiences. Whether it's a virtual assistant, an AI receptionist, or something completely custom — if it loops, we automate it.

This is just the beginning. Welcome to the Loop.`,
    
    'Terms & Conditions': `Service Agreement
By engaging LoopMind's AI automation services, you agree to our comprehensive terms of service. These terms govern the relationship between LoopMind and our clients, ensuring clear expectations and professional service delivery.

Intellectual Property
All custom AI models and automation systems developed remain the intellectual property of the client upon full payment completion. LoopMind retains rights to general methodologies and non-client-specific technologies used in the development process.

Service Delivery
Project timelines and deliverables will be outlined in individual service agreements. LoopMind commits to delivering high-quality AI automation solutions within agreed timeframes, with regular progress updates and milestone reviews.

Support & Maintenance
Ongoing support periods are defined by the selected service plan. Support includes bug fixes, performance optimization, and minor updates. Major feature additions or system overhauls may require separate agreements.

Limitation of Liability
LoopMind's liability is limited to the total amount paid for services. We are not responsible for indirect damages, business interruption, or consequential losses arising from the use of our services.

Termination
Either party may terminate services with appropriate notice as specified in individual contracts. Upon termination, clients retain ownership of completed work and LoopMind will provide reasonable assistance for service transition.`,
    
    'Privacy Policy': `Data Collection
We collect only necessary information to provide our AI automation services effectively. This includes contact information, business requirements, and technical specifications needed for project delivery. We do not collect personal data beyond what is required for professional service provision.

Data Usage
Client data is used exclusively for service delivery and improvement purposes. We analyze usage patterns to enhance our AI models and automation systems, but all client-specific information remains confidential and is never shared with third parties without explicit consent.

Data Security
Enterprise-grade security measures protect all client information and AI models. We employ encryption, secure access controls, and regular security audits to ensure data integrity. Our infrastructure complies with industry standards for data protection and security.

Third-Party Services
Integration with external APIs is handled with strict privacy controls. We only share necessary data for service functionality and ensure all third-party providers meet our security standards. Client consent is required for any external data sharing.

Data Retention
We retain client data only as long as necessary for service provision and legal compliance. Upon request or contract termination, we securely delete or return all client data according to agreed specifications.

Your Rights
Clients have the right to access, modify, or delete their data at any time. We provide transparent reporting on data usage and maintain open communication about privacy practices. Contact us at hello@loopmind.ai for any privacy-related inquiries.`,
    
    'Refund Policy': `Refund Eligibility
Refunds are available within 14 days of project initiation if no development work has commenced. Once active development begins, refunds are calculated based on completed milestones and delivered work. All refund requests must be submitted in writing with specific reasons.

Partial Refunds
For partially completed projects, refunds are calculated based on delivered milestones minus any setup costs, planning time, and completed development work. Clients retain ownership of all completed components and documentation.

Processing Time
Approved refunds are processed within 5-10 business days to the original payment method. Bank transfer refunds may take additional time depending on financial institutions. We provide confirmation and tracking information for all refund transactions.

Non-Refundable Items
Setup fees, discovery calls, consultation time, and third-party service costs are non-refundable. Custom AI model training costs are also non-refundable once training has commenced. These policies will be clearly communicated before project initiation.

Dispute Resolution
We encourage direct communication to resolve any concerns before formal refund requests. Our team is committed to client satisfaction and will work to address issues promptly. For unresolved disputes, we offer mediation services through neutral third parties.`,
    
    'Cancellation Policy': `Cancellation Process
Projects can be cancelled with appropriate notice periods as defined in service agreements. Standard notice period is 7 days for ongoing projects. Emergency cancellations may be accommodated but could incur additional fees for work already in progress.

Processing Time
Approved refunds are processed within 5-10 business days to the original payment method. Bank transfer refunds may take additional time depending on financial institutions. We provide confirmation and tracking information for all refund transactions.

Partial Refunds
For partially completed projects, refunds are calculated based on delivered milestones minus any setup costs, planning time, and completed development work. Clients retain ownership of all completed components and documentation.`
  };

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#', content: policyContent['About Us'] },
        { name: 'Terms & Conditions', href: '#', content: policyContent['Terms & Conditions'] },
        { name: 'Privacy Policy', href: '#', content: policyContent['Privacy Policy'] },
        { name: 'Refund Policy', href: '#', content: policyContent['Refund Policy'] },
        { name: 'Cancellation Policy', href: '#', content: policyContent['Cancellation Policy'] }
      ]
    }
  ];

  return (
    <footer className="relative py-16 border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/43998ece-6ec9-4e4a-9898-e140a72c496b.png" 
                alt="LoopMind"
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold gradient-text">LoopMind</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              AI automation solutions that transform how businesses operate. 
              Welcome to the future of intelligent automation.
            </p>

            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/loopmind" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              
              <a 
                href="https://wa.me/+917905538458" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full theme-gradient hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks[0].links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors group"
                    title={link.content}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/+917905538458" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 theme-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </a>
              
              <p className="text-gray-400 text-sm">
                Ready to automate your business? Let's talk about your AI needs.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} LoopMind. All rights reserved. 
            <span className="gradient-text ml-2">Welcome to the Loop.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
