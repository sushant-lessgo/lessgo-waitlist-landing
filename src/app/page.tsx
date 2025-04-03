import CTAButton from "./components/CTAButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* Eyebrow */}
      <h2 className="text-eyebrow font-heading text-brand-dark leading-tight max-w-[60rem]">
        No Copywriter. No Marketer. No Designer – NO PROBLEM.
      </h2>

      {/* Heading*/}
      <h1 className="text-headline font-heading font-extrabold text-brand-dark leading-tight max-w-[70rem]">
      4 Easy Steps to Consistent MRR
      </h1>

      {/* Subheading */}
      <p className="text-subheadline font-body italic max-w-[60rem] mt-6 text-brand-soft">
        Finally—A Tool That Builds High-Converting Landing Pages in 4 Easy Steps So You Can Finally Get the MRR You Deserve, Even If You’re Just Starting Out.
      </p>
      
      <CTAButton text="I want to be first in the waiting list" href="#waitlist" className="mt-12" />
    </main>
  );
}


