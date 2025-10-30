import { MessageCircle } from 'lucide-react';

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/967776999568"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="h-9 w-9" />
    </a>
  );
}
