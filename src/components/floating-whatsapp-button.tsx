const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.004 4.998a9.85 9.85 0 0 0-13.922 0 9.85 9.85 0 0 0 0 13.924A9.85 9.85 0 0 0 12 21.848a9.839 9.839 0 0 0 7.004-2.926 9.85 9.85 0 0 0 0-13.924zM12 20.25c-4.54 0-8.25-3.71-8.25-8.25s3.71-8.25 8.25-8.25 8.25 3.71 8.25 8.25-3.71 8.25-8.25 8.25zm.51-6.722c.24.12.42.19.49.31.06.12.06.53-.02.89-.09.37-.61.73-1.18.89-.56.16-1.09.19-3.3.11-2.46-.08-4.44-.82-6.1-2.5-1.65-1.68-2.64-3.78-2.79-5.74-.14-1.97.42-3.03.87-3.4.45-.39 1.02-.48 1.45-.48.44 0 .82.07 1.18.39.36.32.61.9.7 1.14.1.24.13.42.04.61-.1.19-.2.32-.36.48-.17.16-.34.32-.48.48-.15.17-.27.32-.27.56 0 .24.27.61.53.87.57.56 1.39 1.26 2.06 1.61.58.29 1.06.39 1.3.39.25 0 .49-.12.65-.29.16-.17.29-.36.43-.56.14-.2.32-.36.56-.44.24-.09.56-.07.78.11z" />
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
