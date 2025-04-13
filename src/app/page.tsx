"use client";
import { useState } from "react";
import CTAButton from "./components/CTAButton";
import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  return (
   
   <>

<header className="w-full sticky top-0 bg-white z-50 shadow-sm py-3">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
    <img src="/logo.svg" alt="Lessgo Logo" className="h-48 -my-20" />
  </div>
</header>


   
   <main className="flex flex-col items-center justify-center px-6 py-20 text-center">
    
   
      {/* Heading*/}
      <h1 className="text-headline font-heading font-extrabold text-brand-text leading-tight max-w-[70rem]">
      The <span className="underline text-brand-accentPrimary">Simplest</span> Way to Turn Your Idea Into a High Converting Landing Page — Without Spending $5,000+ on Copywriters or “Growth Hackers”
      </h1>

      {/* Subheading */}
      <p className="text-subheadline font-semibold font-body italic text-brand-text max-w-[60rem] mt-6">
      35 year-old entrepreneur from Amsterdam builds a super-intuitive new AI that can easily make the perfect
      “Cash Cow Landing Page” — in as little as four simple steps
      </p>
      
      {!showForm && (
        <CTAButton
          
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}

      
      <div className="text-brand-text text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
        

          {/* Intro Section */}
          <div className="mb-4 max-w-3xl mx-auto text-body space-y-6 leading-relaxed">
            <p className="text-xl font-bold">Dear Friend,</p>
            <p>If you are a SaaS founder… and you’re reading this right now…</p>
            <p>Then one thing is probably true:</p>
            <p className="underline">You’re stuck with a landing page that won’t convert.</p>
            <p>Listen, if you're anything like me, you've probably already tried your luck with some of the more "popular" solutions...</p>
            <p>Like freelancers.</p>
            <p>They're good when they're good, but there's always a handful that's not.</p>
            <p>And nine times out of ten, most freelancers you hire will usually end up disappointing you.</p>
            <p>It could be something simple -- like misplacing a dot or a comma... or it could be something much worse -- like you paid $600 to end up with a clunky mess that looks like it was built in Dreamweaver by a sleep-deprived IT student in 2003 — and somehow no one told them we’ve moved on.</p>
            <p>Or maybe you’ve tried no-code tools.</p>
            <p>They say it’s plug-and-play — but only if you’ve got the instincts of a designer and the patience of a monk.</p>
            <p>Most founders?</p>
            <p>They start with a “simple” template…</p>
            <p>Then spend six hours obsessing over font sizes, button shadows, and spacing that never quite aligns.</p>
            <p>Suddenly, it’s 2 a.m. and your “quick landing page” still doesn’t feel launch-ready.</p>
            <p>(I know because I've been there.)</p>
            <p>Maybe you’ve even tried one of those AI-powered landing page builders — hoping for a quick win.</p>
            <p>But the best thing you could get was a lot of soulless, cookie-cutter copy that reads like ChatGPT got stuck in marketing school.</p>
            <p>Looks decent.</p>
            <p>Sounds... kinda okay.</p>
            <p>Does it convert though? Not really.</p>
            <p>It’s like AI helped you write something —</p>
            <p>Just not something you’d actually publish.</p>
            <p>Because, let’s face it…</p>
            <p className="font-bold underline">Pretty landing pages don’t sell SaaS.</p>
            <p>They might work for:</p>
            <ul className="pl-8 mb-6 text-body">
            <li className="mb-2"> <span> ▸ </span> <span> Instagram lifestyle coaches </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Design portfolios </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Personal blogs </span> </li>
          </ul>
            <p>But for a SaaS product in 2025?</p>
            <p>Looks nice ≠ converts.</p>
            <p>You need clarity, copy that speaks to real pain, and structure that moves people to act. </p>
          </div>

          <div className="mb-20">
          {!showForm && (
        <CTAButton
          
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}

      </div>

          {/* Problem Section */}
          <div className="mb-4 max-w-3xl mx-auto text-body space-y-6 leading-relaxed">
            <p className="text-headline font-semibold text-center"> You see, things are going to be different from 2025.</p>
            <p>We’re not talking about the AI tools of 2023 anymore that spat out generic headlines and lorem ipsum-level content.</p>
            <p>With the launch of GPT-4.5, multi-turn reasoning, and context-aware generation, AI can now:</p>

            <ul className="pl-8 mb-6 text-body">
            <li className="mb-2"> <span> ▸ </span> <span> Analyze entire subreddits, review threads, and user interviews </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Distill actual pain points and buyer language from live data </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Write copy that reflects what users want to hear, not just what sounds nice </span> </li>
            <li className="mb-2"> <span> ▸ </span> <span> Suggest layouts that mirror proven high-conversion frameworks — and adapt them to the message </span> </li>
          </ul>


            <p>Do you see the common thread here?</p>
            <p>I’m talking about how AI isn’t producing “garbage content” anymore.    </p>
            <p> This thing can now produce copy and content fueled to the brim with persuasion tactics of the likes of Dan Kennedy and design layouts that could give Russell Brunson nightmares.
            </p>
            <p> And guess what? I bet even Russell Brunson uses AI for some of his work these days.   </p>
            <p> Does this make him “lazy”?
            </p>
            <p> No.   </p>
            <p> This makes him smart.   </p>
            <p> AND THAT SHOULD SCARE YOU.   </p>
            <p> Why?   </p>
            <p> Because it’s not just Russell—but nearly 80% of your competition—that’s using AI like this to move up the ladder and push out content after content these days.   </p>
            <p> This means they’re making all the moolah while you sit there twiddling your thumbs trying to push out the next big landing page out of your mental poophole.   </p>
            <p> But it’s not your fault.   </p>
            <p> It’s just that they’re too clever to advertise this super-weapon in front of the rest of the world.   </p>
            <p>  The only problem with their use of AI?  </p>
            <p>  (AKA <span className="font-bold">good news for you…</span> )  </p>
            <p className="underline"> Is that most of their tools are still not able to make THE BEST use of this new version of  AI. </p>
            <p> Because one thing they’ve never quite been able to do… <span className="font-bold"> is combine research, copy, and design into one single conversion system. </span> </p>
            <p> And that’s where we step in. </p>
           





          </div>

          <div className="mb-20">
          {!showForm && (
        <CTAButton
          
          onClick={(e) => {
            e.preventDefault(); // If you're still using <a> in CTAButton
            setShowForm(true); // ✅ Toggle the form
          }}
        />
      )}

      {showForm && <WaitlistForm />}

      </div>


          {/* Year 2025 Section */}
          <div className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">2025 is the year we witness history in the making</h2>
            
            <p className="text-lg mb-4">You think to get out of this generic templetey landing page mess you need:</p>
            <ul className="space-y-2 mb-8 ml-6">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></span>
                <span>A highly skilled copywriter</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></span>
                <span>A world-class designer</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></span>
                <span>A genius marketing strategist</span>
              </li>
            </ul>
            
            <p className="text-lg mb-6">Lets get real here.</p>
            
            <p className="text-lg mb-6">This is 2025. The AI has made significant progress that it can do market research on its own (actually better than your "millinaire in my 20s" copywriter), create a copy based on the market research and provide a unique design to complement that copy.</p>
            
            <p className="text-lg mb-8">But...</p>
            
            <p className="text-lg mb-8">It pains me to see existing tools are not making right use of AI.</p>
          </div>

          {/* About the Founder */}
          <div className="mb-16 max-w-3xl mx-auto">
            <p className="text-lg mb-6">I am Sushant, I'm a Software Engineer and a SaaS founder too.</p>
            
            <p className="text-lg mb-6">In my 14 years of experience I have learnt few lessons the hard way:</p>
            
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li className="text-lg">I focused on product, product, product all the way ONLY to realize there is no one to buy them. MARKETING IS IMPORTANT</li>
              <li className="text-lg">I created landing pages like a tick in the box ONLY to realize there is no conversion. LANDING PAGES MATTERS</li>
              <li className="text-lg">I created fancy looking landing pages ONLY to realize people can kiss that landing page but will not subscribe</li>
            </ol>
            
            <p className="text-lg mb-6">I got frustrated. I tried ALMOST ALL of the popular tools and To BE Honest I HATE THEM ALL.</p>
            
            <p className="text-lg mb-6">Why?</p>
            
            <p className="text-lg mb-6">You know how it goes.</p>
            
            <p className="text-lg mb-6">Tweak a template for hours. Rewrite generic AI copy that sounds like everyone else. Pray it convinces users---or worse, investors.</p>
            
            <p className="text-lg mb-8">You're a founder, not a designer. You solve problems, not pixel-push. Yet here you are, burning midnight oil on a page that might not even convert.</p>
          </div>

          {/* Solution Section */}
          <div className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Thats why I am creating Lessgo.AI</h2>
            
            <p className="text-lg italic mb-6">Lessgo.ai isn't another template trap.</p>
            
            <p className="text-lg italic mb-6">Lessgo.ai is powered by a Conversion Intelligence Engine.</p>
            
            <p className="text-lg mb-6">It is built with one SPECIFIC purpose to INCREASE your conversion using 4 Easy Steps</p>
            
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li className="text-lg">Drop one line about your SaaS---like "AI chatbot for customer support."</li>
              <li className="text-lg">Answer a few smart follow-up questions.</li>
              <li className="text-lg">Watch it build a landing page that's persuasive, polished, and optimized to convert---tailored to your idea.</li>
              <li className="text-lg">Edit if required using drag and drop UI and Publish.</li>
            </ol>
            
            <p className="text-lg mb-6">Not just that, it also has:</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex">
                <span className="text-green-600 mr-2">✅</span>
                <span>One-line input: "Your SaaS in a sentence"</span>
              </li>
              <li className="flex">
                <span className="text-green-600 mr-2">✅</span>
                <span>Dynamic AI questions to nail your pitch</span>
              </li>
              <li className="flex">
                <span className="text-green-600 mr-2">✅</span>
                <span>Auto-built page with investor-ready copy & layout</span>
              </li>
              <li className="flex">
                <span className="text-green-600 mr-2">✅</span>
                <span>Built-in CTAs, social proof, and urgency triggers</span>
              </li>
              <li className="flex">
                <span className="text-green-600 mr-2">✅</span>
                <span>Instantly hosted, fully editable</span>
              </li>
              <li className="flex">
                <span className="text-green-600 mr-2">✅</span>
                <span>Conversion-optimized for sign-ups or funding</span>
              </li>
            </ul>
          </div>

          {/* Warning Section */}
          <div className="mb-16 max-w-3xl mx-auto">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
              <p className="text-lg italic mb-2">Warning:</p>
              <p className="text-lg italic">It will not create landing page "in seconds". It will take few minutes because Conversion Intelligence Engine needs that time to do proper market research, generate copy, pick your unique design. We think thats fair.</p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16 max-w-3xl mx-auto">
            <p className="text-lg mb-6">See typical Copywriter + Designer + Marketer will cost in $1000s</p>
            
            <p className="text-lg mb-6">Other AI tools will charge you $50 per month</p>
            
            <p className="text-lg mb-6">But if you join today then you will get:</p>
            
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg mb-8">
              <p className="text-lg font-bold text-center mb-6">1 year Pro Features FREE of cost from the day of public launch</p>
            </div>
            
            <p className="text-lg mb-6">On top of it...</p>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg mb-8">
              <p className="text-lg font-bold text-center">Lifetime discount upto 60%</p>
            </div>
            
            <p className="text-lg mb-6">Why?</p>
            
            <p className="text-lg mb-8">We are at a pre-launch and you will be one of our early users.</p>
            
            <p className="text-lg mb-6">To sum it up...</p>
            
            <p className="text-lg mb-6">If you join now then you will get:</p>
            
            <div className="space-y-3 mb-8">
              <p className="text-lg italic"><span className="text-2xl">🎁</span> One year of Pro Features free of cost</p>
              <p className="text-lg italic"><span className="text-2xl">🎁</span> Lifetime access at a steal</p>
              <p className="text-lg italic"><span className="text-2xl">⚡</span> First dibs on beta</p>
              <p className="text-lg italic"><span className="text-2xl">💬</span> Input on features (your SaaS needs, prioritized)</p>
            </div>
            
            <div className="bg-red-100 border-l-4 border-red-500 p-5 rounded-lg">
              <p className="text-lg">But listen, this is ONLY for the first 100 users and seats are filling FAST. So I highly recommend you to sign up without wasting time</p>
            </div>
          </div>

         

          {/* FAQ Section */}
          <div className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 bg-yellow-100 px-4 py-2 rounded-lg inline-block">FAQ:</h2>
            
            <div className="space-y-8">
              <div>
                <p className="text-lg font-medium mb-2 bg-yellow-100 px-4 py-2 rounded-lg inline-block">1. When is it going live?</p>
                <p className="text-lg bg-yellow-100 px-4 py-2 rounded-lg">The first MVP is scheduled to be live by May End. We will ALWAYS inform you when we have updates once you sign up.</p>
              </div>
              
              <div>
                <p className="text-lg font-medium mb-2 bg-yellow-100 px-4 py-2 rounded-lg inline-block">2. What exactly will I get from lessgo.ai?</p>
                <p className="text-lg bg-yellow-100 px-4 py-2 rounded-lg">You will be able to create a High-Converting landing page leveraging our Conversion Intelligence Engine in 4 easy steps.</p>
              </div>
              
              <div>
                <p className="text-lg font-medium italic mb-2 bg-yellow-100 px-4 py-2 rounded-lg inline-block">3. I'm just starting out as a founder, I dont have a product yet --- can this work for me?</p>
                <p className="text-lg bg-yellow-100 px-4 py-2 rounded-lg">Yes, and in fact you we highly recommend you to create the landing page first and then build so that you build exactly what you can sell</p>
              </div>
              
              <div>
                <p className="text-lg font-medium mb-2 bg-yellow-100 px-4 py-2 rounded-lg inline-block">4. What makes this different from all the other Landing Page Builder tools out there?</p>
                <p className="text-lg bg-yellow-100 px-4 py-2 rounded-lg">Most landing pages generated by these tools are too generic. This system goes deeper with the help of Conversion Intelligence Engine to help you create a truly High-Converting landing page.</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-gray-600">
            <p>© 2025 Lessgo.AI. All rights reserved.</p>
          </footer>
          
        </div>
      </div>
    

  
    </main>
    </>
  );
}