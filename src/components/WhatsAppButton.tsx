import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919850504437?text=Hi!%20I'm%20interested%20in%20Explorers%20treks%20and%20tours."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-[#fff] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20BD5A] hover:shadow-xl sm:bottom-6 sm:right-6 sm:px-5"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
