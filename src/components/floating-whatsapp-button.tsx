
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16.75 13.96c.25.13.43.2.5.33.07.13.07.55-.02.93-.1.38-.63.75-1.22.92-.58.17-1.12.2-3.4.12-2.54-.08-4.59-.85-6.3-2.58-1.7-1.74-2.73-3.9-2.88-5.93-.15-2.03.43-3.12.9-3.5.47-.4 1.05-.5 1.5-.5.45 0 .85.07 1.22.4.38.33.63.92.73 1.18.1.25.13.43.04.63-.1.2-.2.33-.37.5-.18.17-.35.33-.5.5-.15.17-.28.33-.28.58 0 .25.28.63.55.9.58.58 1.43 1.3 2.13 1.67.6.3 1.1.4 1.35.4.25 0 .5-.12.67-.3.17-.18.3-.37.45-.58.15-.2.33-.37.58-.45.25-.1.58-.07.8.12zM12 2a10 10 0 100 20 10 10 0 000-20z" />
    </svg>
  );

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
