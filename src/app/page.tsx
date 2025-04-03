export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* Hero Heading */}
      <h1 className="text-hero font-heading font-extrabold text-brand-dark leading-tight max-w-3xl">
        No Copywriter. No Marketer. No Designer – NO PROBLEM.
      </h1>

      {/* Subheading */}
      <p className="text-subhero font-body italic max-w-2xl mt-6 text-brand-soft">
        Finally—A Tool That Builds High-Converting Landing Pages in 4 Easy Steps So You Can Finally Get the MRR You Deserve, Even If You’re Just Starting Out.
      </p>

      {/* Waitlist Button */}
      <button className="mt-10 px-8 py-3 bg-brand-yellow font-heading font-bold rounded text-brand-dark hover:scale-105 transition-transform">
        I want to be first in the waiting list
      </button>
    </main>
  );
}
