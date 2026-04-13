import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20your%20treks."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-[#fff] rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
