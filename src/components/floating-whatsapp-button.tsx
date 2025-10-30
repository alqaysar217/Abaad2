const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.004 4.998a9.85 9.85 0 0 0-13.922 0 9.85 9.85 0 0 0 0 13.924A9.85 9.85 0 0 0 12 21.848a9.839 9.839 0 0 0 7.004-2.926 9.85 9.85 0 0 0 0-13.924zM12 20.25c-4.54 0-8.25-3.71-8.25-8.25s3.71-8.25 8.25-8.25 8.25 3.71 8.25 8.25-3.71 8.25-8.25 8.25zm-.1-6.99c-.39-.2-2.2-.99-2.52-1.11s-.55-.18-.78.18-.95 1.11-1.17 1.33s-.44.24-.81.08c-.37-.16-1.57-.58-2.99-1.84s-2.31-2.94-2.42-3.26-.01-.48.15-.64c.15-.15.32-.38.48-.57.16-.19.21-.32.32-.53s.05-.38-.03-.53c-.08-.15-.78-1.87-.9-2.56s-.24-.59-.35-.59h-.62c-.24 0-.62.08-.95.41s-1.17 1.14-1.17 2.77.48 3.86 1.43 5.23c.96 1.37 2.45 2.89 5.02 3.73.58.19 1.12.28 1.7.35.8.09 1.54.06 2.1-.09.62-.16 1.79-1.03 2.05-1.92s.26-1.63.18-1.81c-.08-.18-.28-.29-.53-.41z" />
    </svg>
);

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/967776999568"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
      aria-label="تواصل معنا عبر واتساب"
    >
      <WhatsAppIcon className="h-9 w-9 md:h-10 md:w-10" />
    </a>
  );
}
