import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '905382815701';
  const message = 'Merhaba, web sitenizden ulaşıyorum.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 ring-2 ring-white/10 transition-transform hover:scale-110 md:block"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16 3C9.935 3 5 7.935 5 14c0 1.89.477 3.682 1.376 5.3L5 27l7.877-1.345A10.86 10.86 0 0 0 16 25c6.065 0 11-4.935 11-11S22.065 3 16 3Zm0 2c4.97 0 9 4.03 9 9s-4.03 9-9 9a8.82 8.82 0 0 1-2.73-.43l-.39-.13-4.59.78.8-4.47-.17-.29A8.78 8.78 0 0 1 7 14c0-4.97 4.03-9 9-9Zm-4.02 4.5c-.22 0-.57.08-.87.39-.3.31-1.14 1.11-1.14 2.7 0 1.59 1.17 3.13 1.33 3.35.16.22 2.3 3.68 5.67 5.01 2.8 1.11 3.37.89 3.98.83.61-.06 1.96-.8 2.24-1.57.28-.77.28-1.43.2-1.57-.08-.14-.31-.22-.65-.39s-2.02-1-2.33-1.11c-.31-.11-.54-.17-.77.17-.23.34-.89 1.11-1.09 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.75-1.69-1.02-.9-1.71-2.01-1.91-2.35-.2-.34-.02-.52.15-.69.16-.16.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.79-1.96-1.11-2.68-.26-.58-.53-.63-.73-.64Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
