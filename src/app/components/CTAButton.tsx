'use client';

interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({ text, href, onClick, className = '' }: CTAButtonProps) {
  const baseStyles =
    'inline-block px-40 py-6 bg-amber-600 text-white text-4xl font-heading font-bold border-2 border-neutral-50 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out';

  

  const combinedStyles = `${baseStyles} ${className}`.trim();
  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {text}
      </a>
    );
  }

  return (
    <button className={combinedStyles} onClick={onClick}>
      {text}
    </button>
  );
}
