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
        viewBox="0 0 32 32"
        className="h-7 w-7 md:h-9 md:w-9 md:ml-2.5 md:mt-2.5"
        fill="currentColor"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.088.57 4.031 1.56 5.71L4 28l7.48-1.54C12.24 26.8 14.063 27 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10c-1.77 0-3.43-.47-4.87-1.29l-.35-.2-4.3.88.89-4.16-.22-.36C6.44 19.1 6 17.59 6 15 6 9.486 10.486 5 16 5Zm-3.14 4.02c-.22-.49-.45-.5-.66-.51-.17-.01-.37-.01-.58-.01-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.19 3.5 5.37 4.77 2.66 1.1 3.2.88 3.78.82.58-.06 1.87-.76 2.14-1.49.27-.73.27-1.36.19-1.49-.08-.13-.29-.21-.6-.37-.31-.16-1.83-.9-2.11-1-.28-.11-.48-.16-.68.16-.2.32-.78 1.02-.96 1.23-.18.21-.35.23-.65.08-.3-.15-1.27-.59-2.42-1.88-.9-.96-1.51-2.15-1.69-2.48-.18-.33-.02-.51.13-.66.13-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.38-.02-.53-.07-.15-.64-1.54-.88-2.11Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
