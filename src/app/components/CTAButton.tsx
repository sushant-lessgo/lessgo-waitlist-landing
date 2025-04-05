'use client';

interface CTAButtonProps {
  text?: string; // ✅ Optional
  href?: string; // ✅ Optional
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string; // ✅ Optional
}

export default function CTAButton({
    text = 'I want to be first in the waiting list',
    href = '#waitlist',
    onClick,
    className = 'mt-12',
  }: CTAButtonProps) {
  const baseStyles =
    'inline-block px-40 py-6 bg-amber-600 text-white text-4xl font-heading font-bold border-2 border-neutral-50 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out';

  

  const combinedStyles = `${baseStyles} ${className}`.trim();
  
  return (
    <button onClick={onClick} className={combinedStyles}>
      {text}
    </button>
  );
}