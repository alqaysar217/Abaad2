import { WhatsAppIcon } from './whatsapp-icon';

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/967776999568"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="تواصل معنا عبر واتساب"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
