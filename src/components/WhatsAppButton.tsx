import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  // Placeholder link - can be replaced later with actual WhatsApp number
  const whatsappLink = 'https://wa.me/YOUR_PHONE_NUMBER_HERE';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
