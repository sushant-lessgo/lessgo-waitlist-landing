'use client';

interface CTAButtonProps {
  text?: string; // ✅ Optional
  href?: string; // ✅ Optional
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string; // ✅ Optional
}

export default function CTAButton({
    text = 'Join the waiting list now',
    href = '#waitlist',
    onClick,
    className = 'mt-12',
  }: CTAButtonProps) {
  const baseStyles =
    'inline-block px-8 sm:px-12 md:px-20 lg:px-40 py-6 bg-brand-accentPrimary text-white text-2xl sm:text-4xl font-heading font-bold border-2 border-brand-text rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out';

  

  const combinedStyles = `${baseStyles} ${className}`.trim();
  
  return (
    <button onClick={onClick} className={combinedStyles}>
      {text}
    </button>
  );
}